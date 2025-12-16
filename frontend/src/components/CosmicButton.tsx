import { ButtonHTMLAttributes } from "react";

interface CosmicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "medium" | "large";
}

export function CosmicButton({
  variant = "primary",
  size = "medium",
  className = "",
  children,
  disabled,
  ...props
}: CosmicButtonProps) {
  const baseStyles =
    "rounded-[10px] transition-all duration-200 active:scale-[0.98]";

  const variantStyles = {
    primary: disabled
      ? "bg-[#00EEFF]/35 text-[#111111]/50 cursor-not-allowed"
      : "bg-[#00EEFF] text-[#111111] hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,238,255,0.3)] focus:outline-none focus:ring-4 focus:ring-[#7D5CFF]/25",
    secondary: disabled
      ? "bg-[#7D5CFF]/35 text-white/50 cursor-not-allowed"
      : "bg-[#7D5CFF] text-white hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(125,92,255,0.3)] focus:outline-none focus:ring-4 focus:ring-[#7D5CFF]/25",
  };

  const sizeStyles = {
    medium: "px-6 py-3",
    large: "px-8 py-4",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
