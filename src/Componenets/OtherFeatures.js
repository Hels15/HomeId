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
    const [anchorEl, setAnchorEl] = useState()
    const open = Boolean(anchorEl)

    const handleClick = (event) =>{
      setAnchorEl(event.currentTarget)
    };
    const handleClose =  () => {
        setAnchorEl(null)
    }
     return (
        <div>
            <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            startIcon={<AddIcon/>}

            >
                Other Features
            </Button>

            {names.map((name) => (
            <MenuItem style={{marginBottom: 0, margin: 0}} key={name} value={name}>
              <Checkbox />
              <ListItemText primary={name} />
            </MenuItem>
          ))}

        </div>
    );


}




export default OtherFeatures;