// ThemeContext.ts
import { createContext, useContext } from "solid-js";
export type LanguageCode = 'pt_br' | 'en_us';
export const LanguageContext = createContext<any>();

export function useTheme() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("ThemeContext is missing!");
  return ctx;
}
