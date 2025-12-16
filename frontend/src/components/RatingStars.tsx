import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  onRate?: (rating: number) => void;
  readonly?: boolean;
  size?: "small" | "medium" | "large";
}

export function RatingStars({
  rating,
  onRate,
  readonly = false,
  size = "medium",
}: RatingStarsProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !readonly && onRate?.(star)}
          disabled={readonly}
          className={`transition-all duration-200 ${
            readonly ? "cursor-default" : "cursor-pointer hover:scale-110"
          }`}
        >
          <Star
            className={`${sizeClasses[size]} ${
              star <= rating
                ? "fill-[#00EEFF] stroke-[#00EEFF]"
                : "fill-transparent stroke-[#B7C0D9]"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
