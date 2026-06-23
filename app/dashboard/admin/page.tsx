import { StatCard } from "@/app/components/cards/statCard"
import { ParticipantTrendChart } from "@/app/components/cards/participantTrendChart"
import { StressScoreTrend } from "@/app/components/cards/stressScoreCard"
import { AlertCard } from "@/app/components/cards/alertCard"
import DataCollectionStatus from "@/app/components/cards/dataCollectionStatusCard"
import WorkPackageOverview from "@/app/components/cards/workPackageOverview"
import { QuickActionCard } from "@/app/components/cards/quickActionCard"
import RecentActivityTable from "@/app/components/cards/recentActivity"
import UpcomingSchedule from "@/app/components/cards/upcomingSchedule"
import { DemoGraphics } from "@/app/components/cards/demographCard"
import { statsData as dummyStatsData, stressScoreData, alerts as dummyAlerts } from "@/app/data/dummyData"
import { apiClient } from "@/app/lib/api"
import type { PortalStats, DistressTrend, DistressScreening } from "@/app/types/redcap"

export default async function AdminDashboard() {
  let stats: PortalStats | null = null;
  let distressTrends: DistressTrend[] | null = null;
  let alerts: DistressScreening[] | null = null;

  try {
    stats = await apiClient.getPortalStats();
  } catch (error) {
    console.error("Failed to fetch portal stats:", error);
  }

  try {
    distressTrends = await apiClient.getDistressTrends();
  } catch (error) {
    console.error("Failed to fetch distress trends:", error);
  }

  try {
    const alertsResponse = await apiClient.getDistressAlerts("open", 4);
    alerts = alertsResponse.items;
  } catch (error) {
    console.error("Failed to fetch alerts:", error);
  }

  // Map backend stats to UI format
  const mappedStatsData = dummyStatsData.map((stat) => {
    let value = stat.value;
    if (stats) {
      switch (stat.title) {
        case "Total Participants":
          value = stats.total_participants.toLocaleString();
          break;
        case "Retention Rate":
          const rate = stats.total_participants > 0 ? (stats.active_participants / stats.total_participants) * 100 : 0;
          value = `${Math.round(rate)}%`;
          break;
        case "High Distress Alerts":
          value = stats.high_severity_alerts.toString();
          break;
        case "Pending Forms":
          value = stats.open_referrals.toString();
          break;
        case "Monthly Response Rate":
          value = stats.total_surveys > 0 ? "100%" : stat.value;
          break;
      }
    }
    return { ...stat, value };
  });

  const mappedTrendData = distressTrends 
    ? distressTrends.map(t => ({
        month: `Month ${t.month}`,
        average: t.avg_stress,
        range: [t.avg_stress - 5, t.avg_stress + 5]
      }))
    : stressScoreData;

  const mappedAlertsData = alerts && alerts.length > 0
    ? alerts.map(a => ({
        id: a.id,
        title: a.suicidality_flag === "Yes" ? "Participant flagged for suicidality" : "Distress screening alert",
        date: new Date(a.created_at || a.screening_date || "").toLocaleString(),
        severity: a.severity || "moderate",
      }))
    : dummyAlerts;

  return (
    <div className="flex flex-col gap-4">

      {/* Stats Row */}
      <div className="flex flex-col sm:flex-row gap-3">
        {mappedStatsData.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

      {/* Trend Charts Row */}
      <div className="flex flex-col lg:flex-row gap-8">
          <ParticipantTrendChart />
          <StressScoreTrend data={mappedTrendData} />
      </div>
      

      {/* Data Collection + Work Package + Quick Actions Row */}
      <div className="flex flex-col lg:flex-row gap-8">
        <DataCollectionStatus />
        <WorkPackageOverview />
      </div>

      {/* Activity + Schedule + Demographics Row */}
      <div className="flex flex-col lg:flex-row gap-2">
        <UpcomingSchedule />
        <AlertCard alertsData={mappedAlertsData} />
        <QuickActionCard />
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <RecentActivityTable />
        <DemoGraphics />
      </div>
    </div>
  )
}
