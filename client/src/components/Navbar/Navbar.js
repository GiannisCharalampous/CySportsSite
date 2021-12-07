import {useCallback} from "react";
import React, {useState, useEffect} from 'react';
import {AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import memoriesLogo from '../../images/Logo.png';
import memoriesText from '../../images/SportsText.jpg';
import basketballImg from '../../images/Basket-logo.jpg';
import FootballImg from '../../images/football-logo.jpg';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = useCallback(() => {
        dispatch({type: actionType.LOGOUT});

        history.push('/auth');

        setUser(null);
    }, [history, dispatch, setUser]);

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, user?.token, logout]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (e) => {
        if (anchorEl !== e.currentTarget) {
            setAnchorEl(e.currentTarget);
        }
    };

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/posts" className={classes.brandContainer}>
                <img src={memoriesText} alt="icon" height="55px"/>
                <img className={classes.image} src={memoriesLogo} alt="icon" height="65px"/>
            </Link>
            <div className={classes.buttonContainer}>
                <Button className={classes.button1} component={Link} to="/shop">
                    SHOP
                </Button>
                <Button className={classes.button2}
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        onMouseOver={handleClick}
                >
                    SPORTS
                </Button>
                <Button className={classes.button2} component={Link} to="/">
                    Contact Us
                </Button>
                <Button className={classes.button2} component={Link} to="/">
                    About Us
                </Button>
            </div>
            <Menu
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{onMouseLeave: handleClose}}
            >
                <MenuItem component={Link} to="/basketball" style={{
                    backgroundImage: `url(${basketballImg})`, width: '350px', height: '350px', position: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>Basketball</MenuItem>
                <MenuItem component={Link} to="/football" style={{
                    backgroundImage: `url(${FootballImg})`, position: 'center',
                    backgroundRepeat: 'no-repeat', width: '350px', height: '350px'
                }}>Football</MenuItem>
            </Menu>

            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name}
                                src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary"
                                onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>

        </AppBar>
    );
};

export default Navbar;