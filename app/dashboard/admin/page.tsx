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
import { statsData } from "@/app/data/dummyData"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-4">

      {/* Stats Row */}
      <div className="flex flex-col sm:flex-row gap-3">
        {statsData.map((stat) => (
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
      <div className="flex flex-col lg:flex-row gap-4">
        <ParticipantTrendChart />
        <div className="flex flex-col gap-4 w-full lg:w-[42%]">
          <StressScoreTrend />
          <AlertCard />
        </div>
      </div>

      {/* Data Collection + Work Package + Quick Actions Row */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[35%] overflow-x-auto">
          <DataCollectionStatus />
        </div>
        <div className="w-full lg:w-[35%]">
          <WorkPackageOverview />
        </div>
        <div className="w-full lg:w-[30%]">
          <QuickActionCard />
        </div>
      </div>

      {/* Activity + Schedule + Demographics Row */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[40%] overflow-x-auto">
          <RecentActivityTable />
        </div>
        <div className="w-full lg:w-[25%]">
          <UpcomingSchedule />
        </div>
        <div className="w-full lg:w-[35%]">
          <DemoGraphics />
        </div>
      </div>

    </div>
  )
}
