import React from 'react';

import { AppBar,IconButton,Toolbar,Badge, Typography,Box } from '@material-ui/core';
import { ContactPhone, Home, ShoppingCart } from '@material-ui/icons';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';
import logo from '../../assets/insta_logo.png';
const NavBar = ({totalItems}) => {

    const classes = useStyles();

    const location= useLocation();
 
       return (
        
        <div>
           <AppBar position="fixed" className={classes.appBar} color="inherit">

                    <Toolbar >
                     
                        <Typography component={Link} to="/"  variant="h6" className={classes.title} color="inherit">
                            <img src={logo} alt="Authelia" height="25px" className={classes.image}/>
                            Authelia
                        </Typography>
                        <Box
        sx={{
          display: 'flex',
        
            alignItems:'center',
           marginRight:'10px',
            
          bgcolor: 'background.paper',
        }}
      >             
       <Box   sx={{ display: { xs: 'block', md: 'none' }}} >
       <IconButton component={Link} to="/" color="inherit">
                                
                                     <Home />
                                
                            </IconButton>
                      
      </Box>
                                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <Typography component={Link} to="/"  variant="button" className={classes.subtitle} color="inherit">
                            
                           Home
                        </Typography>

                            </Box>

                            {/* <Box   sx={{ display: { xs: 'block', md: 'none' }}} >
       <IconButton component={Link} to="/" aria-label="show Cart items" color="inherit">
                                
                                     <ContactPhone />
                                
                            </IconButton>
                      
      </Box>
                                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <Typography component={Link} to="/"  variant="button" className={classes.subtitle} color="inherit">
                            
                          Contact Us
                        </Typography>

                            </Box> */}


                        <div className={classes.grow} />
                        
                        <div >

                            <IconButton component={Link} to="/cart" aria-label="show Cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                     <ShoppingCart />
                                </Badge>
                            </IconButton>

                        </div>
        
      </Box>
                        
                        
                        
                       
                  </Toolbar>
               
               </AppBar>    
        </div>
    )
}

export default NavBar
