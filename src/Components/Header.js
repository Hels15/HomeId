import React, {useEffect, useState}from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import logo from "../Images/logo_black_primary.png"

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


import {useTranslation} from "react-i18next"
import i18next from 'i18next'

function MenuHeaderItem({item_data, onClick}){
     const { t } = useTranslation()
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
                   item_data.items.map((i, index) => <Link to={`/categories/${t(`categories.${index}.title`)}/${i}`} key={i} className="menu-item popup-item">{i}</Link>)
                }
            </div>
        }
        </div>

    </Link>
}

function HeaderMenu(){
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

    const [input_label_text, set_input_label_text] = useState("lang")
    const [input_label_icon, set_input_label_icon] = useState(true)
    const [input_label_subtitle, set_input_label_subtitle] = useState(false)
    const [input_language, set_input_language] = useState("")
    const [languages_display, set_languages_display] = useState(true)
    const [lang, set_lang] = useState("")



    const handleOnChange = (item) =>{

        if (item === "hu"){
            set_lang("hu")
        }
        if (item === "en"){
            set_lang("en")
        }

    }

    return (
       <div className="header-container">
           <div className="content-base">
                <div className="test-header">
                    <img src={logo} alt=""/>
                    <div><HeaderMenu/></div>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                        <React.Fragment>
                                <Button  sx={{width: "100px", margin:"10px",height: "50px", fontSize: "10px"}} variant="contained" {...bindTrigger(popupState)}>
                                <div className="popup-text">Languages</div>
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={() => {popupState.close(); i18next.changeLanguage("hu")}}>Hungarian</MenuItem>
                                <MenuItem  onClick={() => {popupState.close(); i18next.changeLanguage("en")}}>English</MenuItem>

                                </Menu>
                            </React.Fragment>)}
    </PopupState>

                </div>
           </div>
       </div>

    );
}

export default Header;