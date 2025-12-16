import {
  Music,
  Users,
  Grid3x3,
  Clock,
  MoreHorizontal,
  Share2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import type { Period } from "../App";
import { CosmicCard } from "./CosmicCard";
import { CosmicButton } from "./CosmicButton";
import { PeriodChips } from "./PeriodChips";
import {
  mockTracks,
  mockArtists,
  mockGenres,
  mockRecentlyPlayed,
} from "./mockData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface DashboardProps {
  period: Period;
  onPeriodChange: (period: Period) => void;
  onNavigate: (
    page:
      | "topTracks"
      | "topArtists"
      | "topGenres"
      | "recentlyPlayed"
      | "shareCard",
    variant?: "tracks" | "artists" | "genres" | "overall"
  ) => void;
  onViewTrack: (track: any) => void;
}

export function Dashboard({
  period,
  onPeriodChange,
  onNavigate,
  onViewTrack,
}: DashboardProps) {
  const topTracks = mockTracks.slice(0, 5);

  const formatListeningTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    return `${hours}h`;
  };

  const formatTimeAgo = (lastPlayed: string) => {
    const now = Date.now();
    const playedTime = new Date(lastPlayed).getTime();
    const hoursAgo = Math.floor((now - playedTime) / (1000 * 60 * 60));

    if (hoursAgo < 1) {
      const minutesAgo = Math.floor((now - playedTime) / (1000 * 60));
      return `${minutesAgo}m ago`;
    }
    if (hoursAgo < 24) {
      return `${hoursAgo}h ago`;
    }
    const daysAgo = Math.floor(hoursAgo / 24);
    return `${daysAgo}d ago`;
  };

  return (
    <div className="relative min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-6">Your Music Stats</h1>

          {/* Period Selection with More button */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <PeriodChips selected={period} onChange={onPeriodChange} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] transition-all duration-200 bg-[#7D5CFF] hover:bg-[#8D6CFF] text-white">
                  <MoreHorizontal className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-[#0B132B] border border-[#20305A] text-white w-48 z-50"
              >
                <DropdownMenuItem
                  onClick={() => onNavigate("shareCard", "overall")}
                  className="hover:bg-[#2D149F] cursor-pointer focus:bg-[#2D149F] focus:text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Share Your Wrapped
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onNavigate("shareCard", "tracks")}
                  className="hover:bg-[#2D149F] cursor-pointer"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Top Tracks
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onNavigate("shareCard", "artists")}
                  className="hover:bg-[#2D149F] cursor-pointer focus:bg-[#2D149F] focus:text-white"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Top Artists
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onNavigate("shareCard", "genres")}
                  className="hover:bg-[#2D149F] cursor-pointer focus:bg-[#2D149F] focus:text-white"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Top Genres
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Top Songs */}
        <CosmicCard className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2>Top Tracks</h2>
            <button
              onClick={() => onNavigate("topTracks")}
              className="flex items-center gap-1 text-[#00EEFF] hover:text-[#00EEFF]/80 transition-colors text-base shrink-0"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            {topTracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => onViewTrack(track)}
                className="w-full flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors text-left border-b border-[#1C2233]/16 last:border-0"
              >
                <div className="flex-shrink-0 w-14 h-14 relative">
                  <img
                    src={track.coverUrl}
                    alt={track.name}
                    className="w-full h-full object-cover rounded"
                  />
                  <div
                    className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      index < 3
                        ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF]"
                        : "bg-[#223056]"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="truncate mb-1">{track.name}</div>
                  <div className="text-sm text-[#B7C0D9] truncate">
                    {track.artist}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CosmicCard>

        {/* Top Artists */}
        <CosmicCard className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2>Top Artists</h2>
            <button
              onClick={() => onNavigate("topArtists")}
              className="flex items-center gap-1 text-[#00EEFF] hover:text-[#00EEFF]/80 transition-colors text-base shrink-0"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockArtists.slice(0, 4).map((artist, index) => (
              <div key={artist.id} className="text-center">
                <div className="relative mb-3">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-full aspect-square object-cover rounded-full"
                  />
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${
                      index < 3
                        ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF]"
                        : "bg-[#223056]"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>
                <div className="truncate mb-1">{artist.name}</div>
                <div className="text-sm text-[#B7C0D9]">
                  {artist.playcount} plays •{" "}
                  {formatListeningTime(artist.listeningTime)}
                </div>
              </div>
            ))}
          </div>
        </CosmicCard>

        {/* Top Genres */}
        <CosmicCard className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2>Top Genres</h2>
            <button
              onClick={() => onNavigate("topGenres")}
              className="flex items-center gap-1 text-[#00EEFF] hover:text-[#00EEFF]/80 transition-colors text-base shrink-0"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {mockGenres.slice(0, 5).map((genre, index) => (
              <div key={genre.id} className="flex items-center gap-4">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    index < 3
                      ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF]"
                      : "bg-[#223056]"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="mb-2">{genre.name}</div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-[#1C2233] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${genre.percentage}%`,
                          background:
                            "linear-gradient(90deg, #00EEFF 0%, #7D5CFF 100%)",
                        }}
                      />
                    </div>
                    <span className="text-sm flex-shrink-0">
                      {genre.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CosmicCard>

        {/* Recently Played */}
        <CosmicCard>
          <div className="flex items-center justify-between mb-6">
            <h2>Recently Played</h2>
            <button
              onClick={() => onNavigate("recentlyPlayed")}
              className="flex items-center gap-1 text-[#00EEFF] hover:text-[#00EEFF]/80 transition-colors text-base shrink-0"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            {mockRecentlyPlayed.slice(0, 5).map((track) => (
              <button
                key={track.id + track.lastPlayed}
                onClick={() => onViewTrack(track)}
                className="w-full flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors text-left border-b border-[#1C2233]/16 last:border-0"
              >
                <img
                  src={track.coverUrl}
                  alt={track.name}
                  className="w-14 h-14 object-cover rounded flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="truncate">{track.name}</div>
                  <div className="text-sm text-[#B7C0D9] truncate">
                    {track.artist}
                  </div>
                  {track.lastPlayed && (
                    <div className="text-xs text-[#B7C0D9] mt-1">
                      {formatTimeAgo(track.lastPlayed)}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </CosmicCard>
      </div>
    </div>
  );
}
