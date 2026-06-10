import Image from "next/image";

export function QuickActionCard() {
    return (
      <div className="w-full lg:w-[30%] bg-white shadow-sm border border-gray-100 text-red-700 p-2 rounded-xl">
        <p className="font-bold text-sm text-black mb-3">Quick Actions </p>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="flex w-[30%] flex-col justify-center items-center gap-2 p-1 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
              <Image
                src="/add-participant.png"
                alt="add participant"
                width={30}
                height={30}
              />
              <p className="text-xs text-center text-gray-500">Add Participant</p>
            </div>
            <div className="flex w-[30%] flex-col justify-center items-center gap-2 p-1 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
              <Image
                src="/new-form.png"
                alt="start new form"
                width={30}
                height={30}
              />
              <p className="text-xs text-center text-gray-500">Start New Form</p>
            </div>
            <div className="flex w-[30%] text-center flex-col justify-center items-center gap-2 p-1 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
              <Image
                src="/safeguard.png"
                alt="safeguarding report"
                width={30}
                height={30}
              />
              <p className="text-xs text-center text-gray-500">Safeguarding Report</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex w-[30%] text-center flex-col justify-center items-center gap-2 p-1 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
              <Image
                src="/report.png"
                alt="generate report"
                width={30}
                height={30}
              />
              <p className="text-xs text-center text-gray-500">Generate Report</p>
            </div>
            <div className="flex w-[30%] text-center flex-col justify-center items-center gap-2 p-1 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
              <Image
                src="/data-check.png"
                alt="data quality check"
                width={30}
                height={30}
              />
              <p className="text-xs text-center text-gray-500">Data Quality Check</p>
            </div>
            <div className="flex w-[30%] text-center flex-col justify-center items-center gap-2 p-1 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
              <Image
                src="/export.png"
                alt="export dataset"
                width={30}
                height={30}
              />
              <p className="text-xs text-center text-gray-500">Export Dataset</p>
            </div>
          </div>
        </div>
      </div>
    );
}