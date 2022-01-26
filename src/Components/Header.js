import React, {useEffect, useState}from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import logo from "../Images/logo_black_primary.png"


function MenuItem({item_data, onClick}){

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
                menu_list.map(item_data => <MenuItem  key={item_data.id} item_data={item_data} />)
            }
        </div>
    )

}

function Header(item_data) {

    return (
       <div className="header-container">
           <div className="content-base">
                <div className="test-header">
                    <img src={logo} alt=""/>
                    <div><Menu/></div>
                </div>
           </div>
       </div>

    );
}

export default Header;