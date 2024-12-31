"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Moon from "../../../public/Moon";
import Sun from "../../../public/Sun";
import "../sass/components/ThemeButton.scss";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {theme === "dark" ? (
        <button
          aria-label="Toggle Theme"
          className="btn-dark"
          onClick={() => setTheme("light")}
        >
          <span>LIGHT</span>
          <Sun />
        </button>
      ) : (
        <button
          aria-label="Toggle Theme"
          className="btn-light"
          onClick={() => setTheme("dark")}
        >
          <span>DARK</span>
          <Moon />
        </button>
      )}
    </>
  );
}
