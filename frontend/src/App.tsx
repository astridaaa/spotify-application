import { useState } from "react";
import { CosmicBackground } from "./components/CosmicBackground";
import { Dashboard } from "./components/Dashboard";
import { TopTracks } from "./components/TopTracks";
import { TopArtists } from "./components/TopArtists";
import { TrackDetail } from "./components/TrackDetail";
import { TopGenres } from "./components/TopGenres";
import { RecentlyPlayed } from "./components/RecentlyPlayed";
import { ShareCard } from "./components/ShareCard";
import { Onboarding } from "./components/Onboarding";
import { Toaster } from "./components/ui/sonner";

export type Period = "4weeks" | "6months" | "12months";

export type Track = {
  id: string;
  name: string;
  artist: string;
  album: string;
  coverUrl: string;
  playcount: number;
  duration: number;
  rating?: number;
  comment?: string;
  lastPlayed?: string;
  spotifyUrl?: string;
};

export type Artist = {
  id: string;
  name: string;
  imageUrl: string;
  playcount: number;
  listeningTime: number;
};

export type Genre = {
  id: string;
  name: string;
  percentage: number;
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<
    | "dashboard"
    | "topTracks"
    | "topArtists"
    | "trackDetail"
    | "topGenres"
    | "recentlyPlayed"
    | "shareCard"
  >("dashboard");
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [period, setPeriod] = useState<Period>("4weeks");
  const [shareVariant, setShareVariant] = useState<
    "tracks" | "artists" | "genres" | "overall"
  >("tracks");

  const handleLogin = () => {
    // Mock login - in real app this would be Spotify OAuth
    setIsAuthenticated(true);
  };

  const handleViewTrack = (track: Track) => {
    setSelectedTrack(track);
    setCurrentPage("trackDetail");
  };

  const handleBack = () => {
    setCurrentPage("dashboard");
    setSelectedTrack(null);
  };

  const handleNavigate = (
    page:
      | "dashboard"
      | "topTracks"
      | "topArtists"
      | "trackDetail"
      | "topGenres"
      | "recentlyPlayed"
      | "shareCard",
    variant?: "tracks" | "artists" | "genres" | "overall"
  ) => {
    setCurrentPage(page);
    if (variant) {
      setShareVariant(variant);
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <CosmicBackground />
        <Onboarding onLogin={handleLogin} />
      </>
    );
  }

  return (
    <>
      <CosmicBackground />
      <div className="relative min-h-screen">
        {currentPage === "dashboard" && (
          <Dashboard
            period={period}
            onPeriodChange={setPeriod}
            onNavigate={handleNavigate}
            onViewTrack={handleViewTrack}
          />
        )}
        {currentPage === "topTracks" && (
          <TopTracks
            period={period}
            onPeriodChange={setPeriod}
            onBack={handleBack}
            onViewTrack={handleViewTrack}
            onShare={() => handleNavigate("shareCard", "tracks")}
          />
        )}
        {currentPage === "topArtists" && (
          <TopArtists
            period={period}
            onPeriodChange={setPeriod}
            onBack={handleBack}
            onShare={() => handleNavigate("shareCard", "artists")}
          />
        )}
        {currentPage === "topGenres" && (
          <TopGenres
            period={period}
            onPeriodChange={setPeriod}
            onBack={handleBack}
            onShare={() => handleNavigate("shareCard", "genres")}
          />
        )}
        {currentPage === "recentlyPlayed" && (
          <RecentlyPlayed onBack={handleBack} onViewTrack={handleViewTrack} />
        )}
        {currentPage === "trackDetail" && selectedTrack && (
          <TrackDetail track={selectedTrack} onBack={handleBack} />
        )}
        {currentPage === "shareCard" && (
          <ShareCard
            period={period}
            onBack={handleBack}
            variant={shareVariant}
          />
        )}
      </div>
      <Toaster />
    </>
  );
}
