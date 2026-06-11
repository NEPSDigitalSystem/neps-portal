// Simple API client helper for interacting with the backend (mock REDCap)

import type {
  Participant,
  ParticipantsResponse,
  ProjectStats,
  SurveyResponse,
  ConsentRecord,
  DistressScreening,
  DistressScreeningsResponse,
  WP6Session,
  WP6SessionsResponse,
  HealthResponse,
  ParticipantSurveysResponse,
} from "@/app/types/redcap";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

class ApiClient {
  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json() as T;
  }

  // Health check
  async getHealth(): Promise<HealthResponse> {
    return this.fetch<HealthResponse>("/api/redcap/health");
  }

  // Participants
  async getParticipants(country?: string, site?: string, status?: string, limit?: number): Promise<ParticipantsResponse> {
    const params = new URLSearchParams();
    if (country) params.append("country", country);
    if (site) params.append("site", site);
    if (status) params.append("status", status);
    if (limit) params.append("limit", limit.toString());

    return this.fetch<ParticipantsResponse>(`/api/redcap/participants?${params}`);
  }

  async getParticipant(recordId: string): Promise<Participant> {
    return this.fetch<Participant>(`/api/redcap/participants/${recordId}`);
  }

  // Surveys
  async getParticipantSurveys(recordId: string): Promise<ParticipantSurveysResponse> {
    return this.fetch<ParticipantSurveysResponse>(`/api/redcap/participants/${recordId}/surveys`);
  }

  // Consent
  async getParticipantConsent(recordId: string): Promise<ConsentRecord> {
    return this.fetch<ConsentRecord>(`/api/redcap/participants/${recordId}/consent`);
  }

  // Distress Screenings
  async getDistressScreenings(status?: string): Promise<DistressScreeningsResponse> {
    const params = new URLSearchParams();
    if (status) params.append("status", status);

    return this.fetch<DistressScreeningsResponse>(`/api/redcap/screenings/distress?${params}`);
  }

  // WP6 Sessions
  async getWP6Sessions(recordId: string): Promise<WP6SessionsResponse> {
    return this.fetch<WP6SessionsResponse>(`/api/redcap/wp6/sessions/${recordId}`);
  }

  // Stats
  async getProjectStats(): Promise<ProjectStats> {
    return this.fetch<ProjectStats>("/api/redcap/stats");
  }
}

// Export singleton instance
export const apiClient = new ApiClient();
