"use client";

import { dataCollection } from "@/app/data/dummyData";
import Link from "next/link";
import LineLoader from "../lineLoader";
import Image from "next/image";

export default function DataCollectionStatus() {
  
    return (
    <div className="w-[35%] relative shadow-sm border border-gray-100 p-4 rounded-xl">
      <div className="flex gap-2 items-center mb-3">
        <p className="font-bold text-sm text-black">Data Collection Status</p>
        <Image src="/info.png" alt="info" width={15} height={15}/>
      </div>

      <div className="grid grid-cols-[1.2fr_0.8fr_0.5fr_0.5fr] text-[0.7rem] border-b border-gray-200 py-1 font-semibold text-black-700">
        <span>Site</span>
        <span>Form Completion</span>
        <span className="text-center">Pending</span>
        <span className="text-center">Overdue</span>
      </div>

      <div className="mb-3">
        {dataCollection.map((status) => (
          <div
            key={status.id}
            className="grid grid-cols-[1.2fr_0.8fr_0.5fr_0.5fr] py-1 border-b border-gray-200 text-[0.7rem]"
          >
            <span>{status.site}</span>
            <div className="flex items-center gap-2 w-full">
              <LineLoader percent={status.forms_completion} />
              <span>{status.forms_completion}%</span>
            </div>
            <span className="text-center">{status.pending}</span>
            <span className="text-center">{status.overdue}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <Link className="text-xs hover:text-blue-700 absolute bottom-2 right-4 font-semibold ml-auto text-blue-500 mt-4" href="#">View All Sites <span>&rarr;</span></Link>
      </div>
    </div>
  );
}
