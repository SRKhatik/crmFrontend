import React from "react";
import { useLocation } from "react-router-dom";
import constants from "../utils/constants";
import UnAuthorised from "../components/UnAuthorised/UnAuthorised";
import UnAuthenticated from "../components/UnAthenticated/UnAuthenticated";

function Auth(props) {
  const location = useLocation();
  const userType = localStorage.getItem("userType");
  if (!userType) {
    return <UnAuthenticated />;
  }
  const page = location.pathname.split("/")[1];
  var requiredUserType = null;
  if (page.toUpperCase()=== "ADMIN") {
    requiredUserType = constants.userTypes.admin;
  } else if (page.toUpperCase() === "CUSTOMER") {
    requiredUserType = constants.userTypes.customer;
  } else if (page.toUpperCase() === "ENGINEER") {
    requiredUserType = constants.userTypes.engineer;
  }
  if (userType !== requiredUserType) {
    return <UnAuthorised userType={userType} />;
  }
  return <div>{props.children}</div>;
}

export default Auth;
