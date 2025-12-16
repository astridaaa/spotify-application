import { ArrowLeft, Share2, ExternalLink } from "lucide-react";
import type { Period } from "../App";
import { CosmicCard } from "./CosmicCard";
import { CosmicButton } from "./CosmicButton";
import { PeriodChips } from "./PeriodChips";
import { mockArtists } from "./mockData";
import { toast } from "sonner";

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
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const handleOpenSpotify = () => {
    toast.info("Opening Spotify", {
      duration: 2500,
    });
  };

  return (
    <div className="relative min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#B7C0D9] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <h1 className="mb-6">Top Artists</h1>

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

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {mockArtists.map((artist, index) => (
            <CosmicCard key={artist.id} highlight={index < 3}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 h-24 relative">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div
                    className={`absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center ${
                      index < 3
                        ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF]"
                        : "bg-[#223056]"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="truncate mb-2">{artist.name}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#B7C0D9]">Play Count</span>
                      <span>{artist.playcount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#B7C0D9]">Listening Time</span>
                      <span>{formatTime(artist.listeningTime)}</span>
                    </div>
                  </div>

                  <CosmicButton
                    variant="secondary"
                    size="medium"
                    onClick={handleOpenSpotify}
                    className="w-full"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Open in Spotify</span>
                    </div>
                  </CosmicButton>
                </div>
              </div>
            </CosmicCard>
          ))}
        </div>
      </div>
    </div>
  );
}
