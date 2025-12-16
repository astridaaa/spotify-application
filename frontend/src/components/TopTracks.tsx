import {
  ArrowLeft,
  Share2,
  MoreVertical,
  ExternalLink,
  Copy,
} from "lucide-react";
import type { Period } from "../App";
import { CosmicCard } from "./CosmicCard";
import { CosmicButton } from "./CosmicButton";
import { PeriodChips } from "./PeriodChips";
import { RatingStars } from "./RatingStars";
import { mockTracks } from "./mockData";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface TopTracksProps {
  period: Period;
  onPeriodChange: (period: Period) => void;
  onBack: () => void;
  onViewTrack: (track: any) => void;
  onShare?: () => void;
}

export function TopTracks({
  period,
  onPeriodChange,
  onBack,
  onViewTrack,
  onShare,
}: TopTracksProps) {
  const handleCopyLink = (track: any) => {
    toast.success("Link copied!", {
      duration: 2500,
    });
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

          <h1 className="mb-6">Top Tracks</h1>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <PeriodChips selected={period} onChange={onPeriodChange} />
            {onShare && (
              <CosmicButton variant="secondary" onClick={onShare}>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  <span>Share Top Tracks</span>
                </div>
              </CosmicButton>
            )}
          </div>
        </div>

        {/* Tracks List */}
        <CosmicCard>
          <div className="space-y-4">
            {mockTracks.map((track, index) => (
              <div
                key={track.id}
                className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-[#1C2233]/16 last:border-0"
              >
                <div className="flex-shrink-0 w-16 h-16 relative">
                  <img
                    src={track.coverUrl}
                    alt={track.name}
                    className="w-full h-full object-cover rounded"
                  />
                  <div
                    className={`absolute -top-2 -left-2 w-7 h-7 rounded-full flex items-center justify-center ${
                      index < 3
                        ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF]"
                        : "bg-[#223056]"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <button
                    onClick={() => onViewTrack(track)}
                    className="hover:text-[#00EEFF] transition-colors text-left"
                  >
                    <div className="truncate">{track.name}</div>
                  </button>
                  <div className="text-sm text-[#B7C0D9] truncate">
                    {track.artist}
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center gap-4">
                  {track.rating && (
                    <div className="hidden md:block">
                      <RatingStars
                        rating={track.rating}
                        readonly
                        size="small"
                      />
                    </div>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="bg-[#0B132B] border border-[#20305A] text-white"
                    >
                      <DropdownMenuItem
                        onClick={() => handleCopyLink(track)}
                        className="hover:bg-[#2D149F] cursor-pointer"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Link
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={handleOpenSpotify}
                        className="hover:bg-[#2D149F] cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open in Spotify
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CosmicCard>
      </div>
    </div>
  );
}
