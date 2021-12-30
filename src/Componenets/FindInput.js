import React, {useState} from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box'
import PropTypes from 'prop-types';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{

      }}
      {...other}
    >

     </Box>
  );
}

Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func,PropTypes.object, PropTypes.bool]),
        ),
            PropTypes.func,
            PropTypes.object,

    ]),
};


function FindInput(props) {
     //select
    const [city, setCity] = useState("city")
    const [type, setType] = useState("")
    const [status, setStatus] = useState("")
    const [beds, setBeds] = useState("")
    const [baths, setBaths] = useState("")


    const handleString = (object) =>{
        if(typeof str === object){
            return true
        }
        return false
    }
    const handleCity = (event,newValue) =>{
        setCity(event.target.value)
    }
    const handleType = (event ,newValue) => {
        setType(event.target.value)
    }
    const handleStatus = (event ,newValue) => {
        setStatus(event.target.value)
    }
    const handleBeds = (event ,newValue) => {

            setBeds(event.target.value)
    }
    const handleBaths = (event ,newValue) => {
        setBaths(event.target.value)
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
        <div className="form-control">
             <FormControl className="form-control-item">


                    <Select className="select" sx={{width: "250px",paddingRight: "unset",
                        }
                    }

                        id="demo-simple-select-city-id"
                        value={city}
                        onChange={handleCity}

                    >

                        {createMenus(cities)}

                    </Select>
                </FormControl>
                <FormControl>


                    <Select sx={{width: "250px"}}

                        id="demo-simple-select-types-id"
                        value={type}
                        onChange={handleType}

                    >
                        {createMenus(types)}

                    </Select>
                </FormControl>
                 <FormControl>


                    <Select sx={{width: "250px"}}

                        id="demo-simple-select-status-id"
                        value={status}
                        onChange={handleStatus}

                    >
                        {createMenus(statuses)}

                    </Select>
                 </FormControl>
           <div className="flex-form-control">
                 <FormControl >


                    <Select sx={{width: "250px"}}

                        id="demo-simple-select-beds-id"
                        value={beds}
                        onChange={handleBeds}

                    >
                        {createMenus(bedsArray)}

                    </Select>
                 </FormControl>
            <FormControl >


                    <Select sx={{width: "250px"}}

                        id="demo-simple-select-baths-id"
                        value={baths}
                        onChange={handleBaths}

                    >
                        {createMenus(bathsArray)}

                    </Select>
            </FormControl>
            </div>


        </div>
    );
}

export default FindInput;