import React from "react";
import { Route, Link } from "react-router-dom";
import { Tab } from "semantic-ui-react";

const panes = [
  { menuItem: "Home", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: "Characters", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: "Locations", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: "Episodes", render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> }
];

const TabNav = () => {
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
};

export default TabNav;
