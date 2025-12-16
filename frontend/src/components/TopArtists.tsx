import { ArrowLeft, Share2 } from "lucide-react";
import type { Period } from "../App";
import { CosmicCard } from "./CosmicCard";
import { CosmicButton } from "./CosmicButton";
import { PeriodChips } from "./PeriodChips";
import { mockArtists } from "./mockData";

interface TopArtistsProps {
  period: Period;
  onPeriodChange: (period: Period) => void;
  onBack: () => void;
  onShare?: () => void;
}

export function TopArtists({
  period,
  onPeriodChange,
  onBack,
  onShare,
}: TopArtistsProps) {
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
            Top Artists
          </h1>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <PeriodChips selected={period} onChange={onPeriodChange} />
            {onShare && (
              <CosmicButton variant="secondary" onClick={onShare}>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  <span>Share Top Artists</span>
                </div>
              </CosmicButton>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArtists.map((artist, index) => (
            <CosmicCard
              key={artist.id}
              className="text-center group hover:border-[#00EEFF]/50 transition-colors"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover rounded-full border-4 border-[#1C2233] group-hover:border-[#00EEFF] transition-colors shadow-lg"
                />
                {/* PATAISYTA: font-medium skaičiams */}
                <div
                  className={`absolute top-0 right-0 w-8 h-8 font-medium rounded-full flex items-center justify-center text-sm shadow-lg text-white border-2 border-[#0B1221]
                  ${
                    index < 3
                      ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF]"
                      : "bg-[#223056]"
                  }`}
                >
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {artist.name}
              </h3>
              <p className="text-[#B7C0D9]">{artist.playcount} plays</p>
              <p className="text-sm text-[#B7C0D9]/60 mt-1">
                {Math.round(artist.listeningTime / 60)} mins listened
              </p>
            </CosmicCard>
          ))}
        </div>
      </div>
    </div>
  );
}
