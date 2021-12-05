import React from "react";
import { StarshipList } from "../sw-components";
import { useNavigate } from "react-router-dom";

const StarshipPage = ({ history }) => {
  let navigate = useNavigate();

  console.log(navigate);

  return (
    <StarshipList
      onItemSelected={(itemId) => {
        navigate(`${itemId}`);
      }}
    />
  );
};

export default StarshipPage;
