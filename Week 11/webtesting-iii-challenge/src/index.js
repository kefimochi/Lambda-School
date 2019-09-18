import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Dashboard from "./dashboard/Dashboard";

ReactDOM.render(<Dashboard />, document.getElementById("root"));

// test('Controls the component that changes the button text to reflect the state of when unlocked is clicked', () => {
//     const controls = render(<Controls locked={false} />);

//     const closeGate = controls.getByText(/close gate/i);
//     fireEvent.click(closeGate);
//     controls.findByText(/closed/i);

//     const lockGate = controls.getByText(/lock gate/i);
//     fireEvent.click(lockGate);
//     controls.findByText(/locked/i);
//   });
