import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const RequireAuth = (WrappedComponent) => {
    return function(props) {

	const Navigate = useNavigate();

	useEffect(() => {
		const sessionid = Cookies.get('sessionid');
		if (!sessionid) {
			Navigate("/login");
		}
	}, [Navigate]);

	return <WrappedComponent {...props} />;
    };
}

export default RequireAuth;
