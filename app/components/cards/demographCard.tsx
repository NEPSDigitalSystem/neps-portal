import Image from "next/image";
import DonutChart from "../donutChart";
import Link from "next/link";

export function DemoGraphics() {
  return (
    <div className="w-[35%] relative shadow-sm border border-gray-100 p-4 rounded-xl">
      <div className="flex gap-2 items-center mb-8">
        <p className="font-bold text-sm text-black">Cohort Demographics (Baseline)</p>
        <Image src="/info.png" alt="info" width={15} height={15}/>
      </div>
      <DonutChart male={3202} female={2666} other={500} />
      <div className="flex">
        <Link className="text-xs hover:text-blue-700 absolute bottom-2 right-4 font-semibold ml-auto text-blue-500 mt-4" href="#">View Demographics <span>&rarr;</span></Link>
      </div>
    </div>
  );
}