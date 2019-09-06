import React from "react";
import * as rtl from "@testing-library/react";
import * as rtlfuck from "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import PlayerCard from "../playerCard";
import App from "../../App";

test("should have text [player name]", () => {
  const app = rtl.render(<App />);
  // findByText(/Alex Morgan/i);
  console.log(app);
});
//   const ball = container.queryByText(/Searches: 100/i);
// console.log(container);
//   expect(ball).toBeTruthy();

// describe("sum function", () => {
//   it("sums two integers", () => {
//     const expected = [0, 0];
//     // const actual = dash.calculateScore(5, 2);
//     // console.log(actual);
//     console.log(Dashboard.state.hi());
//     // expect(actual).toBe(expected); // .toBe() looks for strict equality!
//   });
// });
