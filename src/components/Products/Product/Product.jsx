/* eslint-disable react/jsx-no-undef */
import React from 'react'

import {Card,CardMedia, CardContent,CardActions,Typography, IconButton,CardActionArea} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import {Link} from 'react-router-dom';

 const Product = ({product, onAddToCart,productDeets }) => {
   
    const classes = useStyles();
    
    return (
        <div>
         

         <Card style={{backgroundColor: "#ffde59"}}  className={classes.root} >
      
         <CardActionArea component={Link} to={`/product-details/${product.id}`} >
              <CardMedia  className={classes.media}  image ={product.image.url} title={product.name}   />

                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>

                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                        </div>
                        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>
                          
                     

                  


                </CardContent>

                 <CardActions disableSpacing className={classes.cardActions}> 

                    <IconButton aria-label ="Add To Cart" onClick={() => onAddToCart(product.id,1)}>
                       
                       <AddShoppingCart/>
                    </IconButton>

                 </CardActions>
            </CardActionArea>
       
         </Card>

         </div>
    )
    
}

export default Product;
