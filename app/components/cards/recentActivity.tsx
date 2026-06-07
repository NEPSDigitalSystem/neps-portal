import { recentActivities } from "@/app/data/dummyData";
import Link from "next/link";

export default function RecentActivityTable() {
  
    return (
    <div className="w-full relative shadow-sm border border-gray-100 p-4 rounded-xl bg-white">
      <p className="font-bold text-sm text-black mb-3">Recent Activity</p>

      <div className="grid grid-cols-[0.8fr_1.3fr_0.8fr_0.8fr] text-[0.7rem] border-b border-gray-200 py-2 font-semibold text-gray-900">
        <span>User</span>
        <span>Action</span>
        <span>Module</span>
        <span>Time</span>
      </div>

      <div className="mb-3">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="grid grid-cols-[0.9fr_1.3fr_0.9fr_0.8fr] py-2 border-b border-gray-200 text-[0.7rem] text-gray-900"
          >
            <span>{activity.user}</span>
            <span>{activity.action}</span>
            <span>{activity.module}</span>
            <span>{activity.time}</span>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-2 right-4">
        <Link className="text-xs hover:text-blue-700 font-semibold text-blue-500" href="#">View All Activities <span>&rarr;</span></Link>
      </div>
    </div>
  );
}
