import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const requireAuth = (WrappedComponent) => {
  function AuthenticatedComponent(props) {
    const navigate = useNavigate();

    useEffect(() => {
      const sessionID = Cookies.get("sessionID");
      if (!sessionID) {
        navigate("/login");
      }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  }

  return AuthenticatedComponent;
}

export default requireAuth;
