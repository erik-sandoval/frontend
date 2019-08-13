// src/components/NavBar.js
import { library } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
//mport {useDispatch, useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logout2 from '../../Logout';
import logo from '../../Images/t2rlogo.png';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle as farFaUserCircle } from '@fortawesome/free-regular-svg-icons';
import { getPhotos, } from '../../actions';
const NavBar = props => {

  const [item, setItem] = useState({
    item: ''
  });



  const [menuOpened, setMenuOpened] = useState(false);
  const dispatch = useDispatch()
  const auth = useSelector(store => store.submit.auth);
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logout = e => {
    e.preventDefault();

    logout2()

    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
    localStorage.removeItem('targetUrl');

    //window.location.pathname = ' https://localhost:3000/v2/logout';

  };

  const handleChange = e => {
    setItem({
      [e.target.name]: e.target.value
    });
  };

  const findItem = e => {
    e.preventDefault();
    localStorage.setItem('itemQuery', item.item)
    window.location.pathname = '/view-listing'
  
  };


  return (
    <div>

      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <NavLink to="/">
              <img src={logo} alt="tech2rent logo" />
            </NavLink>
          </div>
          <div className="navbar-input-wrapper">

            <FontAwesomeIcon className="navbar-icon" icon={faSearch} />
            <form onSubmit={findItem}> <input
              className="navbar-input"
              type="text"
              name="item"
              placeholder='Try "Nikon"'
              value={item.item}
              onChange={handleChange}

            /></form>
          </div>
          <div className="navbar-right">
            <NavLink exact to="/" className="navbar-link">
              How it Works?
            </NavLink>
            {localStorage.getItem('access_token') !== null &&
              localStorage.getItem('id_token') !== null &&
              localStorage.getItem('expires_at') !== null &&
              localStorage.getItem('user_id') !== null ? (
                <NavLink className="navbar-link" onClick={logout}>
                  Log Out
              </NavLink>
              ) : (
                <NavLink
                  exact
                  to="/"
                  className="navbar-link"
                  onClick={auth.login}
                >
                  Log In
              </NavLink>
              )}
            <NavLink to="#" onClick={auth.login} className="navbar-link">
              Sign Up
            </NavLink>
            <NavLink
              to="#"
              className="navbar-link"
              activeClassName="navbar-link__active"
            >
              Help
            </NavLink>
          </div>

          {localStorage.getItem('access_token') !== null &&
            localStorage.getItem('id_token') !== null &&
            localStorage.getItem('expires_at') !== null &&
            localStorage.getItem('user_id') !== null ?
            <FontAwesomeIcon className="navbar-icon__user" icon={farFaUserCircle}
              onClick={() => {
                const dropdown = document.querySelector('.profile-dropdown')
                dropdown.classList.toggle('dropdown-open')
              }}
            /> : null}


          <div className="navbar-mobile">
            <div id="nav-icon"

              onClick={() => {
                const mainContent = document.querySelector('.mainContent')
                mainContent.classList.toggle('slideDown')

                const navIcon = document.querySelector('#nav-icon')
                navIcon.classList.toggle('change')
                setMenuOpened(!menuOpened)
              }}

            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>

          </div>
        </div>
      </nav>


      <div className={menuOpened ? "navlinks-mobile open" : "navlinks-mobile closed"}>
        <NavLink className="navlink-mobile" to="#">
          How it Works?
          </NavLink>
        <NavLink to="#" className="navlink-mobile" onClick={auth.login}>
          Login
          </NavLink>
        <NavLink to="#" className="navlink-mobile" onClick={auth.login}>
          Sign Up
          </NavLink>
        <NavLink className="navlink-mobile" onClick={auth.login} to="#">
          Help
          </NavLink>
      </div>

      <div className="profile-dropdown">
        <div className="dropdown-container" >
          <NavLink className="navbar-link dropdown" to="/account-settings">Account Settings</NavLink>
          <NavLink className="navbar-link dropdown" to="/edit-profile">Edit Profile</NavLink>
          <NavLink className="navbar-link dropdown" to="/profile">Go To Profile</NavLink>
        </div>

      </div>
    </div>
  );
};

export default NavBar;