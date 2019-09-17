import React from "react";
import * as rtl from "react-testing-library";
import Display from "./Display";

test("Testing if closed OR locked, should be red", () => {
  const { getByText } = rtl.render(<Display closed={true} locked={true} />);
  const closed = getByText(/closed/i);
  const locked = getByText(/locked/i);
  expect(locked.classList).toContain("red-led");
  expect(closed.classList).toContain("red-led");
});

test("matches snapshot", () => {
  const { container } = rtl.render(<Display />);
  expect(container).toMatchSnapshot();
});
