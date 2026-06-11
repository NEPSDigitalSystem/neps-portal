// TypeScript types for the mock REDCap API responses

export interface Participant {
  record_id: string;
  redcap_event_name: string;
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
}

export interface SurveyResponse {
  record_id: string;
  redcap_event_name: string;
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
  redcap_repeat_instrument?: string;
  redcap_repeat_instance?: string;
  examination_stress?: number;
  academic_pressure?: number;
  homework_burden?: number;
  school_climate?: string;
  bullying_exposure?: string;
  harsh_discipline?: string;
  educational_aspirations?: string;
  fear_of_failure?: number;
  teacher_support?: number;
  counselling_access?: string;
  household_assets?: number;
  food_insecurity?: string;
  economic_strain?: number;
  employment_pressure?: string;
  financial_stress?: number;
  digital_access?: string;
  household_instability?: string;
  internalised_stigma?: number;
  community_stigma?: number;
  family_stigma?: number;
  school_stigma?: number;
  mental_health_literacy?: number;
  help_seeking_intention?: string;
  help_seeking_behaviour?: string;
  awareness_of_services?: string;
  resilience_score?: number;
  social_support?: number;
  family_connectedness?: number;
  peer_support?: number;
  community_connectedness?: number;
  religious_support?: number;
  school_belonging?: number;
}

export interface ConsentRecord {
  record_id: string;
  consent_date?: string;
  consent_version?: string;
  consent_status?: string;
  guardian_consent?: string;
  assent_status?: string;
  consent_withdrawn?: string;
  withdrawal_reason?: string;
  re_consent_required?: string;
  re_consent_date?: string;
}

export interface DistressScreening {
  record_id: string;
  screening_date?: string;
  distress_score?: number;
  suicidality_flag?: string;
  severity?: "low" | "moderate" | "high" | "critical";
  trigger_form?: string;
  trigger_item?: string;
  assigned_responder?: string;
  action_taken?: string;
  referral_made?: string;
  referral_destination?: string;
  welfare_check_due?: string;
  resolution_status?: string;
}

export interface Referral {
  referral_id: string;
  record_id: string;
  initiation_date?: string;
  destination?: string;
  status?: string;
  notes?: string;
  follow_up_date?: string;
}

export interface WP6Session {
  record_id: string;
  session_number: number;
  session_date?: string;
  attendance?: string;
  engagement_level?: number;
  fidelity_score?: number;
  satisfaction_score?: number;
  homework_completion?: string;
  distress_pre?: number;
  distress_post?: number;
}

export interface ProjectStats {
  total_participants: number;
  by_country: {
    Ghana: number;
    "Sierra Leone": number;
    Tanzania: number;
  };
  active_cohort: number;
  total_surveys: number;
  high_risk_flags: number;
  open_referrals: number;
  wp6_enrolled: number;
}

export interface ParticipantsResponse {
  data: Participant[];
  total: number;
  filtered: number;
  mode: string;
}

export interface ParticipantSurveysResponse {
  record_id: string;
  responses: SurveyResponse[];
  count: number;
}

export interface DistressScreeningsResponse {
  screenings: DistressScreening[];
  count: number;
  high_risk_count: number;
}

export interface WP6SessionsResponse {
  record_id: string;
  sessions: WP6Session[];
  total_sessions: number;
  attendance_rate: number;
}

export interface HealthResponse {
  status: string;
  mode: string;
  note: string;
}
