"use client";

import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const preferDarkQuery = "(prefers-color-schema:light)";
  const storageKey = "theme";

  const toggleTheme = (theme) => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = () => {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    return window.matchMedia(preferDarkQuery).matches ? "light" : "dark";
  };

  const [mode, setMode] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme(mode)
  }, [mode])
  


  return [mode, setMode]
}
