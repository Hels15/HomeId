import React, {useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
    const [personName, setPersonName] = useState();

    const handleChange = (event) =>{
        const {
            target: {value}
        } = event;

        setPersonName(
            typeof  value === "string" ? value.split(",") : value,
        )
    }



    return (
        <div>
         <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </div>
    );
}

export default OtherFeatures;