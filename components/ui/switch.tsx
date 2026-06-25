"use client"

import * as React from "react"
import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

const AnimatedThemeSwitch = React.forwardRef<
  HTMLButtonElement,
  {
    checked: boolean
    onCheckedChange: (checked: boolean) => void
    className?: string
    "aria-label"?: string
  }
>(({ checked, onCheckedChange, className, ...props }, forwardedRef) => {
  // For accessibility, handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onCheckedChange(!checked)
    }
  }

  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Merge the forwarded ref with the internal buttonRef
  React.useEffect(() => {
    if (forwardedRef) {
      if (typeof forwardedRef === 'function') {
        forwardedRef(buttonRef.current);
      } else {
        forwardedRef.current = buttonRef.current;
      }
    }
  }, [forwardedRef]);

  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  useEffect(() => {
    if (buttonRef.current) {
      setDimensions({
        width: buttonRef.current.offsetWidth,
        height: buttonRef.current.offsetHeight,
      });
    }
  }, [className, checked]); // Recalculate on className or checked change

  // Calculate thumb size and translation based on measured dimensions
  const thumbSize = dimensions.height ? dimensions.height - 8 : 24; // Thumb is slightly smaller than switch height, adjust 8 based on visual padding
  const thumbTranslateX = dimensions.width ? dimensions.width - thumbSize - 8 : 32; // Adjust 8 based on visual padding
  const thumbPosition = dimensions.height ? 'top-1 left-1' : 'top-0.5 left-0.5'; // Adjust position based on size and padding

  return (
    <button
      ref={buttonRef}
      type="button"
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      className={cn(
        "relative inline-flex items-center transition-colors duration-500 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer overflow-hidden", // Add overflow-hidden
        checked ? "bg-[#0a174e]" : "bg-[#5ec6fa]",
        className // Apply additional classes from parent
      )}
      // Remove inline style for size, let className control it
      onClick={() => onCheckedChange(!checked)}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {/* Clouds or Stars */}
      {/* Adjust positioning and size of stars/clouds relative to switch size */}
      <span className="absolute left-0 top-0 w-full h-full pointer-events-none select-none">
        {checked ? (
          // Night: stars (adjust positions and sizes relative to dimensions)
          <>
            <span className="absolute bg-white rounded-full opacity-80" style={{ width: dimensions.height * 0.1, height: dimensions.height * 0.1, left: dimensions.width * 0.15, top: dimensions.height * 0.2 }} />
            <span className="absolute bg-white rounded-full opacity-60" style={{ width: dimensions.height * 0.08, height: dimensions.height * 0.08, left: dimensions.width * 0.375, top: dimensions.height * 0.45 }} />
            <span className="absolute bg-white rounded-full opacity-70" style={{ width: dimensions.height * 0.05, height: dimensions.height * 0.05, left: dimensions.width * 0.625, top: dimensions.height * 0.15 }} />
            <span className="absolute bg-white rounded-full opacity-90" style={{ width: dimensions.height * 0.08, height: dimensions.height * 0.08, left: dimensions.width * 0.75, top: dimensions.height * 0.5 }} />
            <span className="absolute bg-white rounded-full opacity-50" style={{ width: dimensions.height * 0.05, height: dimensions.height * 0.05, left: dimensions.width * 0.5, top: dimensions.height * 0.7 }} />
          </>
        ) : (
          // Day: clouds (adjust positions and sizes relative to dimensions)
          <>
            <span className="absolute bg-white rounded-full opacity-80" style={{ width: dimensions.height * 0.3, height: dimensions.height * 0.15, left: dimensions.width * 0.4, top: dimensions.height * 0.3 }} />
            <span className="absolute bg-white rounded-full opacity-70" style={{ width: dimensions.height * 0.2, height: dimensions.height * 0.1, left: dimensions.width * 0.55, top: dimensions.height * 0.4 }} />
          </>
        )}
      </span>
      {/* Sun or Moon Thumb */}
      <span
        className={cn(
          "absolute transition-transform duration-500",
          thumbPosition, // Apply calculated position
          dimensions.width && checked ? `translate-x-[${thumbTranslateX}px]` : "translate-x-0"
        )}
        style={{
          zIndex: 2,
          width: thumbSize,
          height: thumbSize,
        }} // Apply calculated size
      >
        {checked ? (
          // Moon (adjust size)
          <svg width={thumbSize} height={thumbSize} viewBox="0 0 32 32" className="drop-shadow-md">
            <circle cx="16" cy="16" r="14" fill="#f4f7fa" />
            <circle cx="20" cy="14" r="10" fill="#0a174e" />
            <circle cx="16" cy="16" r="12" fill="#e6eefa" />
            <circle cx="22" cy="18" r="2" fill="#dbeafe" />
            <circle cx="12" cy="20" r="1.2" fill="#dbeafe" />
          </svg>
        ) : (
          // Sun (adjust size)
          <svg width={thumbSize} height={thumbSize} viewBox="0 0 32 32" className="drop-shadow-md">
            <circle cx="16" cy="16" r="14" fill="#ffe066" />
            {/* Sun rays (adjust stroke-width if needed) */}
            <g stroke="#ffe066" strokeWidth={thumbSize > 28 ? 2 : 1.5}> {/* Adjust stroke based on size */}
              <line x1="16" y1="2" x2="16" y2="8" />
              <line x1="16" y1="24" x2="16" y2="30" />
              <line x1="2" y1="16" x2="8" y2="16" />
              <line x1="24" y1="16" x2="30" y2="16" />
              <line x1="6.2" y1="6.2" x2="10.5" y2="10.5" />
              <line x1="21.5" y1="21.5" x2="25.8" y2="25.8" />
              <line x1="6.2" y1="25.8" x2="10.5" y2="21.5" />
              <line x1="21.5" y1="10.5" x2="25.8" y2="6.2" />
            </g>
          </svg>
        )}
      </span>
    </button>
  )
})
AnimatedThemeSwitch.displayName = "AnimatedThemeSwitch"

export { AnimatedThemeSwitch as Switch }
