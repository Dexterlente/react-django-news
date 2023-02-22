import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const RequireAuth = (WrappedComponent) => {
    return function(props) {
	const sessionid = Cookies.get('sessionid');
	const Navigate = useNavigate();

	useEffect(() => {
		if (!sessionid) {
			Navigate("/login");
		}
	}, [Navigate]);

	return <WrappedComponent {...props} />;
    };
}

export default RequireAuth;
