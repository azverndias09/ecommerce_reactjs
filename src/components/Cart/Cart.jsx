import React from 'react'
import {Container,Typography,Button,Grid,AppBar,Toolbar,IconButton,Box} from '@material-ui/core';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  
      const classes= useStyles();


    const EmptyCart=()=>(

        <Typography variant="subtitle1">Your Cart Is Empty <Link to ="/" className={classes.Link}>Start Adding some</Link>
        </Typography>
       

    );


    const FilledCart=()=>(

        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item)=> (

                    <Grid item xs={12} sm={4} key={item.id}> 
                        <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/> 

                       
                    </Grid>  


            ))}

        </Grid>
                <Container >
            <div className={classes.cardDetails}>
                
                    <Typography variant="h4">
                        Subtotal:{cart.subtotal.formatted_with_symbol}</Typography>
                       
                        <div>
                            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}> 
                                Empty Cart
                            </Button>

                            <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary"> 
                                CheckOut
                            </Button>
                        </div>

                      

            </div>  
            </Container>
           
        </>


    );


    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>
                Your Shopping Cart 
            </Typography>
           
            {!cart.total_unique_items?<EmptyCart /> : <FilledCart />}
           
            {/* <AppBar positionMode="fixed" position="bottom"  color="primary" >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <AddShoppingCart />
          </IconButton>
        
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <AddShoppingCart />
          </IconButton>
          <IconButton color="inherit">
            <AddShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar> */}
        </Container>
    )
}

export default Cart;
