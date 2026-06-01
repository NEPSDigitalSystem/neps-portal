"use client";

import { AlertCard } from "../components/cards/alertCard";
import DataCollectionStatus from "../components/cards/dataCollectionStatusCard";
import { QuickActionCard } from "../components/cards/quickActionCard";
import RecentActivityTable from "../components/cards/recentActivity";
import WorkPackageOverview from "../components/cards/workPackageOverview";
import UpcomingSchedule from "../components/cards/upcomingSchedule";
import { DemoGraphics } from "../components/cards/demographCard";
import { StressScoreTrend } from "../components/cards/stressScoreCard";

export default function Dashboard() {
    return (
        <div className="flex gap-4">
            <div className="w-[15%] border border-red-100 p-4 rounded-xl"/>
            <div className="w-[83%] flex flex-col">
              <div className="w-full mb-4 flex gap-[1.3%]">
                <DataCollectionStatus />
                <StressScoreTrend />
                <AlertCard />
              </div>
              <div className="w-full mb-4 flex gap-[1.3%]">
                <DataCollectionStatus />
                <WorkPackageOverview />
                <QuickActionCard />
              </div>
              <div className="w-full mb-4 flex gap-[1.3%]">
                <RecentActivityTable />
                <UpcomingSchedule />
                <DemoGraphics />
              </div>
            </div>
            
            

        </div>
    );
}