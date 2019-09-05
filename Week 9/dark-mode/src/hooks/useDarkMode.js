import useLocalStorage from "./useLocalStorage";
import React, { useState } from "react";

const useDarkMode = (key, initialValue) => {
  const [isDark, setIsDark] = useLocalStorage("dark-mode", false);
  setIsDark(!isDark);
  return [isDark, setValue];
};
