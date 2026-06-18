// TypeScript types for the NEPS Portal and REDCap API responses

export interface Participant {
  id?: string;
  record_id: string;
  redcap_event_name?: string;
  country: string;
  site: string;
  school?: string;
  age?: number;
  date_of_birth?: string;
  gender?: string;
  grade_level?: number | string;
  enrollment_date?: string;
  cohort_status?: string;
  phone_contact?: string;
  consent_status?: string;
  redcap_data_access_group?: string;
  redcap_repeat_instrument?: string;
  redcap_repeat_instance?: string;
  created_at?: string;
  updated_at?: string;
}

export interface SurveyResponse {
  id?: string;
  record_id: string;
  redcap_event_name?: string;
  month?: number;
  survey_date?: string;
  survey_complete?: string;
  perceived_stress_score?: number;
  mood_status?: string;
  anxiety_score?: number;
  depression_score?: number;
  sleep_quality?: string;
  daily_functioning?: number;
  fatigue_level?: string;
  school_attendance_days?: number;
  social_isolation_score?: number;
  coping_behaviours?: string;
  substance_use?: string;
  suicidality_screening?: string;
  self_esteem_score?: number;
  loneliness_score?: number;
  risk_flag?: string;
  requires_follow_up?: string;
  resilience_score?: number;
  social_support?: number;
}

export interface DistressScreening {
  id: string;
  record_id: string;
  country?: string;
  site?: string;
  screening_date?: string;
  distress_score?: number;
  suicidality_flag?: string;
  severity?: "low" | "moderate" | "high" | "critical";
  trigger_form?: string;
  assigned_responder?: string;
  resolution_status?: string;
  welfare_check_due?: string;
  created_at?: string;
}

export interface WP6Session {
  id: string;
  record_id: string;
  country?: string;
  site?: string;
  session_number: number;
  session_date?: string;
  attendance?: string;
  engagement_level?: number;
  fidelity_score?: number;
  satisfaction_score?: number;
  distress_pre?: number;
  distress_post?: number;
}

export interface PortalStats {
  total_participants: number;
  active_participants: number;
  consent_breakdown: Record<string, number>;
  cohort_breakdown: Record<string, number>;
  total_screenings: number;
  open_alerts: number;
  high_severity_alerts: number;
  total_wp6_sessions: number;
  open_referrals: number;
  total_surveys: number;
}

export interface DistressTrend {
  month: number;
  avg_stress: number;
  avg_anxiety: number;
  avg_depression: number;
  n: number;
}

export interface PaginatedResponse<T> {
  total: number;
  limit: number;
  offset: number;
  items: T[];
}

export interface HealthResponse {
  status: string;
  app_name?: string;
  app_env?: string;
  redcap_mock_enabled?: boolean;
}
