import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {List, ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import {Home,Account_box,Input,Launch} from '@material-ui/icons';

const Nav = (props) => {
    return (
        <nav>
            <List>
                <ListItem button component={List} to='/home'>
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                <ListItemText primary='Home'/>
                </ListItem>
                {props.checkLogin() &&
                <React.Fragment>
                    <ListItem button component={List} to='/profile'>
                        <ListItemIcon>
                            <Account_box/>
                        </ListItemIcon>
                        <ListItemText primary='Profile'/>
                        {/*<Link to='/profile'>Profile</Link>*/}
                    </ListItem>
                    <ListItem button component={List} to='/logout'>
                        <ListItemIcon>
                            <Launch/>
                        </ListItemIcon>
                        <ListItemText primary='Logout'/>
                        {/*<Link to='/logout'>Logout</Link>*/}
                    </ListItem>
                </React.Fragment>
                }
                {!props.checkLogin() &&
                <ListItem button component={List} to='/'>
                    <ListItemIcon>
                        <Input/>
                    </ListItemIcon>
                    <ListItemText primary='Login'/>
                    {/*<Link to='/'>Login</Link>*/}
                </ListItem>
                }

            </List>
        </nav>
    );
};

Nav.propTypes = {
    checkLogin: PropTypes.func,
};

export default Nav;