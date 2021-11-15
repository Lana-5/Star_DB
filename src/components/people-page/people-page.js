import React, { Component } from "react";
import ItemList from "../item-list";
import ErrorIndicator from "../error-indicator/error-indicator";
import "./people-page.css";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{left}</div>
      <div className=" col-md-6">{right}</div>
    </div>
  );
};
export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name}   (${i.birth_year})`}
      </ItemList>
    );
    const itemdetails = <ItemDetails itemId={this.state.selectedPerson} />;
    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemdetails} />
      </ErrorBoundry>
    );
  }
}
