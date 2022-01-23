import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box'

import image from "../../Images/Garden-Gingerbread-House.jpg"

import { FaBed } from "react-icons/fa"
import {FaBath} from "react-icons/fa"
import {GiHomeGarage} from "react-icons/gi"
import {GiSandsOfTime} from "react-icons/gi"

const IconButtonStyle = {
    fontSize: "13px"
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
                    image={image}
                    sx={{width: "150px", height: "150px", margin: "20px", borderRadius: "5px"}}
                    />


                    <CardContent>
                        <Typography>
                            <h3 style={{fontSize: "16px"}}>{data.title}</h3>
                        </Typography>
                        <Typography>
                           <p style={{fontSize: "0.875rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, modi!</p>
                        </Typography>
                        <Typography>
                           <h1 style={{fontSize: "16px"}}>num</h1>
                        </Typography>
                        <Typography>
                            <p style={{fontSize: "0.875rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium enim facilis harum iusto perferendis quae quo quos. Autem, sequi, tenetur.</p>
                        </Typography>
                    </CardContent>
                    </Box>



                </CardActionArea>
                <CardActions>
                    <IconButton style={IconButtonStyle}>
                        <FaBed/>
                    </IconButton>
                    <IconButton style={IconButtonStyle}>
                        <FaBath/>
                    </IconButton>
                    <IconButton style={IconButtonStyle}>
                        <GiHomeGarage/>
                    </IconButton>
                    <IconButton style={IconButtonStyle}>
                        <GiSandsOfTime/>
                    </IconButton>
                    <Button sx={{ transform: "translateX(340px)",backgroundColor: "#0ec6d5", width: "80px", height: "25px"}} variant="contained">
                        Test
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default ItemCard;