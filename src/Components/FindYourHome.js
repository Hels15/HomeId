import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FindInput from "./FindInput";
import OtherFeatures from "./OtherFeatures";
import Button from '@mui/material/Button';
import ImageSlider from "./Home/ImageSlider";
import Card from "./Home/Card"
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function valuetext(value) {
  return `${numberWithCommas(value)}`;
}


function FindYourHome(props) {
    const [value,setValue] = useState([1000000,5000000])
    const [anotherValue,anotherSetValue] = useState([50,15000])

    const info = props.info
    const setInfo = props.setInfo


    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleAreaChange = (event,newValue) => {
        anotherSetValue(newValue)
    }
    const HandleSearch = () =>{

    }


    return (

            <div className="find-your-home ">
                <div className="text find-your-home-text">Find your Home</div>

                <FindInput info={info} setInfo={setInfo} />
                <div className="slider">
                    <Box sx={{ width: 300}}>

                        <p className="slider-title">Price Range</p>
                             <Slider
                                    value={value}
                                    onChange={handleChange}
                                    min={0}
                                    max={8000000}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    valueLabelFormat={valuetext}
                                    color="secondary"
                        >
                        </Slider>
                        <p className="slider-price-style">${numberWithCommas(value[0])} to ${numberWithCommas(value[1])}</p>
                         <p className="slider-title">Area size</p>
                             <Slider
                                    value={anotherValue}
                                    onChange={handleAreaChange}
                                    min={0}
                                    max={15000}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    valueLabelFormat={valuetext}
                                    color="secondary"
                        >
                        </Slider>
                        <p className="slider-price-style">${numberWithCommas(anotherValue[0])} sqft to ${numberWithCommas(anotherValue[1])} sqft</p>
                    </Box>

                </div>
                <div className="other-features">
                    <OtherFeatures/>
                </div>
                <Button onClick={HandleSearch} sx={{':hover':{
                    backgroundColor: 'rgba(7,11,152,0.42)'
                    },margin: 2,left: -24, textAlign: "center", width: "100%", backgroundColor: "#0ec6d5"}} className="form-control-item custom-parent" variant="contained" size="large">Search
                </Button>



            </div>


    );
}

export default FindYourHome;