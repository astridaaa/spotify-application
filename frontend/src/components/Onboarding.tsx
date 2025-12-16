import { Music, Sparkles, Share2, Users } from "lucide-react";
import { CosmicButton } from "./CosmicButton";
import { CosmicCard } from "./CosmicCard";

interface OnboardingProps {
  onLogin: () => void;
}

export function Onboarding({ onLogin }: OnboardingProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo / Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF] flex items-center justify-center">
            <Music className="w-12 h-12" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-4">Cosmify</h1>
        <p className="text-xl text-[#B7C0D9] mb-12">
          Discover your music journey through cosmic insights
        </p>

        {/* Features */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
          <CosmicCard>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF] flex items-center justify-center mb-2 md:mb-4">
                <Users className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm md:text-base mb-1 md:mb-2">Top Artists</h3>
              <p className="text-xs md:text-sm text-[#B7C0D9] hidden md:block">
                Discover your favorite artists
              </p>
            </div>
          </CosmicCard>

          <CosmicCard>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF] flex items-center justify-center mb-2 md:mb-4">
                <Music className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm md:text-base mb-1 md:mb-2">Top Tracks</h3>
              <p className="text-xs md:text-sm text-[#B7C0D9] hidden md:block">
                View your most played songs
              </p>
            </div>
          </CosmicCard>

          <CosmicCard>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF] flex items-center justify-center mb-2 md:mb-4">
                <Share2 className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm md:text-base mb-1 md:mb-2">Share Stats</h3>
              <p className="text-xs md:text-sm text-[#B7C0D9] hidden md:block">
                Create beautiful cards to share
              </p>
            </div>
          </CosmicCard>
        </div>

        {/* CTA Button */}
        <CosmicButton
          onClick={onLogin}
          className="inline-flex items-center gap-3 px-8 py-4"
        >
          <Music className="w-5 h-5" />
          <span>Connect with Spotify</span>
        </CosmicButton>

        <p className="mt-6 text-sm text-[#B7C0D9]">
          We'll never post without your permission
        </p>
      </div>
    </div>
  );
}
