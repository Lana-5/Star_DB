import React, { Component } from "react";

import Header from "../header";
import PeoplePage from "../people-page/people-page";
import RandomPlanet from "../random-planet";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {};
  render() {
    return (
      <div className="stardb-app">
        <Header />

        <RandomPlanet />

        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
            >
              {(i) => `${i.name}`}
            </ItemList>
          </div>
          <div className=" col-md-6">
            <ItemDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              // renderItem={(item) => item.name}
            >
              {(i) => `${i.name}`}
            </ItemList>
          </div>
          <div className=" col-md-6">
            <ItemDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
