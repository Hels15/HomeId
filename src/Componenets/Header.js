import React, {useEffect, useState}from 'react';
import axios from "axios"

function Header(props) {
    const [menu_list, set_menu_list] = useState([])

    useEffect(() =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/categories`
        }).then(res => set_menu_list(res.data))
    }, [])


    return (
       <div className="header-container">
           <div className="content-base">
              {menu_list.map(item_data => item_data.title)}
           </div>

       </div>
    );
}

export default Header;