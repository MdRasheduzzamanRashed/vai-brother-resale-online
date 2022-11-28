import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <p className="text-red-500">Something went wrong!!!</p>
      <p className="text-red-700">{error.statusText || error.message}</p>
      <h4>
        Please <button onClick={handleSignOut}>Sign Out</button> and Login again
      </h4>
    </div>
  );
};

export default DisplayError;
