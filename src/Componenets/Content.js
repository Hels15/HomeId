import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {purple} from "@mui/material/colors";
import OtherFeatures from "./OtherFeatures";


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function valuetext(value) {
  return `${numberWithCommas(value)}`;
}


function Content(props) {
    const [value,setValue] = useState([1000000,5000000])
    const [anotherValue,anotherSetValue] = useState([50,15000])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleAreaChange = (event,newValue) => {
        anotherSetValue(newValue)
    }

    return (
        <div className="home-container content-base">

            <div className="find-your-home">
                <div className="text find-your-home-text">Find your Home</div>
                <div className="item">
                     <div className="text"><input placeholder="Enter keyword..." type="text"/>
                     <i className="fas fa-angle-down icon"></i></div>
                </div>

                <div className="item">
                    <div className="text"><input placeholder="Location" type="text"/>
                     <i className="fas fa-angle-down icon"></i></div>
                </div>
                <div className="item">
                    <div className="text"><input placeholder="All Types" type="text"/>
                    <i className="fas fa-angle-down icon"></i></div>
                </div>
                <div className="item">
                    <div className="text"><input placeholder="All Status" type="text"/>
                     <i className="fas fa-angle-down icon"></i></div>
                </div>


                <div className="item">
                     <div className="beds-and-baths-text">
                         <div className="item text" id="beds"><input placeholder="Beds" type="text"/><i className="fas fa-angle-down icon"></i></div>
                          <div className="text" id="baths"><input placeholder="Baths" type="text"/><i className="fas fa-angle-down icon"></i></div>
                     </div>
                </div>
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

            </div>
            <div className="properties">
                test
            </div>
        </div>
    );
}

export default Content;