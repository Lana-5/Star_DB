import React, { Component } from "react";

import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../starship-details";

export default class App extends Component {
  state = {
    selectedPerson: 5,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    return (
      <div className="stardb-app">
        <Header />

        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className=" col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <PlanetDetails />
        <StarshipDetails />
      </div>
    );
  }
}
