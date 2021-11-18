import React from "react";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import { withData } from "../hoc-helpers";

const swapiService = new SwapiService();

const { getAllPlanets, getAllPeople, getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span> {name} </span>;
const ListWithChildren = withChildFunction(ItemList, renderName);

const PersonList = withData(ListWithChildren, getAllPeople);

const PlanetList = withData(ListWithChildren, getAllPlanets);

const StarshipList = withData(ListWithChildren, getAllStarships);

export { PersonList, PlanetList, StarshipList };
