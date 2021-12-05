import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import {
  PeoplePage,
  PlanetsPage,
  StarshipPage,
  SecretPage,
  LoginPage,
} from "../pages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StarshipDetails } from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  render() {
    const { isLoggedIn } = this.state;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />

            <React.StrictMode>
              <Routes>
                <Route path="/" element={<h2> Welcome To StarDB </h2>} />

                <Route path="/people" element={<PeoplePage />} />

                <Route path="/people/:id" element={<PeoplePage />} />

                <Route path="/planets" element={<PlanetsPage />} />

                <Route path="/starships" element={<StarshipPage />} />
                <Route path="/starships/:id" element={<StarshipDetails />} />

                <Route
                  path="/login"
                  element={
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  }
                />
                <Route
                  path="/secret"
                  element={<SecretPage isLoggedIn={isLoggedIn} />}
                />
                <Route path="*" element={<h2> Page not found </h2>} />
              </Routes>
            </React.StrictMode>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
