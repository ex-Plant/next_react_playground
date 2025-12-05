"use client";

import { useMediaQuery } from "usehooks-ts";

export const useMinSM = () => useMediaQuery("(min-width: 640px)");
export const useMinMD = () => useMediaQuery("(min-width: 768px)");
export const useMinLG = () => useMediaQuery("(min-width: 1024px)");
export const useMinXL = () => useMediaQuery("(min-width: 1280px)");
export const useMin2XL = () => useMediaQuery("(min-width: 1536px)");

export const useMaxSM = () => useMediaQuery("(max-width: 640px)");
export const useMaxMD = () => useMediaQuery("(max-width: 768px)");
export const useMaxLG = () => useMediaQuery("(max-width: 1024px)");
export const useMaxXL = () => useMediaQuery("(max-width: 1280px)");
export const useMax2XL = () => useMediaQuery("(max-width: 1536px)");

// Breakpoint range hooks - true when within that specific breakpoint range
export const useSM = () =>
  useMediaQuery("(min-width: 640px) and (max-width: 767px)");
export const useMD = () =>
  useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
export const useLG = () =>
  useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
export const useXL = () =>
  useMediaQuery("(min-width: 1280px) and (max-width: 1535px)");
export const use2XL = () => useMediaQuery("(min-width: 1536px)");

// Orientation
export const usePortrait = () => useMediaQuery("(orientation: portrait)");
export const useLandscape = () => useMediaQuery("(orientation: landscape)");

// High DPI screens (retina displays)
export const useRetina = () => useMediaQuery("(min-resolution: 2dppx)");
export const useHighDPI = () => useMediaQuery("(min-device-pixel-ratio: 1.5)");

// Touch capabilities
export const useTouchDevice = () => useMediaQuery("(pointer: coarse)");
export const useMouseDevice = () => useMediaQuery("(pointer: fine)");

// Dark mode preference
export const usePrefersDark = () =>
  useMediaQuery("(prefers-color-scheme: dark)");
export const usePrefersLight = () =>
  useMediaQuery("(prefers-color-scheme: light)");

// Reduced motion (for animations)
export const usePrefersReducedMotion = () =>
  useMediaQuery("(prefers-reduced-motion: reduce)");

// Mobile devices (small screen + touch)
export const useMobile = () =>
  useMediaQuery("(max-width: 768px) and (pointer: coarse)");

// Tablet range (medium screen + touch)
export const useTablet = () =>
  useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px) and (pointer: coarse)"
  );

// Desktop (large screen + mouse)
export const useDesktop = () =>
  useMediaQuery("(min-width: 1024px) and (pointer: fine)");
