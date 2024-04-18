import React, { useCallback } from "react";

import { useTheme } from "next-themes";
import { CiLight, CiDark } from "react-icons/ci";

export const ChangeTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const current = theme === "system" ? systemTheme : theme;

  const toggle = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      theme == "dark" ? setTheme("light") : setTheme("dark");
    },
    [theme, setTheme],
  );

  return (
    <div className="ml-auto">
      <button className="p-3 text-2xl" onClick={toggle}>
        {current === "dark" ? <CiDark /> : <CiLight />}
      </button>
    </div>
  );
};
