import React, { useState, useEffect } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

export default function App() {
  return (
    <main>
      <Header />
      <div className="pages">
        <TabNav />
      </div>
    </main>
  );
}
