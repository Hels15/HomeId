import React, {useState} from 'react';
import Card from "./Home/Card";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Properties(props) {
    const [properties, setProperties] = useState(0)

    const info = props.info
    const setInfo = props.setInfo
    const data = props.data
    return (
         <div className="properties">
                <div className="found-section">
                    <div className="found">
                        <p>{data.bellow_text}<span style={{color: "#0EC6D5"}}>{properties}</span>{data.after_text}</p>
                    </div>
                    <div className="sort-by">
                        <ToggleButtonGroup style={{}}>
                            <ToggleButton value="list">
                                 <ViewListIcon />
                                 <h1 style={{fontSize: "10px"}}>List</h1>
                            </ToggleButton>
                            <ToggleButton value="module">
                                <ViewModuleIcon/>
                                <h1 style={{fontSize: "10px"}}>Grid</h1>
                            </ToggleButton>

                        </ToggleButtonGroup>
                    </div>
                </div>
                <Card info={info} setInfo={setInfo} properties={properties} setProperties={setProperties}/>

            </div>
    );
}

export default Properties;