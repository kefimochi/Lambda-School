import React from "react";
import * as rtl from "react-testing-library";
import Display from "../display/Display";
import Controls from "../controls/Controls";

test("Testing for displaying 'control' on dashboard", () => {
  rtl.render(<Controls />);
});

test("Testing for displaying 'display' on dashboard", () => {
  rtl.render(<Display />);
});
