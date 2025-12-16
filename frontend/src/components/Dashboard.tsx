import { MoreHorizontal, ArrowRight, Clock } from "lucide-react";
import type { Period } from "../App";
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
  onNavigate: (page: any, variant?: any) => void;
  onViewTrack: (track: any) => void;
}

export function Dashboard({
  period,
  onPeriodChange,
  onNavigate,
  onViewTrack,
}: DashboardProps) {
  const topTracks = mockTracks.slice(0, 5);
  const topGenres = mockGenres.slice(0, 5);

  const formatTimeAgo = (lastPlayed: string) => {
    return "2h ago";
  };

  return (
    <div className="min-h-screen p-4 md:p-8 pb-20 max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
          Your Music Stats
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <PeriodChips selected={period} onChange={onPeriodChange} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* PATAISYTA: font-medium (nebe bold) */}
              <button className="px-6 py-3 rounded-xl bg-[#7D5CFF] hover:bg-[#8D6CFF] text-white font-medium shadow-lg flex items-center gap-2 transition-all">
                <MoreHorizontal className="w-5 h-5" />
                <span>Export Options</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#0B132B] border-[#20305A] text-white w-48"
            >
              <DropdownMenuItem
                className="cursor-pointer hover:bg-white/10"
                onClick={() => onNavigate("shareCard", "tracks")}
              >
                Share Tracks
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-white/10"
                onClick={() => onNavigate("shareCard", "artists")}
              >
                Share Artists
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-white/10"
                onClick={() => onNavigate("shareCard", "genres")}
              >
                Share Genres
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-white/10"
                onClick={() => onNavigate("shareCard", "overall")}
              >
                Share Wrapped
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="space-y-8">
        {/* 1. TOP TRACKS SECTION */}
        <section className="bg-[#0B1221]/80 border border-white/10 rounded-[30px] p-6 backdrop-blur-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-extrabold text-white">Top Tracks</h2>
            {/* PATAISYTA: font-medium (nebe bold) */}
            <button
              onClick={() => onNavigate("topTracks")}
              className="text-[#00EEFF] font-medium uppercase text-sm tracking-wide flex items-center gap-2 hover:text-white transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {topTracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => onViewTrack(track)}
                // PATAISYTA: rounded-2xl (švelnesni kampai)
                className="w-full flex items-center gap-4 p-3 rounded-2xl bg-[#11192e] border border-white/5 hover:border-[#00EEFF]/50 hover:bg-white/5 transition-all group"
              >
                <div className="relative w-16 h-16 shrink-0">
                  <img
                    src={track.coverUrl}
                    alt={track.name}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                  />
                  {/* PATAISYTA: font-medium skaičiams */}
                  <div
                    className={`absolute -top-2 -left-2 w-7 h-7 font-medium rounded-full flex items-center justify-center text-sm shadow-lg text-white border border-[#0B1221]
                    ${
                      index < 3
                        ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF]"
                        : "bg-[#223056]"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className="text-lg font-bold text-white truncate group-hover:text-[#00EEFF] transition-colors">
                    {track.name}
                  </div>
                  <div className="text-gray-400 font-medium truncate">
                    {track.artist}
                  </div>
                </div>
                <div className="hidden md:block text-gray-500 text-sm font-medium">
                  {track.playcount} plays
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* 2. TOP ARTISTS SECTION */}
        <section className="bg-[#0B1221]/80 border border-white/10 rounded-[30px] p-6 backdrop-blur-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-extrabold text-white">Top Artists</h2>
            {/* PATAISYTA: font-medium */}
            <button
              onClick={() => onNavigate("topArtists")}
              className="text-[#00EEFF] font-medium uppercase text-sm tracking-wide flex items-center gap-2 hover:text-white transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockArtists.slice(0, 4).map((artist, index) => (
              // PATAISYTA: rounded-2xl
              <div
                key={artist.id}
                className="relative p-4 rounded-2xl bg-[#11192e] border border-white/5 hover:border-[#00EEFF]/50 hover:bg-white/5 transition-all cursor-pointer group text-center"
              >
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <img
                    src={artist.imageUrl}
                    className="w-full h-full object-cover rounded-full border-4 border-[#1C2233] group-hover:border-[#00EEFF] transition-colors shadow-lg"
                    alt={artist.name}
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
                <div className="font-bold text-white truncate text-lg mb-1">
                  {artist.name}
                </div>
                <div className="text-sm text-[#B7C0D9]">
                  {artist.playcount} plays
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TOP GENRES SECTION */}
        <section className="bg-[#0B1221]/80 border border-white/10 rounded-[30px] p-6 backdrop-blur-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-extrabold text-white">Top Genres</h2>
            {/* PATAISYTA: font-medium */}
            <button
              onClick={() => onNavigate("topGenres")}
              className="text-[#00EEFF] font-medium uppercase text-sm tracking-wide flex items-center gap-2 hover:text-white transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {topGenres.map((genre, index) => (
              // PATAISYTA: rounded-2xl
              <div
                key={genre.id}
                className="flex items-center gap-5 p-4 rounded-2xl bg-[#11192e] border border-white/5"
              >
                {/* PATAISYTA: font-medium skaičiams */}
                <div
                  className={`w-10 h-10 shrink-0 font-medium rounded-full flex items-center justify-center text-base shadow-lg text-white
                    ${
                      index < 3
                        ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF]"
                        : "bg-[#223056]"
                    }`}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-white text-lg">
                      {genre.name}
                    </span>
                    <span className="text-[#00EEFF] font-bold">
                      {genre.percentage}%
                    </span>
                  </div>
                  <div className="h-3 bg-[#1C2233] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${genre.percentage}%`,
                        background:
                          "linear-gradient(90deg, #00EEFF 0%, #7D5CFF 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. RECENTLY PLAYED */}
        <section className="bg-[#0B1221]/80 border border-white/10 rounded-[30px] p-6 backdrop-blur-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-extrabold text-white">
              Recently Played
            </h2>
            {/* PATAISYTA: font-medium */}
            <button
              onClick={() => onNavigate("recentlyPlayed")}
              className="text-[#00EEFF] font-medium uppercase text-sm tracking-wide flex items-center gap-2 hover:text-white transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockRecentlyPlayed.slice(0, 6).map((track) => (
              // PATAISYTA: rounded-2xl
              <div
                key={track.id + track.lastPlayed}
                className="flex items-center gap-4 p-3 rounded-2xl bg-[#11192e] border border-white/5 hover:border-[#00EEFF]/30 transition"
              >
                <img
                  src={track.coverUrl}
                  alt={track.name}
                  className="w-14 h-14 rounded-lg object-cover shadow-sm"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-white font-bold truncate text-base">
                    {track.name}
                  </div>
                  <div className="text-gray-400 text-sm truncate mb-1">
                    {track.artist}
                  </div>
                  <div className="text-[#B7C0D9] text-xs flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {formatTimeAgo(track.lastPlayed || "")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
