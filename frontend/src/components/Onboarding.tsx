import { Music, BarChart3, Share2, Users } from "lucide-react";

interface OnboardingProps {
  onLogin: () => void;
}

export function Onboarding({ onLogin }: OnboardingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center relative z-10 font-sans">
      {/* 1. Logo */}
      <div className="mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF] flex items-center justify-center shadow-[0_0_30px_rgba(0,238,255,0.4)] mx-auto">
          <Music className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* 2. Tekstai */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
        Cosmify
      </h1>
      <p className="text-lg text-gray-300 mb-12 max-w-lg font-medium">
        Discover your music journey through cosmic insights
      </p>

      {/* 3. Kortelės */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        <Card
          icon={<Users className="w-6 h-6 text-white" />}
          title="Top Artists"
          subtitle="Discover your favorite artists"
        />
        <Card
          icon={<Music className="w-6 h-6 text-white" />}
          title="Top Tracks"
          subtitle="View your most played songs"
        />
        <Card
          icon={<Share2 className="w-6 h-6 text-white" />}
          title="Share Stats"
          subtitle="Create beautiful cards to share"
        />
      </div>

      {/* 4. MYGTUKAS - Be Bold */}
      <button
        onClick={onLogin}
        className="bg-[#00EEFF] text-black text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(0,238,255,0.3)] font-medium"
      >
        <Music className="w-5 h-5" />
        Connect with Spotify
      </button>

      <p className="mt-8 text-sm text-gray-400 font-medium">
        We'll never post without your permission
      </p>
    </div>
  );
}

// Kortelės komponentas
function Card({
  icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="bg-[#0B1221] border border-[#1E293B] p-8 rounded-2xl flex flex-col items-center hover:bg-[#111A2E] transition-colors">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00EEFF] to-[#7D5CFF] flex items-center justify-center mb-4 shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 font-medium">{subtitle}</p>
    </div>
  );
}
