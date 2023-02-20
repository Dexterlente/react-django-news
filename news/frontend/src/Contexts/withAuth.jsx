import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function withAuth(WrappedComponent) {
  return function(props) {
    const navigate = useNavigate();
    useEffect(() => {
      const sessionid = Cookies.get('sessionid');
      if (sessionid) {
        // User is authenticated, redirect to a different page
        navigate('/');
      }
    }, [navigate]);
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
