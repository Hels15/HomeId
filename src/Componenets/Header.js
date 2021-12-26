import React, {useEffect, useState}from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import logo from "../Images/logo_black_primary.png"




function ButtonEvent(e){
    e.stopPropagation()
}

function MenuItem({item_data}){
    const [grid_gap, set_grid_gap] = useState(false)
    const [menu_list, set_menu_list] = useState([])

     useEffect(() =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/categories`
        }).then(({ data }) => {
          const shouldHaveGripGap = data.some(({ id }) => id === 5)
          set_grid_gap(shouldHaveGripGap)
          set_menu_list(data)
        })
    }, [])



    return <Link  className="menu-item" id="data-dropdown"  to={`categories/${item_data.title}`} >
        {item_data.title}
        {
            item_data.items && <i className="fas fa-angle-down"></i>
        }
        {
            item_data.items && <div id="popup" className="popup-menu">
                {
                    item_data.items.map(i => <Link to={`/categories/${item_data.title}/${i}`} key={i}  className="menu-item popup-item">{i}</Link>)
                }
            </div>
        }
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
                menu_list.map(item_data => <MenuItem key={item_data.id} item_data={item_data}/>)
            }
        </div>
    )

}

function Header(props) {
    return (
       <div className="content-base header-container">
               <div className="img"><img src={logo} alt=""/></div>
               <div className=""><Menu/></div>


       </div>
    );
}

export default Header;