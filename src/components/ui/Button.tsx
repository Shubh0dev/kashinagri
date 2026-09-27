import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  showArrow = false,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 min-h-[44px]";

  const variantStyles = {
    primary:
      "bg-charcoal text-ivory hover:bg-charcoal-dark active:scale-[0.99] border border-charcoal/30 shadow-sm",
    secondary:
      "bg-ivory text-charcoal hover:bg-white active:scale-[0.99] border border-sand/40 shadow-sm",
    outline:
      "bg-transparent text-charcoal border border-charcoal/40 hover:bg-charcoal hover:text-ivory active:scale-[0.99]",
    gold:
      "bg-gold text-charcoal font-semibold hover:bg-gold-light active:scale-[0.99] border border-gold/40 shadow-sm",
    ghost:
      "bg-transparent text-charcoal hover:bg-sand/20 active:scale-[0.99]",
  };

  const sizeStyles = {
    sm: "text-xs px-4 py-2 rounded-sm gap-1.5",
    md: "text-sm px-6 py-3 rounded-sm gap-2",
    lg: "text-base px-8 py-3.5 rounded-sm gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
