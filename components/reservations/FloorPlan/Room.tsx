"use client";

interface RoomProps {
  title: string;
  width?: number;
  height?: number;
}

export default function Room({
  title,
  width = 170,
  height = 105,
}: RoomProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border-2 border-[#8A6647] shadow-xl"
      style={{
        width,
        height,
        background:
          "linear-gradient(145deg, #6A4025 0%, #4F2D1B 55%, #341D12 100%)",
      }}
    >
      {/* Wood Grain */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-[2px] bg-white/20"
            style={{ left: `${12 + i * 20}px` }}
          />
        ))}
      </div>

      {/* Gloss */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

      {/* Top Highlight */}
      <div className="absolute left-4 right-4 top-2 h-[2px] rounded-full bg-[#D7B17C]/70" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#D7B17C]/40 bg-[#3F2518] text-2xl shadow-md">
          {title === "Kitchen" ? "👨‍🍳" : "🚻"}
        </div>

        <h3 className="font-heading text-xl font-semibold tracking-wide text-[#F7E9CB]">
          {title}
        </h3>

        <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#D6B382]">
          STAFF ONLY
        </p>
      </div>

      {/* Bottom Highlight */}
      <div className="absolute bottom-2 left-4 right-4 h-[2px] rounded-full bg-[#D7B17C]/40" />
    </div>
  );
}