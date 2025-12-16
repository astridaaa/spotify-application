import type { Period } from "../App";

interface PeriodChipsProps {
  selected: Period;
  onChange: (period: Period) => void;
}

export function PeriodChips({ selected, onChange }: PeriodChipsProps) {
  const periods: { value: Period; label: string }[] = [
    { value: "4weeks", label: "Last 4 Weeks" },
    { value: "6months", label: "Last 6 Months" },
    { value: "12months", label: "Last 12 Months" },
  ];

  return (
    <div className="flex gap-2">
      {periods.map((period) => {
        const isSelected = selected === period.value;
        return (
          <button
            key={period.value}
            onClick={() => onChange(period.value)}
            className={`px-3 py-1.5 text-sm rounded-[12px] border-2 transition-all duration-200 md:px-4 md:py-2 md:text-base ${
              isSelected
                ? "border-[#00EEFF] bg-[#00EEFF]/12 text-[#00EEFF]"
                : "border-[#223056] bg-[#1C2233]/10 text-[#E6E9F2] hover:border-[#00EEFF]/50"
            }`}
          >
            {period.label}
          </button>
        );
      })}
    </div>
  );
}
