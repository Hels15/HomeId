import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FindInput from "./FindInput";
import OtherFeatures from "./OtherFeatures";
import Button from '@mui/material/Button';
import {CardHomeContext} from "./Contexts/ItemListContext";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function valuetext(value) {
  return `${numberWithCommas(value)}`;
}


function FindYourHome(props) {
    const {find_input} = useContext(CardHomeContext)
    const {other_features} = useContext(CardHomeContext)
    const [value,setValue] = useState([1000000,5000000])
    const [anotherValue,anotherSetValue] = useState([50,15000])

    const info = props.info
    const setInfo = props.setInfo
    const data = props.data

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleAreaChange = (event,newValue) => {
        anotherSetValue(newValue)
    }

    return (

            <div className="find-your-home ">
                <div className="text find-your-home-text">Find your Home</div>
                <div style={{width: "100%"}}>
                    {
                    find_input.map(data=> <FindInput info={info} setInfo={setInfo} data={data} />)
                }
                </div>


                <div className="slider">
                    <Box sx={{ width: 300}}>

                        <p className="slider-title">{data.price_range}</p>
                             <Slider
                                    value={value}
                                    onChange={handleChange}
                                    min={data.fist_min_price}
                                    max={data.fist_max_price}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    valueLabelFormat={valuetext}
                                    color="secondary"
                        >
                        </Slider>
                        <p className="slider-price-style">${numberWithCommas(value[0])}{data.slider_space}${numberWithCommas(value[1])}</p>
                         <p className="slider-title">{data.area_size}</p>
                             <Slider
                                    value={anotherValue}
                                    onChange={handleAreaChange}
                                    min={data.second_min_price}
                                    max={data.second_max_price}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    valueLabelFormat={valuetext}
                                    color="secondary"
                        >
                        </Slider>
                        <p className="slider-price-style">${numberWithCommas(anotherValue[0])}{data.sqft_to}${numberWithCommas(anotherValue[1])}{data.sqft}</p>
                    </Box>

                </div>
                <div className="other-features">
                    {other_features.map(data =>  <OtherFeatures data={data}/>)}

                </div>
                <Button  sx={{':hover':{
                    backgroundColor: 'rgba(7,11,152,0.42)'
                    },margin: 2,left: -24, textAlign: "center", width: "100%", backgroundColor: "#0ec6d5"}} className="form-control-item custom-parent" variant="contained" size="large">Search
                </Button>

            </div>
    );
}

export default FindYourHome;