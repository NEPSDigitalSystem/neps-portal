// src/app/components/AlertCard.tsx
import { alerts } from "@/app/data/dummyData";
import { dangerAssets } from "@/app/utils/dangerConfig";
import Image from "next/image";

export function AlertCard() {
  return (
    <div className="bg-white w-full lg:w-[35%] shadow-sm border border-gray-100 text-red-700 p-3 rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <p className="font-bold text-sm text-black">Critical Alerts</p>
        <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">
          View All
        </a>
      </div>

      <div className="border border-red-100 rounded-xl overflow-hidden bg-white">
        {alerts.map((alert) => {
          const icon = dangerAssets[alert.severity];

          return (
            <div key={alert.id}>
              <div className="flex gap-2 items-start p-3">
                <Image
                  src={icon}
                  alt={alert.severity}
                  width={24}
                  height={24}
                />
                <div className="flex-1">
                  <p className="text-black text-[0.8rem]">
                    {alert.title}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {alert.date}
                    </span>
                    <a href="#" className="text-blue-500 hover:text-blue-700 text-xs ml-2">
                      View
                    </a>
                  </div>
                </div>

              </div>

              <div className="border-b border-red-100" />
            </div>
          );
        })}

      </div>
    </div>
  );
}