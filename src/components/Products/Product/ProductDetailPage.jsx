import {React,useState ,useEffect,useRef} from 'react';
import { commerce } from '../../../lib/commerce';
import {Card,CardMedia, CardContent,CardActions,Typography, IconButton,CardActionArea,Grid, Container,CircularProgress} from '@material-ui/core';
import {Link, params,useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
  


const ProductPage =()=> {
   const useStyles=makeStyles({

        root:{
            padding: '0 30px',
            border:0,
            borderRadius:3,
          


        },
        
        cardDet:{
           
            backgroundColor: "#ffde59",
           
            
            marginTop:'80px',
            marginLeft:'10px',
        

        },
        media:{

            height:260,
        }

         });
    const classes = useStyles();
    
  const [productMain,setProduct]=useState({});
  const [loading,setLoading]=useState(false);

  const getProductDeets=async function(productId){
    const result = await commerce.products.retrieve(productId);
    return result;
}
    console.log("line9");
    const {id} = useParams();

        const getData= async () => {
        
            try{
                let  product = await getProductDeets(id);
                console.log("inside async");
                 setProduct(product);
                setLoading(true);
            } catch(e){
                console.log(e); 
            }   
          };
 
           useEffect(()=>{

            getData();
            console.log(productMain);
           },[]);
 

    const NotGot=()=>(
    <Container  style={{paddingTop: '80px'}}    >
    <Typography variant="h6">Your Cart Is Empty <Link to ="/" >Start Adding some</Link>
            </Typography>

            </Container>
   );

        

    const GotProduct=()=>(
        
       
        <Grid container justifyContent="start" spacing={2}>
        <Grid  item xs={12} sm={6} md={4} lg={3}>
        <Card  className={classes.cardDet}>

        <CardMedia image={productMain.image.url} className={classes.media} title={productMain.name}/>
       
                <CardContent>
                    <div className={classes.cardContent} >
                        <Typography variant="h5" gutterBottom>
                        {productMain.name}
                        </Typography>
       
                        <Typography variant="h5">
                         {productMain.price.formatted_with_symbol} 
                        </Typography>
                        </div>
                      
                          
                     
       
                  
       
       
                </CardContent>
       
                
         </Card>
         </Grid> 
         </Grid>
        );

      
      

    return(     
        
    //    <Container>
    //   {!productMain?<NotGot/>:<GotProduct/>}
    //   </Container>

   <div>


       {loading?<GotProduct/>:<NotGot/>}
   </div>
    
    
    );
};

export default ProductPage;
