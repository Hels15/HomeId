import React, {useEffect, useState}from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import logo from "../Images/logo_black_primary.png"
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import LanguageIcon from '@mui/icons-material/Language';

function MenuHeaderItem({item_data, onClick}){

    const [menu_list, set_menu_list] = useState([])



    return <Link   className="menu-item"  to={`categories/${item_data.title}`}>
        {item_data.title}
        {
            item_data.items && <i className="fas fa-angle-down"></i>
        }
        <div className="popup-container">
             {
            item_data.items && <div  className="popup-menu">

                {

                    item_data.items.map(i => <Link to={`/categories/${item_data.title}/${i}`} key={i} className="menu-item popup-item">{i}</Link>)
                }
            </div>
        }
        </div>

    </Link>
}

function Menu(){
    const [menu_list, set_menu_list] = useState([])

     useEffect(() =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/categories`
        }).then(res => set_menu_list(res.data))
    }, [])




    return(
        <div className="menu" >

            {
                menu_list.map(item_data => <MenuHeaderItem  key={item_data.id} item_data={item_data} />)
            }
        </div>
    )

}

function Header(item_data) {
    const [input_label_text, set_input_label_text] = useState("Test")
    const [input_label_icon, set_input_label_icon] = useState(true)
    const [input_label_subtitle, set_input_label_subtitle] = useState(false)
    const [input_language, set_input_language] = useState("")
    const handleSelectValue = (e) =>{
        set_input_language(e.target.value)
        set_input_label_text("")
        set_input_label_icon("none")
        set_input_label_subtitle(true)
    }
    const handleLanguages = (lang) =>{
        set_input_language(lang)
    }
    return (
       <div className="header-container">
           <div className="content-base">
                <div className="test-header">
                    <img src={logo} alt=""/>
                    <div><Menu/></div>
                    <FormControl sx={{ "&:hover":{
                        filter:"drop-shadow(10px, 10px, 10px, black)"
                        }}}>

                        <InputLabel shrink="true" sx={{top: "45px", fontSize: "20px"}}>
                            {input_label_text}
                            <LanguageIcon  sx={{width: "auto",marginLeft: "4px",display: input_label_icon}}/>
                        </InputLabel>
                        <Select  onChange={(e) => handleSelectValue(e)} sx={{width: "100px", borderRadius: "10px", marginTop: '20px'

                            }}>
                            <MenuItem  value="hu">hu</MenuItem>
                            <MenuItem  value="en">en</MenuItem>

                        </Select>
                        <p style={{display:input_label_subtitle? "block": "none", filter: "drop-shadow(5px 5px 2px rgba(0,0,0, 0.1))"}}>Selected language <span style={{color: "#4491b8", fontWeight:"700"}}>{input_language}</span> </p>
                    </FormControl>

                </div>
           </div>
       </div>

    );
}

export default Header;