import { createContext, useContext } from "solid-js";
export const MenuContext = createContext<any>();


export function useTheme() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("ThemeContext is missing!");
  return ctx;
}
