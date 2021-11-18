import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipPage } from "../pages";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {};

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <PlanetsPage />
          <StarshipPage />
        </div>
      </SwapiServiceProvider>
    );
  }
}
