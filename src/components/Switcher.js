import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import UseDarkSide from "./UseDarkSide";

function Switcher() {
  const [colorTheme, setTheme] = UseDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="md:bg-slate-200 md:hover:bg-slate-300 dark:hover:bg-transparent p-2 dark:bg-transparent md:rounded-md">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} />
    </div>
  );
}

export default Switcher;
