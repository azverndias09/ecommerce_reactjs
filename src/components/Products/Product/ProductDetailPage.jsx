import { React, useState, useEffect } from "react";
import { commerce } from "../../../lib/commerce";

import {
  Box,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
  CircularProgress,
  Backdrop,
  Button,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import { AddShoppingCart } from "@material-ui/icons";

const ProductPage = ({ onAddToCart }) => {
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
      backgroundColor: "#12a152",
      marginTop: "10px",
      marginLeft: "10px",
      marginRight: "10px",
    },
    cardDet3: {
      backgroundColor: "#7b32a8",
      marginTop: "10px",
      marginLeft: "10px",
      marginRight: "10px",
    },
    media: {
      height: 200,
    },
  });

  const classes = useStyles();

  const [productMain, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(' ');
  const [color, setColor] = useState(' ');

  const getProductDeets = async function (productId) {
    const result = await commerce.products.retrieve(productId);
    console.log(result);
    return result;
  };

  const { id } = useParams();

  const handleSizeChange = (event) => {
    setSize(event.target.value);
    console.log(size);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const getData = async () => {
    try {
      let product = await getProductDeets(id);
     
      setProduct(product);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  
  }, []);

  const NotGot = () => (
    <Container style={{ paddingTop: "80px" }}>
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
                  justifyContent: "space-between",
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
            <Box
              sx={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row",
              }}
            >
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
                    <MenuItem value={"S"}>S</MenuItem>
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"L"}>L</MenuItem>
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
      <Card className={classes.cardDet3}>
        <CardContent>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Button
              size="large"
              variant="contained"
              endIcon={<AddShoppingCart />}
              onClick={() => onAddToCart(productMain.id, 1)}
            >
              ADD TO CART
            </Button>
          </Box>
        </CardContent>
      </Card>
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
