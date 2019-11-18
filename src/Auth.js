/* eslint-disable no-shadow */
/* eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js';
import axios from 'axios';

const LOGIN_EXISTS_PAGE =
  localStorage.getItem('targetUrl') !== null
    ? localStorage.getItem('targetUrl')
    : '/profile';
const LOGIN_FAILURE_PAGE = '/login';
const LOGIN_REGISTER_PAGE = '/register';

// Running a new auth0 call and pulling in the required domain and client id and other values needed for access

export default class Auth {
  // Running a new auth0 call and pulling in the required domain and client id and other values needed for access
  auth0 = new auth0.WebAuth({
    domain: 'dev-gco3gwsp.auth0.com',
    clientID: 'kFpGm0tbpc2lUax1Il5S0vS54opwh3iv',

    redirectUri: 'https://priceless-tereshkova-2a5747.netlify.com/callback',
    // redirectUri: 'http://localhost:3000/callback',
    // redirectUri: 'https://sharp-wozniak-279070.netlify.com/callback',

    // redirectUri: 'https://tech2rent.co/callback',
    // redirectUri: 'http://localhost:3000/callback',
    // redirectUri: 'https://sharp-wozniak-279070.netlify.com/callback',

    responseType: 'token id_token',
    audience: 'https://dev-gco3gwsp.auth0.com/userinfo',
    scope: 'openid',
  });

  // / binds the login
  constructor() {
    this.login = this.login.bind(this);
  }

  // / Calls this fn when a user clicks login -- reroutes to a separate login page
  login() {
    this.auth0.authorize();
  }

  // calls when user has logged in with auth0
  handleAuthentication() {
    // parses the data to be read
    this.auth0.parseHash((err, authResults) => {
      // if results are returned with an access token and an id token
      if (authResults && authResults.accessToken && authResults.idToken) {
        // sets the expiration
        const expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        // saving all required values to local storage to be referenced later for access to private route
        localStorage.setItem('access_token', authResults.accessToken);
        localStorage.setItem('id_token', authResults.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('user_id', authResults.idTokenPayload.sub);
        // localStorage.setITem('');
        location.hash = '';

        // create an empty array to check if user exists in OUR db (not auth0's)
        const users = [];
        // make a call to our db to retrieve users
        axios
          .get(
            'https://labstech2rentstaging.herokuapp.com/api/users/fix/userIDS'
          )
          .then(res => {
            // filter through data and pull out all the auth0_user_id values from their objects
            res.data.filter(res =>
              // grab all the above values and push them inside users array
              users.push(res.auth0_user_id)
            );

            // check against our db to see if it includes the userId that was just logged in
            if (users.includes(authResults.idTokenPayload.sub)) {
              // if they exists in our db, then reroute them to the home page

              // if local storage has a pathname of a route they tried to visit before logging in, route them there<div></div>
              location.pathname = LOGIN_EXISTS_PAGE;
              // RunRegister();
            } else {
              // if they do not exist reroute them to finish registration
              // RunRegister();
              location.pathname = LOGIN_REGISTER_PAGE;
            }
          })
          .catch(err => console.log(err));
      } else if (err) {
        // if failure, reroute to the login page to try again
        location.pathname = LOGIN_FAILURE_PAGE;
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // if the new date is less that the expiration date, then return
    return new Date().getTime < expiresAt;
  }
}
