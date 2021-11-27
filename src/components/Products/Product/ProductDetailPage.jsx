import { React, useState, useEffect, useRef } from "react";
import { commerce } from "../../../lib/commerce";

import Carousel from 'react-material-ui-carousel';


import {
  Paper,
  Box,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Container,
  CircularProgress,
  Backdrop,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  TextField,
} from "@material-ui/core";
import { Link, params, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import { AddShoppingCart } from "@material-ui/icons";

const ProductPage = () => {
  const useStyles = makeStyles({
    root: {
      padding: "0 30px",
      border: 0,
      borderRadius: 3,
    },

    cardDet: {
      backgroundColor: "#ffde59",

      marginTop: "80px",
      marginLeft: "10px",
      marginRight: "10px",
    },
    cardDet2: {
    
      backgroundColor:"#12a152",
      marginTop: "10px",
      marginLeft: "10px",
      marginRight: "10px",
    },
    media: {
      height: 260,
    },
  });

  const classes = useStyles();

  const [productMain, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(' ');
  const [color, setColor] = useState(' ');


  const getProductDeets = async function (productId) {
    const result = await commerce.products.retrieve(productId);
    return result;
  };
  console.log("line9");
  const { id } = useParams();


  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const getData = async () => {
    try {
      let product = await getProductDeets(id);
      console.log("inside async");
      setProduct(product);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    console.log(productMain);
  }, []);

  const NotGot = () => (
    <Container style={{ paddingTop: "80px" }}>
      {/* <Typography variant="h6">Loading
            </Typography> */}

      <Backdrop sx={{ color: "#4287f5" }} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );

  const GotProduct = () => (
    <Grid>
      <Grid>
        <Card className={classes.cardDet}>
          <CardMedia
            image={productMain.image.url}
            className={classes.media}
            title={productMain.name}
          />

          <CardContent>
            <div className={classes.cardContent}>
              <Box
                sx={{
                    justifyContent: 'space-between',
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box>
                  <Typography variant="h5" gutterBottom>
                    {productMain.name}
                  </Typography>
                </Box>
                
              </Box>
              <Typography variant="h5">
                {productMain.price.formatted_with_symbol}
              </Typography>

              <Typography
                dangerouslySetInnerHTML={{ __html: productMain.description }}
                variant="body2"
                color="textSecondary"
              />
            </div>
          </CardContent>
        </Card>


        <Card className={classes.cardDet2}>
        <CardContent>
                
        <Box  sx={{
                    justifyContent: 'space-between',
                  display: "flex",
                  flexDirection: "row",
                }}>

            <Box>

            <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="size-input">Size</InputLabel>
        <Select
          labelId="size-label"
          id="demo-simple-select-autowidth"
          value={size}
          onChange={handleSizeChange}
          autoWidth
          label="Size"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>S</MenuItem>
          <MenuItem value={21}>M</MenuItem>
          <MenuItem value={22}>L</MenuItem>
        </Select>
      </FormControl>
              </Box>

              <Box>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="color-input">Color</InputLabel>
        <Select
          labelId="color-input"
          id="color-changer"
          value={color}
          onChange={handleColorChange}
          autoWidth
          label="Color"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Red</MenuItem>
          <MenuItem value={21}>Black</MenuItem>
          <MenuItem value={22}>Blue</MenuItem>
        </Select>
      </FormControl>
              </Box>


        </Box>
          </CardContent>

          </Card>
      </Grid>

      
    </Grid>
  );

  return (
    //    <Container>
    //   {!productMain?<NotGot/>:<GotProduct/>}
    //   </Container>

    <div>{loading ? <GotProduct /> : <NotGot />}</div>
  );
};

export default ProductPage;
