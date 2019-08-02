import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
// /make route private and spread in the rest of the props
const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(store => store.submit.auth);
   return <div>
    <Route
      {...rest}
      render={props => {
        // if id token and access token are in local storage then render page
        if (
          localStorage.getItem('id_token') &&
          localStorage.getItem('access_token')
        ) {
          return <Component {...props} />;
          // console.log("testing")
        }
        // / if not then redirect to login
        localStorage.setItem('targetUrl', window.location.pathname)
        //console.log(props.auth)
        return auth.login();;
      }}
    />
  </div>
    };

export default PrivateRoute
