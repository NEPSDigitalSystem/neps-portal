// Secure API client for the NEPS Portal to interact with the Backend API

import type {
  Participant,
  PaginatedResponse,
  PortalStats,
  DistressTrend,
  DistressScreening,
  WP6Session,
  HealthResponse,
} from "@/app/types/redcap";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

class ApiClient {
  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // Secure headers and basic error handling
    const defaultHeaders = {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options?.headers,
        },
      });

      if (!response.ok) {
        // Detailed error for developers, generic for production logs
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `API Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`
        );
      }

      return response.json() as T;
    } catch (error) {
      console.error(`Fetch failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // --- HEALTH & SYSTEM ---
  async getHealth(): Promise<HealthResponse> {
    return this.fetch<HealthResponse>("/health");
  }

  // --- PORTAL DATA (New API) ---
  async getPortalStats(): Promise<PortalStats> {
    return this.fetch<PortalStats>("/api/portal/stats");
  }

  async getDistressTrends(country?: string, site?: string): Promise<DistressTrend[]> {
    const params = new URLSearchParams();
    if (country) params.append("country", country);
    if (site) params.append("site", site);
    return this.fetch<DistressTrend[]>(`/api/portal/distress/trends?${params}`);
  }

  async getDistressAlerts(status = "open", limit = 50): Promise<PaginatedResponse<DistressScreening>> {
    const params = new URLSearchParams({ status, limit: limit.toString() });
    return this.fetch<PaginatedResponse<DistressScreening>>(`/api/portal/distress/alerts?${params}`);
  }

  // --- PARTICIPANTS ---
  async getParticipants(params: {
    country?: string;
    site?: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<Participant>> {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) query.append(key, value.toString());
    });
    return this.fetch<PaginatedResponse<Participant>>(`/api/portal/participants?${query}`);
  }

  async getParticipantDetail(recordId: string): Promise<Participant> {
    return this.fetch<Participant>(`/api/portal/participants/${recordId}`);
  }

  // --- WP6 INTERVENTIONS ---
  async getWP6Summary(): Promise<any> {
    return this.fetch<any>("/api/portal/wp6/summary");
  }

  async getWP6Sessions(limit = 50): Promise<PaginatedResponse<WP6Session>> {
    return this.fetch<PaginatedResponse<WP6Session>>(`/api/portal/wp6/sessions?limit=${limit}`);
  }
}

// Export singleton instance
export const apiClient = new ApiClient();
