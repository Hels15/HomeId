import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box'
import {Fragment} from "react";

function FindInput(props) {
     //select
    const info = props.info
    const setInfo = props.setInfo
    const data = props.data

    const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    setInfo({ ...info, [name]: value });
  };

    const handleValue = (name) =>{

        if(name === "city"){
             return info.city
        }
        if(name === "type"){
            return info.type
        }
        if(name === "status"){
            return info.status
        }
        if(name === "beds"){
            return info.beds
        }
        if(name === "baths"){
            return info.baths
        }

    }
    const cities = ["Austin", "Boston", "Chicago", "Denver", "Los Angeles", "New York", "San Francisco"]
    const types= ["Apartment", "Cando", "Lot", "Multi Family Home", "Office", "Shop"]
    const statuses = ["For Rent", "For Sale"]
    const bedsArray = [3,4]
    const bathsArray = [3,4]
    const createMenus = (listname) => {
        const items = []
        for (let i = 0; i < listname.length; i++) {
            items.push(<MenuItem value={listname[i]}>

                {listname[i]}
            </MenuItem>)

        }
        return items
    }

    return (
        <div className="form-control" style={{
              width: data.inline ? "155px" : "100%",
              display: data.inline ? "inline-block" : "block"
          }}>

            {!data.inline?

                <Fragment>
                     <FormControl className="form-control-item" sx={{paddingBottom: 5}}>

                    <InputLabel id="demo-simple-select-label">{data.label}</InputLabel>
                    <Select className="select" sx={{
                        "& .MuiSelect-nativeInput":{
                        width: 0
                        }}
                    }
                        name={data.name}

                        label={data.label}
                        id={data.NameID}

                        value={handleValue(data.name)}
                        onChange={(e) => handleChange(e)}

                    >

                        {createMenus(data.items)}

                    </Select>
                </FormControl>
                </Fragment>
                :
                // if inline is true
                <Fragment>

                <FormControl className="form-control-item special" sx={{paddingBottom: 5}}>

                <InputLabel id="demo-simple-select-label-beds">{data.label}</InputLabel>
                <Select sx={{ "& .MuiSelect-nativeInput":{
                        width: 0
                        }}}
                        name={data.name}
                        label={data.label}
                        id={data.nameID}
                        value={handleValue(data.name)}
                        onChange={(e) => handleChange(e)}

                    >
                        {createMenus(data.items)}

                    </Select>
                 </FormControl>

                    </Fragment>

            }


        </div>
    );
}

export default FindInput;