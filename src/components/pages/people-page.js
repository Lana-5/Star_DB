import React from "react";
import Row from "../row/row";
import { PersonDetails, PersonList } from "../sw-components";
import { useNavigate } from "react-router";

const PeoplePage = ({ history, itemId }) => {
  let navigate = useNavigate();

  return (
    <Row
      left={
        <PersonList
          onItemSelected={(itemId) => {
            navigate(`/people/${itemId}`);
          }}
        />
      }
      right={<PersonDetails itemId={itemId} />}
    />
  );
};
export default PeoplePage;
