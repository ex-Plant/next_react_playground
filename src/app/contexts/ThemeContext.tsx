import { createContext, ReactNode, useContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "dark",
});

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeContext.Provider
      value={{
        theme: "dark",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useThemeCtx() {
  const ctx = useContext(ThemeContext);

  function test() {
    const obj = {};
    const test = JSON.stringify(obj);
    const test2 = JSON.parse(test);
    console.log(test2);
    console.log(test2);
  }

  test();

  if (!ctx) throw new Error(`no ctx 🚨`);

  return ctx;
}
