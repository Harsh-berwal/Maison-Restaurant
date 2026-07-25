"use client";

import Table from "./Table";
import Bar from "./Bar";
import Room from "./Room";
import Plant from "./Plant";

import { tableData } from "./tableData";

interface FloorPlanProps {
  selectedTable: number | null;
  bookedTables: number[];
  onSelectTable: (id: number) => void;
}

export default function FloorPlan({
  selectedTable,
  bookedTables,
  onSelectTable,
}: FloorPlanProps) {
  return (
    <div className="relative overflow-hidden rounded-[42px] border border-[#3B2418] bg-[#1A110C] p-8 shadow-xl">

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,200,120,.12),transparent_60%)]" />

      {/*  FLOOR  */}

      <div className="relative overflow-hidden rounded-[32px] border border-[#4D3120] bg-[#2B1B12]">

        {/* Wood Texture */}
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,#4A2F1E_0px,#4A2F1E_4px,#392217_4px,#392217_34px)]" />

        {/* Warm Center Light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,80,.08),transparent_72%)]" />

               

        {/*  TOP PLANTS  */}

        <Plant position="top-left" />
        <Plant position="top-right" />

        {/* Bottom plants removed */}

        {/*  KITCHEN  */}

        <div className="absolute bottom-10 left-12 z-20">
          <Room
            title="Kitchen"
            width={190}
            height={120}
          />
        </div>

        {/*  RESTROOM  */}

        <div className="absolute bottom-10 right-12 z-20">
          <Room
            title="Restroom"
            width={190}
            height={120}
          />
        </div>

        {/*  ENTRANCE  */}

        <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2">

          <div className="flex flex-col items-center">

            {/* Entrance Divider */}
            <div className="relative mb-5 h-4 w-56 rounded-full bg-gradient-to-r from-[#6B4228] via-[#845437] to-[#6B4228] shadow-lg">

              <div className="absolute left-3 top-1/2 h-[2px] w-16 -translate-y-1/2 rounded-full bg-[#B98559]" />

              <div className="absolute right-3 top-1/2 h-[2px] w-16 -translate-y-1/2 rounded-full bg-[#B98559]" />
            </div>

            {/* Double Door */}
            <div className="relative flex">

              <div className="h-10 w-10 rounded-bl-full border-l-2 border-b-2 border-[#8D6544]" />

              <div className="h-10 w-10 rounded-br-full border-r-2 border-b-2 border-[#8D6544]" />

              <div className="absolute left-1/2 top-0 h-10 w-[2px] -translate-x-1/2 bg-[#8D6544]" />
            </div>

            <p className="mt-2 text-sm uppercase tracking-[0.45em] text-[#E8C38A]">
              ENTRANCE
            </p>

          </div>

        </div>

        {/*  BAR  */}

        <div className="absolute right-10 top-1/2 z-20 -translate-y-1/2">
          <Bar />
        </div>

        {/*  DINING AREA  */}

        <div className="relative h-[760px] w-full">

          {/* Premium Carpet */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[440px]
              w-[440px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#5E402B]/50
              bg-[radial-gradient(circle,#3C2518_0%,#2B1B12_75%)]
              opacity-50
            "
          />

          {/* Ambient Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[560px]
              w-[560px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#F2B47B]/5
              blur-[120px]
            "
          />

          {/* Floor Label */}
          <div className="absolute left-1/2 top-16 -translate-x-1/2">
            <p className="font-heading text-[18px] tracking-[0.45em] text-[#8F6C52]">
              MAISON
            </p>
          </div>

          {/* Tables */}
          {tableData.map((table) => (
            <Table
              key={table.id}
              table={table}
              selected={selectedTable === table.id}
              booked={bookedTables.includes(table.id)}
              onSelect={onSelectTable}
            />
          ))}

          {/* Corner Lights */}
          <div className="pointer-events-none absolute left-20 top-28 h-28 w-28 rounded-full bg-[#F2B47B]/5 blur-3xl" />

          <div className="pointer-events-none absolute right-24 top-32 h-32 w-32 rounded-full bg-[#F2B47B]/5 blur-3xl" />

          <div className="pointer-events-none absolute bottom-28 left-28 h-28 w-28 rounded-full bg-[#F2B47B]/5 blur-3xl" />

          <div className="pointer-events-none absolute bottom-28 right-28 h-28 w-28 rounded-full bg-[#F2B47B]/5 blur-3xl" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2B47B]/10 blur-[90px]" />

        </div>
      </div>

      {/*  LEGEND  */}

      <div className="mt-8 flex items-center justify-center gap-10 rounded-3xl border border-[#4A2F1E] bg-[#261710] px-8 py-5 shadow-inner">

        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,.5)]" />
          <span className="text-[#E7C38A]">Available</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-full bg-[#D8844B] shadow-[0_0_10px_rgba(216,132,75,.5)]" />
          <span className="text-[#E7C38A]">Selected</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,.5)]" />
          <span className="text-[#E7C38A]">Booked</span>
        </div>

      </div>

    </div>
  );
}