import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const LoginPage = ({ isLoggedIn, onLogin }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(`/secret`);
    }
  });

  if (isLoggedIn) {
    return null;
  }
  return (
    <div className="jumbotron">
      <p> Login to see secret page !</p>
      <button className=" btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
