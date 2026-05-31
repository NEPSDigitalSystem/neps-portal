"use client";

import { upcomingSchedule } from "@/app/data/dummyData";
import Link from "next/link";
import Image from "next/image";

export default function UpcomingSchedule() {
  
    return (
    <div className="w-[25%] relative shadow-sm border border-gray-100 p-4 rounded-xl">
      <p className="font-bold mb-3 text-sm text-black">Upcoming Schedule</p>
      <div>
        {upcomingSchedule.map((schedule) => (
          <div
            key={schedule.id}
            className="grid grid-cols-[0.15fr_1fr] py-1 border-b border-gray-200 text-[0.7rem]"
          >
            <Image
              src="/calendar.png"
              width={20}
              height={20}
              alt="calendar"
            />
            <div>
              <p className="font-semibold">{schedule.title}</p>
              <p className="text-gray-500">{schedule.date} | {schedule.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <Link className="text-xs hover:text-blue-700 absolute bottom-2 right-4 font-semibold text-blue-500" href="#">View Full Calendar <span>&rarr;</span></Link>
      </div>
    </div>
  );
}
