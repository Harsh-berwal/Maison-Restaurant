"use client";

import { RestaurantTable } from "./types";

interface TableProps {
  table: RestaurantTable;
  selected: boolean;
  booked: boolean;
  onSelect: (id: number) => void;
}

export default function Table({
  table,
  selected,
  booked,
  onSelect,
}: TableProps) {
  const radius = table.radius ?? 38;
  const width = table.width ?? 120;
  const height = table.height ?? 72;

  /* ---------------- Colors ---------------- */

  const tableColor = booked
    ? "#7B2323"
    : selected
    ? "#7A3F17"
    : "#5B1F08";

  const tableDark = booked ? "#5E1616" : "#341409";

  const chairColor = booked
    ? "#8E2A2A"
    : selected
    ? "#B77A48"
    : "#8A5A34";

  /* ---------------- Chair ---------------- */

  const Chair = ({
    left,
    top,
    rotate = 0,
  }: {
    left: string;
    top: string;
    rotate?: number;
  }) => (
    <div
      className="absolute"
      style={{
        left,
        top,
        transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
      }}
    >
      {/* Shadow */}
      <div className="absolute left-1 top-1 h-3 w-5 rounded-full bg-black/20 blur-sm" />

      {/* Chair */}
      <div
        className="relative h-3 w-5 rounded-full border border-[#C79A63]/40"
        style={{
          background: `linear-gradient(145deg, ${chairColor}, #5C3720)`,
        }}
      />
    </div>
  );

  /* ---------------- Round Chairs ---------------- */

  const renderRoundChairs = () => {
    const distance = radius + 12;

    return Array.from({ length: table.seats }).map((_, index) => {
      const angle = (360 / table.seats) * index;

      const rad = (angle * Math.PI) / 180;

      const x = Math.cos(rad) * distance;

      const y = Math.sin(rad) * distance;

      return (
        <Chair
          key={index}
          left={`calc(50% + ${x}px)`}
          top={`calc(50% + ${y}px)`}
          rotate={angle}
        />
      );
    });
  };

  /* ---------------- Rectangle Chairs ---------------- */

  const renderRectangleChairs = () => (
    <>
      {/* Top */}
      <Chair left="28%" top="-10px" />
      <Chair left="72%" top="-10px" />

      {/* Bottom */}
      <Chair left="28%" top={`calc(100% + 10px)`} />
      <Chair left="72%" top={`calc(100% + 10px)`} />

      {/* Left */}
      <Chair left="-10px" top="50%" rotate={90} />

      {/* Right */}
      <Chair left={`calc(100% + 10px)`} top="50%" rotate={90} />
    </>
  );

    return (
    <div
      className="group absolute"
      style={{
        left: table.x,
        top: table.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative">
        {/* Chairs */}
        {table.shape === "round"
          ? renderRoundChairs()
          : renderRectangleChairs()}

        {/* Table */}
        <button
          disabled={booked}
          onClick={() => onSelect(table.id)}
          className={`
            relative
            flex
            items-center
            justify-center
            overflow-hidden
            transition-all
            duration-300
            hover:scale-105
            active:scale-95
            ${
              booked
                ? "cursor-not-allowed opacity-70"
                : "cursor-pointer"
            }
          `}
          style={{
            width: table.shape === "round" ? radius * 2 : width,
            height: table.shape === "round" ? radius * 2 : height,
            borderRadius:
              table.shape === "round" ? "9999px" : "18px",
            background: `linear-gradient(145deg, ${tableColor}, ${tableDark})`,
            border: "2px solid rgba(231,195,138,.18)",
            boxShadow: selected
              ? "0 0 20px rgba(216,132,75,.35)"
              : "0 10px 22px rgba(0,0,0,.35)",
          }}
        >
          {/* Wood Grain */}
          <div className="absolute inset-0 opacity-15">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 h-full w-[2px] bg-white/20"
                style={{
                  left: `${12 + i * 18}px`,
                }}
              />
            ))}
          </div>

          {/* Gloss */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

          {/* Inner Ring (Round Only) */}
          {table.shape === "round" && (
            <div className="absolute inset-[10px] rounded-full border border-white/10" />
          )}

          {/* Rectangle Inner Border */}
          {table.shape === "rectangle" && (
            <div className="absolute inset-2 rounded-xl border border-white/10" />
          )}

          {/* Label */}
          <div className="relative z-10 text-center text-[#F8E6C8]">
            <p className="font-semibold tracking-wide text-sm">
              {table.name}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#DDB57C]">
              {table.seats} Seats
            </p>
          </div>
        </button>

        {/* Selected Glow */}
        {selected && (
          <div
            className={`absolute -z-10 blur-2xl bg-[#D8844B]/25 ${
              table.shape === "round"
                ? "inset-0 rounded-full"
                : "inset-0 rounded-2xl"
            }`}
          />
        )}

        {/* Booked Overlay */}
        {/* Status Dot */}
        <div
          className={`absolute -right-2 -top-2 h-4 w-4 rounded-full border-2 border-white shadow-lg ${
            booked ? "bg-red-500" : "bg-green-500"
          }`}
        />
      </div>
    </div>
  );
}