import React from "react";
import * as rtl from "react-testing-library";
import Display from "./Display";

test("Testing if closed, should be red", () => {
  const { locked } = rtl.render(<Display closed={true} locked={true} />);
  console.log("locked", locked);
  //   expect(locked.classList).toContain("red-led");
});

//   test("Testing if locked, should be red", () => {
//     const { getByText } = rtl.render(<Display closed={false} locked={false} />);
//   });

// test("Testing for display of open and unlocked gate", () => {
//   const { getByText } = rtl.render(<Display closed={false} locked={false} />);
// });

// test("Testing for display of open/closed and locked/unlocked", () => {
//     const {getByText} = render(<Select />)
// });

// test("Testing for display of open/closed and locked/unlocked", () => {
//     const {getByText} = render(<Select />)
// });

// test("Testing for display of open/closed and locked/unlocked", () => {
//     const {getByText} = render(<Select />)
// });
