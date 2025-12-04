"use client"

import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !==
      matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);

  }, [matches, query]);

  return matches;
}

export const useMinSM = () =>
  useMediaQuery("screen and (min-width: 360px)");
export const useMin640 = () =>
  useMediaQuery("screen and (min-width: 640px)");
export const useMinMD = () =>
  useMediaQuery("screen and (min-width: 768px)");
export const useMinLG = () =>
  useMediaQuery("screen and (min-width: 1024px)");
export const useMin1280 = () =>
  useMediaQuery("screen and (min-width: 1280px)");
export const useMinXL = () =>
  useMediaQuery("screen and (min-width: 1440px)");
export const useMinXXL = () =>
  useMediaQuery("screen and (min-width: 1920px)");



export const useMaxSM = () =>
  useMediaQuery("screen and (max-width: 360px)");
export const useMax640 = () =>
  useMediaQuery("screen and (max-width: 640px)");
export const useMaxMD = () =>
  useMediaQuery("screen and (max-width: 768px)");
export const useMaxLG = () =>
  useMediaQuery("screen and (max-width: 1024px)");
export const useMax1280 = () =>
  useMediaQuery("screen and (max-width: 1280px)");
export const useMaxXL = () =>
  useMediaQuery("screen and (max-width: 1440px)");
export const useMaxXXL = () =>
  useMediaQuery("screen and (max-width: 1920px)");
