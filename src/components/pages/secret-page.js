import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const SecretPage = ({ isLoggedIn }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(`/login`);
    }
  });

  if (!isLoggedIn) {
    return null;
  }
  return (
    <div className=" jumbotron text-center">
      <h3> This page is full of secrets!!! </h3>
    </div>
  );
};
export default SecretPage;
