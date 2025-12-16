import { ArrowLeft, Share2 } from "lucide-react";
import type { Period } from "../App";
import { CosmicCard } from "./CosmicCard";
import { CosmicButton } from "./CosmicButton";
import { PeriodChips } from "./PeriodChips";
import { mockGenres } from "./mockData";

interface TopGenresProps {
  period: Period;
  onPeriodChange: (period: Period) => void;
  onBack: () => void;
  onShare?: () => void;
}

export function TopGenres({
  period,
  onPeriodChange,
  onBack,
  onShare,
}: TopGenresProps) {
  return (
    <div className="relative min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#B7C0D9] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {/* PATAISYTA: font-extrabold */}
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Top Genres
          </h1>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <PeriodChips selected={period} onChange={onPeriodChange} />
            {onShare && (
              <CosmicButton variant="secondary" onClick={onShare}>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  <span>Share Top Genres</span>
                </div>
              </CosmicButton>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {mockGenres.map((genre, index) => (
            // PATAISYTA: rounded-2xl pritaikyta per CSS klasę, jei CosmicCard tai palaiko,
            // bet čia naudoju wrapperį arba tiesiog CosmicCard su papildoma klase
            <CosmicCard
              key={genre.id}
              highlight={index < 3}
              className="border-white/10"
            >
              <div className="flex items-center gap-6">
                {/* PATAISYTA: font-medium skaičiams */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-medium text-white shadow-lg text-lg ${
                    index < 3
                      ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF]"
                      : "bg-[#223056]"
                  }`}
                >
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold">{genre.name}</h3>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-4 bg-[#1C2233] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${genre.percentage}%`,
                          background:
                            "linear-gradient(90deg, #00EEFF 0%, #7D5CFF 100%)",
                        }}
                      />
                    </div>
                    <span className="text-xl font-bold flex-shrink-0 text-[#00EEFF]">
                      {genre.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            </CosmicCard>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#B7C0D9]">
            Genres are determined by Spotify data and your listening habits
          </p>
        </div>
      </div>
    </div>
  );
}
