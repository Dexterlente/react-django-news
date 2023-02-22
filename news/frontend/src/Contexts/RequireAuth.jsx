import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const RequireAuth = (WrappedComponent) => {
  const navigate = useNavigate();

  useEffect(() => {
    const sessionID = Cookies.get("sessionID");
    if (!sessionID) {
      navigate("/login");
    } else {
      navigate('/');
    }
  }, [navigate]);

  return function(props) {
    return <WrappedComponent {...props} />;
  };
}

export default RequireAuth;
