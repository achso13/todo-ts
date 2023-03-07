import { createContext } from "react";

interface ThemeContextData {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({
  darkMode: false,
  toggleDarkMode: () => {},
} as ThemeContextData);
