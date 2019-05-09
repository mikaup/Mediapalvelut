import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <ul>
                {props.checkLogin() &&
                <React.Fragment>
                  <li>
                    <Link to='/'><strong>Home</strong></Link>
                  </li>
                    <li>
                      <Link to='/profile'><strong>Profile</strong></Link>
                    </li>
                    <li>
                      <Link to='/logout'><strong>Logout</strong></Link>
                    </li>

                </React.Fragment>
                }
                {!props.checkLogin() &&

                <li>
                  <Link to="/home"><strong>Login</strong></Link>
                  </li>
                }

            </ul>
        </nav>
    );
};

Nav.propTypes = {
    checkLogin: PropTypes.func,
};

export default Nav;