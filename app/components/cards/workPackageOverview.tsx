"use client";

import { workPackageData } from "@/app/data/dummyData";
import Link from "next/link";
import Image from "next/image";

export default function WorkPackageOverview() {
  
    return (
    <div className="w-full lg:w-[50%] min-h-[320px] relative shadow-sm border border-gray-100 p-4 rounded-xl bg-white">
      <div className="flex gap-2 items-center mb-3">
        <p className="font-bold text-sm text-black">Work Package Overview</p>
        <Image src="/info.png" alt="info" width={15} height={15}/>
      </div>
      <div className="pb-5">
        {workPackageData.map((pack) => (
          <div
            key={pack.id}
            className="grid grid-cols-[0.2fr_0.3fr_1.6fr_0.6fr] py-2 border-b border-gray-200 text-[0.8rem] text-gray-900"
          >
            <div className={`flex w-5 h-5 rounded-full items-center justify-center ${pack.label}`}><p>{pack.profile}</p></div>
            <span>{pack.package}</span>
            <span>{pack.title}</span>
            <span className={`${pack.status == "On Track"?"text-green-500":"text-blue-500"}`}>{pack.status}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <Link className="text-sm hover:text-blue-700 absolute bottom-2 right-4 font-semibold text-blue-500" href="#">View WP Dashboard <span>&rarr;</span></Link>
      </div>
    </div>
  );
}
