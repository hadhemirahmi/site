"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  items?: { text: string; accentColor?: string }[];
  children?: React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: string;
  dark?: boolean;
  withGradients?: boolean;
}

export default function InfiniteMarquee({
  items,
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = false,
  className,
  itemClassName,
  separator = "◆",
  dark = false,
  withGradients = true,
}: InfiniteMarqueeProps) {
  const animClass =
    direction === "right"
      ? "animate-marquee-reverse"
      : speed === "fast"
      ? "animate-marquee-fast"
      : speed === "slow"
      ? "animate-marquee-slow"
      : "animate-marquee";

  const bg = dark ? "#000000" : "transparent";

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full select-none marquee-container pointer-events-none",
        className
      )}
      style={{ backgroundColor: dark ? "#000000" : "transparent" }}
    >
      {/* Side Fade Gradients */}
      {withGradients && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${bg}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${bg}, transparent)`,
            }}
          />
        </>
      )}

      <div
        className={cn(
          "flex gap-0 items-center whitespace-nowrap",
          animClass
        )}
      >
        {/* Set 1 */}
        {children ?? renderItems(items, separator, dark, itemClassName)}
        {/* Set 2 (duplicate for seamless loop) */}
        {children
          ? <div aria-hidden="true">{children}</div>
          : <div aria-hidden="true">{renderItems(items, separator, dark, itemClassName)}</div>
        }
      </div>
    </div>
  );
}

function renderItems(
  items?: InfiniteMarqueeProps["items"],
  separator = ".",
  dark = false,
  className?: string
) {
  if (!items) return null;
  return (
    <>
      {items.map((item, idx) => (
        <span key={idx} className="inline-flex items-center">
          <span
            className={cn(
              "inline-flex items-center px-6 py-0 text-sm font-medium tracking-wide",
              className ? className : dark ? "text-white" : "text-slate-900"
            )}
            style={{
              opacity: dark ? 1 : 0.85,
            }}
          >
            {item.text}
          </span>
          <span
            className="mx-2 text-xs inline-block"
            style={{
              color: item.accentColor || (dark ? "#fff" : "var(--hr-coral)"),
              opacity: 0.9,
            }}
          >
            {separator}
          </span>
        </span>
      ))}
    </>
  );
}
