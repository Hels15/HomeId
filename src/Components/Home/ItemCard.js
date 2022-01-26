import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box'
import Fragment from "react";


import { FaBed } from "react-icons/fa"
import {FaBath} from "react-icons/fa"

import {GiHomeGarage} from "react-icons/gi"
import {GiSandsOfTime} from "react-icons/gi"

const IconButtonStyle = {
    fontSize: "13px",

}

function ItemCard({data}) {

    return (
        <div className="item-card-container">
            <Card sx={{maxWidth: 600, maxHeight:"auto", marginBottom: 5, "&:hover":{
                filter: "drop-shadow(5px 5px 2px rgba(0,0,0, 0.1))"
                }}}>
                <CardActionArea>
                    <Box sx={{display: "flex"}}>
                         <CardMedia
                    component="img"
                    height="200"
                    image={data.image}
                    sx={{width: "150px", height: "150px", margin: "20px", borderRadius: "5px"}}
                    />


                    <CardContent>
                        <Typography>
                            <h3 style={{fontSize: "16px"}}>{data.title}</h3>
                        </Typography>
                        <Typography>
                           <p style={{fontSize: "0.875rem"}}>{data.subtitle}</p>
                        </Typography>
                        <Typography>
                           <h1 style={{fontSize: "16px"}}>{data.price}</h1>
                        </Typography>
                        <Typography>
                            <p style={{fontSize: "0.875rem"}}>{data.description}</p>
                        </Typography>
                    </CardContent>
                    </Box>



                </CardActionArea>
                <CardActions sx={{marginLeft: 0}}>
                    <IconButton style={IconButtonStyle}>
                        <FaBed/>
                    </IconButton>
                    <div className="iconButton-text">
                        {data.beds} Br
                    </div>

                    <IconButton style={IconButtonStyle}>
                        <FaBath/>

                    </IconButton>
                    <div className="iconButton-text">
                        {data.baths} Ba
                    </div>

                    <IconButton style={IconButtonStyle}>
                        <GiHomeGarage/>
                    </IconButton >
                    <div className="iconButton-text">
                        {data.garage} Gr
                    </div>

                    <IconButton style={IconButtonStyle}>
                        <GiSandsOfTime/>
                    </IconButton>
                    <div className="iconButton-text">
                         {data.year}
                    </div>


                    <Button sx={{ transform: "translateX(230px)",backgroundColor: data.forSale === "ForSale" ? "#0ec6d5": "#6969eb", width: "auto", height: "25px"}} variant="contained">
                        {data.forSale === "ForSale" ?
                            <Fragment>
                                <p>For Sale</p>
                            </Fragment>
                            :

                            <Fragment>

                                <p>For Rent</p>
                            </Fragment>
                        }
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default ItemCard;