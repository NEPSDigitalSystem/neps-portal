import { Severity } from "@/app/utils/dangerConfig";

export const alerts: {
  id: number;
  title: string;
  date: string;
  severity: Severity;
}[] = [
  {
    id: 1,
    title: "3 Participants flagged for suicidality",
    date: "Today, 09:15 AM",
    severity: "critical",
  },
  {
    id: 2,
    title: "5 Overdue consent renewals",
    date: "Yesterday, 4:30 PM",
    severity: "high",
  },
  {
    id: 3,
    title: "16 Participants with missing 6-month survey",
    date: "Today, 08:00 AM",
    severity: "moderate",
  },
  {
    id: 4,
    title: "REDCap sync last completed",
    date: "Today, 02:15 AM",
    severity: "low",
  },
];

export const recentActivities = [
  {
    id: 1,
    user: "Akosua Gyamfua",
    action: "Added 24 participants",
    module: "Data Collection",
    time: "Today, 10:30 AM",
  },
  {
    id: 2,
    user: "Robert Annorhene",
    action: "Resolved safeguarding alert",
    module: "Safeguarding",
    time: "Today, 09:45 AM",
  },
  {
    id: 3,
    user: "Asare Kotor",
    action: "Completed data",
    module: "Data Quality",
    time: "Yesterday, 05:20 PM",
  },
  {
    id: 4,
    user: "Linda Fondjo",
    action: "Added stakeholder meeting notes",
    module: "WPS Engagement",
    time: "Yesterday, 04:10 PM",
  }
]

export const dataCollection = [
  {
    id: 1,
    site: "Kumasi (Ghana)",
    forms_completion: 82,
    pending: 45,
    overdue: 8,
  },
  {
    id: 2,
    site: "Accra (Ghana)",
    forms_completion: 76,
    pending: 25,
    overdue: 5,
  },
  {
    id: 3,
    site: "Ho (Ghana)",
    forms_completion: 50,
    pending: 38,
    overdue: 6,
  },
  {
    id: 4,
    site: "Tamale (Ghana)",
    forms_completion: 44,
    pending: 33,
    overdue: 9,
  },
  {
    id: 5,
    site: "Freetown (Sierra Leone)",
    forms_completion: 72,
    pending: 31,
    overdue: 8,
  },
  {
    id: 6,
    site: "Dar es Salaam (Tanzania)",
    forms_completion: 68,
    pending: 28,
    overdue: 9,
  }
]

export const workPackageData = [
  {
    id: 1,
    package: "WP1",
    title: "Project Management & Coordination",
    status: "On Track",
    label: "bg-red-500",
    profile: "P",
  },
  {
    id: 2,
    package: "WP2",
    title: "Baseline Study (Quant & Qaul)",
    status: "On Track",
    label: "bg-green-500",
    profile: "S",
  },
  {
    id: 3,
    package: "WP3",
    title: "Biological & Neurocognitive",
    status: "On Track",
    label: "bg-blue-500",
    profile: "I",
  },
  {
    id: 4,
    package: "WP4",
    title: "Longitudinal Monitoring",
    status: "On Track",
    label: "bg-purple-500",
    profile: "R",
  },
  {
    id: 5,
    package: "WP5",
    title: "Stakeholder & Stigma Engagement",
    status: "On Track",
    label: "bg-blue-500",
    profile: "A",
  },
  {
    id: 6,
    package: "WP6",
    title: "Interventions & Therapeutic Studies",
    status: "In Progress",
    label: "bg-green-500",
    profile: "B",
  }
]

export const upcomingSchedule = [
  {
    id: 1,
    title: "Enumerator Refresher Training - Kumasi",
    date: "23 Jul 2025",
    location: "Kumasi",
  },
  {
    id: 2,
    title: "6-Month Survey Window Opens",
    date: "01 Aug 2025",
    location: "All Sites",
  },
  {
    id: 3,
    title: "WP3 Midpoint Assessments Begin",
    date: "01 Aug 2025",
    location: "Ghana",
  },
  {
    id: 4,
    title: "Stakeholder Policy Dialogue",
    date: "15 Aug 2025",
    location: "Accra",
  },
]

export const statsData = [
  {
    id: 1,
    title: "Total Participants",
    value: "5,928",
    subtitle: "Enrolled across all sites",
    icon: "users",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "Retention Rate",
    value: "87%",
    subtitle: "Last 30 days",
    icon: "trending-up",
    iconColor: "text-green-500",
  },
  {
    id: 3,
    title: "High Distress Alerts",
    value: "24",
    subtitle: "This week",
    icon: "alert-triangle",
    iconColor: "text-red-500",
  },
  {
    id: 4,
    title: "Pending Forms",
    value: "156",
    subtitle: "Require submission",
    icon: "clipboard-list",
    iconColor: "text-orange-500",
  },
  {
    id: 5,
    title: "Monthly Response Rate",
    value: "78%",
    subtitle: "Current wave",
    icon: "bar-chart-2",
    iconColor: "text-purple-500",
  },
]

export const participantTrendData = [
  { month: "Aug", enrolled: 4200, active: 3900, dropout: 300 },
  { month: "Sep", enrolled: 4500, active: 4150, dropout: 350 },
  { month: "Oct", enrolled: 4800, active: 4400, dropout: 400 },
  { month: "Nov", enrolled: 5100, active: 4650, dropout: 450 },
  { month: "Dec", enrolled: 5400, active: 4850, dropout: 550 },
  { month: "Jan", enrolled: 5600, active: 5050, dropout: 550 },
  { month: "Feb", enrolled: 5750, active: 5150, dropout: 600 },
  { month: "Mar", enrolled: 5928, active: 5300, dropout: 628 },
]

export const stressScoreData = [
  { month: 'Jan', average: 22, range: [16, 27] },
  { month: 'Feb', average: 23, range: [15, 30] },
  { month: 'Mar', average: 21, range: [13, 28] },
  { month: 'Apr', average: 25, range: [17, 33] },
  { month: 'May', average: 23, range: [15, 30] },
  { month: 'Jun', average: 27, range: [17, 36] },
];