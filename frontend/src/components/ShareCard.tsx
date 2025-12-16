import { useState, useRef } from "react";
import { ArrowLeft, Copy, Download, Link2, Sparkles } from "lucide-react";
import type { Period } from "../App";
import { CosmicCard } from "./CosmicCard";
import { CosmicButton } from "./CosmicButton";
import {
  mockTracks,
  mockArtists,
  mockGenres,
  aiFirstImpression,
} from "./mockData";
import { toast } from "sonner";

interface ShareCardProps {
  period: Period;
  onBack: () => void;
  variant: "tracks" | "artists" | "genres" | "overall";
}

export function ShareCard({
  period,
  onBack,
  variant: initialVariant,
}: ShareCardProps) {
  const [variant, setVariant] = useState<
    "tracks" | "artists" | "genres" | "overall"
  >(initialVariant);
  const cardRef = useRef<HTMLDivElement>(null);

  const topTracks = mockTracks.slice(0, 5);
  const topArtists = mockArtists.slice(0, 5);
  const topGenres = mockGenres.slice(0, 3);

  const handleDownload = () => {
    toast.success("Card downloaded!", {
      description: "PNG file saved to your device",
      duration: 2500,
    });
  };

  const handleCopyLink = () => {
    toast.success("Link copied!", {
      duration: 2500,
    });
  };

  const periodLabels = {
    "4weeks": "Last 4 Weeks",
    "6months": "Last 6 Months",
    "12months": "Last 12 Months",
    alltime: "All Time",
  };

  return (
    <div className="relative min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#B7C0D9] hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <h1 className="mb-8">Share Your Stats</h1>

        <div className="flex flex-col md:grid md:grid-cols-[400px_1fr] gap-8 items-start">
          {/* Preview Card - Story Format (9:16) */}
          <div className="w-full">
            <p className="text-sm text-[#B7C0D9] mb-4">
              Preview • 1080×1920 (Instagram Story)
            </p>
            <div
              ref={cardRef}
              className="relative w-full max-w-[280px] mx-auto md:mx-0 md:max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-[#20305A]"
              style={{
                background:
                  "linear-gradient(135deg, #000000 0%, #2D149F 20%, #020258 40%, #1A0136 60%, #3A016C 80%, #89157E 100%)",
              }}
            >
              {/* Starfield effect */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(1px 1px at 20% 30%, white, transparent),
                    radial-gradient(1px 1px at 60% 70%, white, transparent),
                    radial-gradient(1px 1px at 80% 10%, white, transparent),
                    radial-gradient(1px 1px at 33% 85%, white, transparent),
                    radial-gradient(1px 1px at 45% 50%, white, transparent),
                    radial-gradient(1px 1px at 90% 60%, white, transparent)`,
                  backgroundSize: "100% 100%",
                }}
              />

              <div className="relative z-10 h-full flex flex-col p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-3xl mb-2">
                    {variant === "tracks" && "My Top Tracks"}
                    {variant === "artists" && "My Top Artists"}
                    {variant === "genres" && "My Top Genres"}
                    {variant === "overall" && "My Wrapped"}
                  </h2>
                  <p className="text-sm text-[#B7C0D9]">
                    {periodLabels[period]}
                  </p>
                </div>

                {/* Tracks Variant */}
                {variant === "tracks" && (
                  <div className="flex-1 space-y-3">
                    {/* #1 Track - Hero */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#00EEFF]/20 to-[#7D5CFF]/20 border-2 border-[#00EEFF]/40">
                      <div className="flex gap-4">
                        <div className="relative flex-shrink-0 w-20 h-20">
                          <img
                            src={topTracks[0].coverUrl}
                            alt={topTracks[0].name}
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <div
                            className="absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                            style={{
                              background:
                                "linear-gradient(135deg, #00EEFF 0%, #7D5CFF 100%)",
                            }}
                          >
                            1
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <p className="text-lg truncate mb-1">
                            {topTracks[0].name}
                          </p>
                          <p className="text-sm text-[#B7C0D9] truncate">
                            {topTracks[0].artist}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* #2 and #3 Tracks */}
                    {topTracks.slice(1, 3).map((track, index) => (
                      <div
                        key={track.id}
                        className="flex gap-3 p-3 rounded-xl"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(17, 26, 51, 0.9) 0%, rgba(14, 21, 48, 0.9) 100%)",
                          border: "1px solid rgba(34, 48, 86, 0.6)",
                        }}
                      >
                        <div className="relative flex-shrink-0 w-14 h-14">
                          <img
                            src={track.coverUrl}
                            alt={track.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div
                            className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                            style={{
                              background:
                                "linear-gradient(135deg, #00EEFF 0%, #7D5CFF 100%)",
                            }}
                          >
                            {index + 2}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="truncate mb-1">{track.name}</p>
                          <p className="text-sm text-[#B7C0D9] truncate">
                            {track.artist}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Artists Variant */}
                {variant === "artists" && (
                  <div className="flex-1 space-y-3">
                    {/* #1 Artist - Hero */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#00EEFF]/20 to-[#7D5CFF]/20 border-2 border-[#00EEFF]/40">
                      <div className="flex gap-4">
                        <div className="relative flex-shrink-0 w-20 h-20">
                          <img
                            src={topArtists[0].imageUrl}
                            alt={topArtists[0].name}
                            className="w-full h-full object-cover rounded-full"
                          />
                          <div
                            className="absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                            style={{
                              background:
                                "linear-gradient(135deg, #00EEFF 0%, #7D5CFF 100%)",
                            }}
                          >
                            1
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <p className="text-lg truncate mb-1">
                            {topArtists[0].name}
                          </p>
                          <p className="text-sm text-[#B7C0D9] truncate">
                            {topArtists[0].playcount} plays
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* #2 and #3 Artists */}
                    {topArtists.slice(1, 3).map((artist, index) => (
                      <div
                        key={artist.id}
                        className="flex gap-3 p-3 rounded-xl"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(17, 26, 51, 0.9) 0%, rgba(14, 21, 48, 0.9) 100%)",
                          border: "1px solid rgba(34, 48, 86, 0.6)",
                        }}
                      >
                        <div className="relative flex-shrink-0 w-14 h-14">
                          <img
                            src={artist.imageUrl}
                            alt={artist.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                          <div
                            className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                            style={{
                              background:
                                "linear-gradient(135deg, #00EEFF 0%, #7D5CFF 100%)",
                            }}
                          >
                            {index + 2}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="truncate mb-1">{artist.name}</p>
                          <p className="text-sm text-[#B7C0D9] truncate">
                            {artist.playcount} plays
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Genres Variant */}
                {variant === "genres" && (
                  <div className="flex-1 space-y-4">
                    {topGenres.map((genre, index) => (
                      <div
                        key={genre.id}
                        className="p-4 rounded-xl"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(17, 26, 51, 0.9) 0%, rgba(14, 21, 48, 0.9) 100%)",
                          border: "1px solid rgba(34, 48, 86, 0.6)",
                        }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{
                              background:
                                "linear-gradient(135deg, #00EEFF 0%, #7D5CFF 100%)",
                            }}
                          >
                            {index + 1}
                          </div>
                          <p className="flex-1">{genre.name}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#1C2233] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${genre.percentage}%`,
                                background:
                                  "linear-gradient(90deg, #00EEFF 0%, #7D5CFF 100%)",
                              }}
                            />
                          </div>
                          <span className="text-sm">{genre.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Overall Variant - Spotify Wrapped Style */}
                {variant === "overall" && (
                  <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-[260px] md:max-w-[280px] flex gap-2 md:gap-3">
                      {/* Left Side - Top 5 Tracks */}
                      <div className="flex-1 space-y-1.5 md:space-y-2">
                        <p className="text-[10px] text-[#B7C0D9] uppercase tracking-wide mb-1">
                          Tracks
                        </p>
                        {topTracks.map((track, index) => (
                          <div
                            key={track.id}
                            className={`flex gap-1 md:gap-1.5 p-1 md:p-1.5 rounded-lg ${
                              index === 0
                                ? "bg-gradient-to-br from-[#00EEFF]/20 to-[#7D5CFF]/20 border-2 border-[#00EEFF]/40"
                                : ""
                            }`}
                            style={
                              index !== 0
                                ? {
                                    background:
                                      "linear-gradient(180deg, rgba(17, 26, 51, 0.6) 0%, rgba(14, 21, 48, 0.6) 100%)",
                                    border: "1px solid rgba(34, 48, 86, 0.4)",
                                  }
                                : {}
                            }
                          >
                            <div className="relative flex-shrink-0 w-7 h-7 md:w-8 md:h-8">
                              <img
                                src={track.coverUrl}
                                alt={track.name}
                                className="w-full h-full object-cover rounded"
                              />
                              <div
                                className={`absolute -top-1 -left-1 ${
                                  index === 0
                                    ? "w-4 h-4 md:w-5 md:h-5 text-[9px] md:text-[10px]"
                                    : "w-3.5 h-3.5 md:w-4 md:h-4 text-[8px] md:text-[9px]"
                                } rounded-full flex items-center justify-center`}
                                style={{
                                  background:
                                    "linear-gradient(135deg, #00EEFF 0%, #7D5CFF 100%)",
                                }}
                              >
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className={`${
                                  index === 0
                                    ? "text-[11px] md:text-xs"
                                    : "text-[9px] md:text-[10px]"
                                } truncate leading-tight`}
                              >
                                {track.name}
                              </p>
                              <p className="text-[8px] md:text-[9px] text-[#B7C0D9] truncate leading-tight">
                                {track.artist}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right Side - Top 5 Artists */}
                      <div className="flex-1 space-y-1.5 md:space-y-2">
                        <p className="text-[10px] text-[#B7C0D9] uppercase tracking-wide mb-1">
                          Artists
                        </p>
                        {topArtists.map((artist, index) => (
                          <div
                            key={artist.id}
                            className={`flex gap-1 md:gap-1.5 p-1 md:p-1.5 rounded-lg ${
                              index === 0
                                ? "bg-gradient-to-br from-[#00EEFF]/20 to-[#7D5CFF]/20 border-2 border-[#00EEFF]/40"
                                : ""
                            }`}
                            style={
                              index !== 0
                                ? {
                                    background:
                                      "linear-gradient(180deg, rgba(17, 26, 51, 0.6) 0%, rgba(14, 21, 48, 0.6) 100%)",
                                    border: "1px solid rgba(34, 48, 86, 0.4)",
                                  }
                                : {}
                            }
                          >
                            <div className="relative flex-shrink-0 w-7 h-7 md:w-8 md:h-8">
                              <img
                                src={artist.imageUrl}
                                alt={artist.name}
                                className="w-full h-full object-cover rounded-full"
                              />
                              <div
                                className={`absolute -top-1 -left-1 ${
                                  index === 0
                                    ? "w-4 h-4 md:w-5 md:h-5 text-[9px] md:text-[10px]"
                                    : "w-3.5 h-3.5 md:w-4 md:h-4 text-[8px] md:text-[9px]"
                                } rounded-full flex items-center justify-center`}
                                style={{
                                  background:
                                    "linear-gradient(135deg, #00EEFF 0%, #7D5CFF 100%)",
                                }}
                              >
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className={`${
                                  index === 0
                                    ? "text-[11px] md:text-xs"
                                    : "text-[9px] md:text-[10px]"
                                } truncate leading-tight`}
                              >
                                {artist.name}
                              </p>
                              <p className="text-[8px] md:text-[9px] text-[#B7C0D9] truncate leading-tight">
                                {artist.playcount.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Branding */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-[#B7C0D9]">Cosmify</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6 w-full">
            <CosmicCard>
              <h3 className="mb-4">Card Type</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <button
                  onClick={() => setVariant("tracks")}
                  className={`flex-1 min-w-[calc(50%-4px)] md:min-w-0 px-4 py-3 text-sm md:text-base md:px-6 rounded-xl transition-all duration-200 whitespace-nowrap ${
                    variant === "tracks"
                      ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF] text-white"
                      : "bg-[#1C2233]/30 text-[#B7C0D9] hover:bg-[#1C2233]/50"
                  }`}
                >
                  Top Tracks
                </button>
                <button
                  onClick={() => setVariant("artists")}
                  className={`flex-1 min-w-[calc(50%-4px)] md:min-w-0 px-4 py-3 text-sm md:text-base md:px-6 rounded-xl transition-all duration-200 whitespace-nowrap ${
                    variant === "artists"
                      ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF] text-white"
                      : "bg-[#1C2233]/30 text-[#B7C0D9] hover:bg-[#1C2233]/50"
                  }`}
                >
                  Top Artists
                </button>
                <button
                  onClick={() => setVariant("genres")}
                  className={`flex-1 min-w-[calc(50%-4px)] md:min-w-0 px-4 py-3 text-sm md:text-base md:px-6 rounded-xl transition-all duration-200 whitespace-nowrap ${
                    variant === "genres"
                      ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF] text-white"
                      : "bg-[#1C2233]/30 text-[#B7C0D9] hover:bg-[#1C2233]/50"
                  }`}
                >
                  Top Genres
                </button>
                <button
                  onClick={() => setVariant("overall")}
                  className={`flex-1 min-w-[calc(50%-4px)] md:min-w-0 px-4 py-3 text-sm md:text-base md:px-6 rounded-xl transition-all duration-200 whitespace-nowrap ${
                    variant === "overall"
                      ? "bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF] text-white"
                      : "bg-[#1C2233]/30 text-[#B7C0D9] hover:bg-[#1C2233]/50"
                  }`}
                >
                  Overall Stats
                </button>
              </div>
            </CosmicCard>

            <CosmicCard>
              <h3 className="mb-4">Export Options</h3>
              <div className="space-y-3">
                <CosmicButton onClick={handleDownload} className="w-full">
                  <div className="flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    <span>Download PNG</span>
                  </div>
                </CosmicButton>
                <CosmicButton
                  variant="secondary"
                  onClick={handleCopyLink}
                  className="w-full"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Link2 className="w-5 h-5" />
                    <span>Copy Shareable Link</span>
                  </div>
                </CosmicButton>
              </div>
            </CosmicCard>

            <CosmicCard>
              <h3 className="mb-3">How to Share</h3>
              <div className="space-y-2 text-sm text-[#B7C0D9]">
                <p>• Download the card as PNG for Instagram/Twitter</p>
                <p>• Copy link to share your live stats</p>
                <p>• Perfect for Instagram Stories (1080×1920)</p>
              </div>
            </CosmicCard>
          </div>
        </div>
      </div>
    </div>
  );
}
