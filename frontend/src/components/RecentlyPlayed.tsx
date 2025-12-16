import { ArrowLeft, Play } from "lucide-react";
import { CosmicCard } from "./CosmicCard";
import { CosmicButton } from "./CosmicButton";
import { mockRecentlyPlayed } from "./mockData";
import { toast } from "sonner";

interface RecentlyPlayedProps {
  onBack: () => void;
  onViewTrack: (track: any) => void;
}

export function RecentlyPlayed({ onBack, onViewTrack }: RecentlyPlayedProps) {
  const handleResume = () => {
    toast.info("Resuming last track...", {
      duration: 2500,
    });
  };

  const groupTracksByTime = () => {
    const now = Date.now();
    const today: typeof mockRecentlyPlayed = [];
    const yesterday: typeof mockRecentlyPlayed = [];
    const thisWeek: typeof mockRecentlyPlayed = [];

    mockRecentlyPlayed.forEach((track) => {
      if (!track.lastPlayed) return;
      const playedTime = new Date(track.lastPlayed).getTime();
      const hoursAgo = (now - playedTime) / (1000 * 60 * 60);

      if (hoursAgo < 24) {
        today.push(track);
      } else if (hoursAgo < 48) {
        yesterday.push(track);
      } else if (hoursAgo < 168) {
        // 7 days
        thisWeek.push(track);
      }
    });

    return { today, yesterday, thisWeek };
  };

  const { today, yesterday, thisWeek } = groupTracksByTime();

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

  const renderTrackGroup = (
    tracks: typeof mockRecentlyPlayed,
    title: string
  ) => {
    if (tracks.length === 0) return null;

    return (
      <div className="mb-8">
        <h3 className="mb-4 text-[#B7C0D9]">{title}</h3>
        <CosmicCard>
          <div className="space-y-3">
            {tracks.map((track) => (
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
    );
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

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <h1>Recently Played</h1>
            <CosmicButton onClick={handleResume}>
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                <span>Resume</span>
              </div>
            </CosmicButton>
          </div>
        </div>

        {/* Grouped Tracks */}
        {renderTrackGroup(today, "Today")}
        {renderTrackGroup(yesterday, "Yesterday")}
        {renderTrackGroup(thisWeek, "This Week")}

        {today.length === 0 &&
          yesterday.length === 0 &&
          thisWeek.length === 0 && (
            <CosmicCard>
              <div className="text-center py-12">
                <p className="text-[#B7C0D9]">No recently played tracks</p>
              </div>
            </CosmicCard>
          )}
      </div>
    </div>
  );
}
