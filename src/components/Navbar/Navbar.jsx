import React from 'react';

import { AppBar,Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/dog_friendly_6.jpg';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';

const NavBar = ({totalItems}) => {

    const classes = useStyles();

    const location= useLocation();

       return (
        <div>
           <AppBar position="fixed" className={classes.appBar} color="inherit">

                    <Toolbar>
                        <Typography component={Link} to="/"  variant="h6" className={classes.title} olor="inherit">
                            <img src={logo} alt="Authelia" height="25px" className={classes.image}/>
                            Authelia
                        </Typography>

                        <div className={classes.grow} />
                        {location.pathname ==='/'&&(
                        <div className={classes.button}>

                            <IconButton component={Link} to="/cart" aria-label="show Cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                     <ShoppingCart />
                                </Badge>
                            </IconButton>

                        </div>)}
                  </Toolbar>
               
               </AppBar>    
        </div>
    )
}

export default NavBar
