import useLocalStorage from "./useLocalStorage";
import React, { useState, useEffect } from "react";

const useDarkMode = initialValue => {
  const [isDark, setIsDark] = useLocalStorage("dark-mode", initialValue);
  useEffect(() => {
    if (isDark) {
      document.getElementsByTagName("BODY")[0].classList.add("dark-mode");
    } else {
      document.getElementsByTagName("BODY")[0].classList.remove("dark-mode");
    }
  });
  return [isDark, setIsDark];
};

export default useDarkMode;
