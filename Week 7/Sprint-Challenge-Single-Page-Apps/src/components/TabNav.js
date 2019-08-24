import React from "react";
import { Route, Link } from "react-router-dom";
import { Tab } from "semantic-ui-react";
import WelcomePage from "./WelcomePage";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";
import CharacterList from "./CharacterList";

const panes = [
  {
    menuItem: "Home",
    render: () => (
      <Tab.Pane>
        <WelcomePage />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Characters",
    render: () => (
      <Tab.Pane>
        <CharacterList />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Locations",
    render: () => (
      <Tab.Pane>
        <LocationsList />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Episodes",
    render: () => (
      <Tab.Pane>
        <EpisodeList />
      </Tab.Pane>
    )
  }
];

const TabNav = () => {
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
};

export default TabNav;
