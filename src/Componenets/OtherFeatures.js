import React, {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';


const names = [
  'Air Conditioning',
  'Laundry',
  'Refrigerator',
  'Washer',
  'Barbeque',
  'Lawn',
  'Sauna',
  'Wifi',
  'Dryer',
  'Microwave',
   "Swimming Pool",
   "Window Coverings",
    "Gym",
    "Outdoor Shower",
    "Tv Cable",
];




function OtherFeatures(props) {
    const [opacity, set_opacity] = useState(0)
    const [display, set_display] = useState("none")
    const [visibility, set_visibility] = useState("hidden")
    const [checked, setChecked] = useState(false)

    const handleClick = (event) => {
        if(display === "none"){
            set_display(true)
        }
        else{
            set_display("none")
        }
        }


        return (
        <div>
            <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"

            onClick={handleClick}
            startIcon={<AddIcon/>}

            >
                Other Features
            </Button>

            {names.map((name) => (
            <MenuItem style={{display: display}} className="my-custom-checkbox" key={name} value={name}>
              <Checkbox sx={{
                  position: 'relative',
                 '& .PrivateSwitchBase-input':{
                      position: 'absolute'
                 },
                  '& .MuiSvgIcon-root': {
                      position: 'absolute'
                  },
                  paddingRight: "30px",
                  transform: "scale(1.3)"
              }} className="checkbox"/>
              <ListItemText sx={{fontSize: "30px", '& .MuiTypography-root' :{
               fontSize: "20px"}}} primary={name} />
            </MenuItem>

          ))}
            <h2>Hi</h2>

        </div>)

    }









export default OtherFeatures;