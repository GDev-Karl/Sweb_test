import React from "react";

/*
  Reusable Button component
  - label: text content
  - variant: "gradient" | "solid" | "outline" (default: gradient)
  - bg: background color class (used when variant="solid")
  - textColor: text color class (default: text-white for gradient/solid)
  - gradientStart: color string (default: #FF7C44)
  - gradientEnd: color string (default: #FD2A94)
  - size: "sm" | "md" | "lg" (changes font size only)
  - fullWidth: boolean (stretches to container width)
  - className: extra Tailwind classes
  - icon: optional React node (SVG) rendered before label
  - onClick: click handler
  - disabled: boolean

  Note: Internal layout is fixed to match spec:
  - display: flex (inline-flex)
  - height: 48px (h-12)
  - padding: 12px 24px (py-3 px-6)
  - justify/align: center
  - gap: 10px (gap-2.5)
  - align-self: stretch (self-stretch)
  Size only changes the font size.
*/

// Font sizes and line-heights per size (smaller/larger than 16/20 as needed)
const sizeClass = {
  sm: "text-[14px] leading-[18px]",
  md: "text-[16px] leading-5", // 20px
  lg: "text-[18px] leading-[22px]",
};

const Button = ({
  label = "Button",
  variant = "gradient",
  bg = "bg-magenta-600",
  textColor = "text-white",
  gradientStart = "#FF7C44",
  gradientEnd = "#FD2A94",
  size = "md",
  fullWidth = false,
  rounded = "rounded-full",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  icon,
}) => {
  const widthClass = fullWidth ? "w-full" : "w-auto";
  const base = [
    // Fixed internal layout
    "inline-flex items-center justify-center gap-2.5 select-none",
    "h-12 px-6 py-3 self-stretch",
    sizeClass[size] || sizeClass.md,
    // Typography spec for buttons
    "font-rethink-sans font-semibold",
    rounded,
    widthClass,
    "transition-colors duration-150",
    disabled ? "opacity-60 cursor-not-allowed" : "hover:opacity-90",
  ];

  let style = undefined;
  let variantClasses = [];
  if (variant === "gradient") {
    style = {
      backgroundImage: `radial-gradient(87.44% 173.96% at 50% 0%, ${gradientStart} 0%, ${gradientEnd} 100%)`,
      color: "#FFFFFF",
    };
    // Enforce white text on gradient buttons
    variantClasses = ["text-white"];
  } else if (variant === "outline") {
    variantClasses = ["bg-transparent border border-neutral-200", textColor];
  } else {
    // solid
    variantClasses = [bg, textColor];
  }

  const computed = [...base, ...variantClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={computed} style={style} onClick={onClick} disabled={disabled}>
      {icon ? (
        <span className="flex w-6 h-6 p-0.5 items-center justify-center shrink-0" aria-hidden>
          {icon}
        </span>
      ) : null}
      {label}
    </button>
  );
};

export default Button;