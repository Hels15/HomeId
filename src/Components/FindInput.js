import React, {useState} from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box'


function FindInput(props) {
     //select
    const info = props.info
    const setInfo = props.setInfo


    const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    setInfo({ ...info, [name]: value });
  };


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
        <div className="form-control">
             <FormControl className="form-control-item" sx={{paddingBottom: 5}}>

                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                    <Select className="select" sx={{
                        "& .MuiSelect-nativeInput":{
                        width: 0
                        }}
                    }
                        name="city"

                        label="Location"
                        id="demo-simple-select-city-id"
                        value={info.city}
                        onChange={(e) => handleChange(e)}

                    >

                        {createMenus(cities)}

                    </Select>
                </FormControl>
                <FormControl className="form-control-item" sx={{paddingBottom: 5}}>

                    <InputLabel id="demo-simple-select-label-types">All Types</InputLabel>
                    <Select sx={{"& .MuiSelect-nativeInput":{
                        width: 0
                        }}}
                        name="type"
                        label="All Types"
                        id="demo-simple-select-types-id"
                        value={info.type}
                        onChange={(e) => handleChange(e)}

                    >
                        {createMenus(types)}

                    </Select>
                </FormControl>
                 <FormControl className="form-control-item" sx={{paddingBottom: 5}}>
                    <InputLabel id="demo-simple-select-label-status">All Status</InputLabel>

                    <Select sx={{"& .MuiSelect-nativeInput":{
                        width: 0
                        }}}
                        name="status"
                        label="All Status"
                        id="demo-simple-select-status-id"
                        value={info.status}
                        onChange={(e) => handleChange(e)}

                    >
                        {createMenus(statuses)}

                    </Select>
                 </FormControl>
                <Box className="box-container custom-parent" sx={{display:"flex", }}>
                    <FormControl className="form-control-item" sx={{paddingBottom: 5}}>

                    <InputLabel id="demo-simple-select-label-beds">Beds</InputLabel>
                    <Select sx={{ "& .MuiSelect-nativeInput":{
                        width: 0
                        }}}
                        name="beds"
                        label="Beds"
                        id="demo-simple-select-beds-id"
                        defaultValue="test"
                        value={info.beds}
                        onChange={(e) => handleChange(e)}

                    >
                        {createMenus(bedsArray)}

                    </Select>
                 </FormControl>
            <FormControl className="form-control-item" sx={{paddingBottom: 5}}>

                    <InputLabel id="demo-simple-select-label-beds">Baths</InputLabel>
                    <Select sx={{ "& .MuiSelect-nativeInput":{
                        width: 0
                        }
                    }}
                        name="baths"
                        id="demo-simple-select-baths-id"
                        label="Baths"
                        value={info.baths}
                        onChange={(e) => handleChange(e)}

                    >
                        {createMenus(bathsArray)}

                    </Select>
            </FormControl>
                </Box>

        </div>
    );
}

export default FindInput;