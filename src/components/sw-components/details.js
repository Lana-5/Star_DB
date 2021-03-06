import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";
import { useParams } from "react-router";

const PersonDetails = () => {
  let { id } = useParams();

  return (
    <SwapiServiceConsumer>
      {({ getPerson, getPersonImage }) => {
        return (
          <ItemDetails
            itemId={id}
            getData={getPerson}
            getImageUrl={getPersonImage}
          >
            <Record field="gender" label="Gender" />
            <Record field="eye_color" label="Eye Color" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanets, getPlanetImage }) => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={getPlanets}
            getImageUrl={getPlanetImage}
          >
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = () => {
  let { id } = useParams();

  return (
    <SwapiServiceConsumer>
      {({ getStarships, getStarshipImage }) => {
        return (
          <ItemDetails
            itemId={id}
            getData={getStarships}
            getImageUrl={getStarshipImage}
          >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="cost_in_credits" label="Cost" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
