import React, {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';

function OtherFeatures(props) {
    const [display, set_display] = useState("none")

    const data = props.data

    const names = data.items


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
                {data.title}
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

        </div>)

    }

export default OtherFeatures;