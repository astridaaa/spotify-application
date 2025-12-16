import { useState } from "react";
import { ArrowLeft, Clock, ExternalLink, Copy } from "lucide-react";
import type { Track } from "../App";
import { CosmicCard } from "./CosmicCard";
import { CosmicButton } from "./CosmicButton";
import { RatingStars } from "./RatingStars";
import { toast } from "sonner";

interface TrackDetailProps {
  track: Track;
  onBack: () => void;
}

export function TrackDetail({ track, onBack }: TrackDetailProps) {
  const [rating, setRating] = useState(track.rating || 0);
  const [comment, setComment] = useState(track.comment || "");

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSaveRating = () => {
    toast.success("Saved!", {
      description: "Your rating has been successfully saved",
      duration: 2500,
    });
  };

  const handleOpenSpotify = () => {
    toast.info("Opening Spotify", {
      duration: 2500,
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(track.spotifyUrl || "");
    toast.success("Link copied to clipboard", {
      duration: 2500,
    });
  };

  return (
    <div className="relative min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#B7C0D9] hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <CosmicCard highlight>
          {/* Top Section: Cover + Title/Artist */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <img
              src={track.coverUrl}
              alt={track.name}
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-2xl flex-shrink-0 mx-auto md:mx-0"
            />
            <div className="flex-1">
              <h1 className="mb-2">{track.name}</h1>
              <p className="text-xl text-[#B7C0D9] mb-4">{track.artist}</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <CosmicButton onClick={handleOpenSpotify} className="flex-1">
                  <div className="flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Open in Spotify</span>
                  </div>
                </CosmicButton>
                <CosmicButton
                  variant="secondary"
                  onClick={handleCopyLink}
                  className="flex-1"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Copy className="w-4 h-4" />
                    <span>Copy Link</span>
                  </div>
                </CosmicButton>
              </div>
            </div>
          </div>

          {/* Rating Section */}
          <div className="border-t border-[#223056] pt-6 mb-6">
            <h2 className="mb-4">Rate This Track</h2>

            <div className="mb-6">
              <label className="block text-sm text-[#B7C0D9] mb-3">
                Your Rating
              </label>
              <RatingStars rating={rating} onRate={setRating} size="large" />
            </div>

            <div className="mb-6">
              <label
                htmlFor="comment"
                className="block text-sm text-[#B7C0D9] mb-3"
              >
                Your Comment (optional, up to 140 characters)
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts about this track..."
                className="w-full h-32 px-4 py-3 rounded-lg bg-[#0B132B] border border-[#223056] text-white resize-none focus:outline-none focus:border-[#00EEFF] transition-colors"
              />
            </div>

            <CosmicButton onClick={handleSaveRating} className="w-full">
              Save Rating
            </CosmicButton>
          </div>

          {/* Track Info */}
          <div className="border-t border-[#223056] pt-6">
            <h2 className="mb-4">Track Info</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#B7C0D9]">Album</span>
                <span>{track.album}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#B7C0D9]">Duration</span>
                <span>{formatDuration(track.duration)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#B7C0D9]">Play Count</span>
                <span>{track.playcount}</span>
              </div>
            </div>
          </div>
        </CosmicCard>
      </div>
    </div>
  );
}
