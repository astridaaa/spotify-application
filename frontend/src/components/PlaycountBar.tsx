interface PlaycountBarProps {
  playcount: number;
  maxPlaycount: number;
}

export function PlaycountBar({ playcount, maxPlaycount }: PlaycountBarProps) {
  const percentage = (playcount / maxPlaycount) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-[#B7C0D9]">
          {playcount.toLocaleString()} plays
        </span>
      </div>
      <div className="h-2 bg-[#1C2233] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            background: "linear-gradient(90deg, #00EEFF 0%, #7D5CFF 100%)",
          }}
        />
      </div>
    </div>
  );
}
