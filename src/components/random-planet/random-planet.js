import React, { Component } from "react";
import "./random-planet.css";

import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  componentDidMount() {
    this.updatePlanet();
    // setInterval(this.updatePlanet, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onPlanetloaded = (planet) => {
    this.setState({ planet, loading: false, error: false });
  };

  onnError = (err) => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = 3;

    this.swapiService
      .getPlanets(id)
      .then(this.onPlanetloaded)
      .catch(this.onnError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;

    const spiner = loading ? <Spiner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet card jumbotron rounded">
        {errorMessage}
        {spiner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, population, name, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=""
      />
      <div className="card-body">
        <h4> {name} </h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term"> Population </span>
            <span> {population} </span>
          </li>
          <li className="list-group-item">
            <span className="term"> Rotation Period </span>
            <span> {rotationPeriod} </span>
          </li>
          <li className="list-group-item">
            <span className="term"> Diameter </span>
            <span> {diameter} </span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
