import React, {createContext, useEffect, useState} from "react";
import axios from "axios";


export const CardHomeContext = createContext(true)

export const CardHomeProvider = (props) => {
    const [home_list, set_home_list] = useState([])
    const [card_list, set_card_list] = useState([])

    const fetch_grid_list = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/slider/`
        }).then(res => set_home_list(res.data))
    }
    const fetch_card_list = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/cards/`
        }).then(res => set_card_list(res.data))
    }


    useEffect( () =>{
        fetch_card_list()
    }, [])

    useEffect(() =>{
        fetch_grid_list()
    },[])

    return(
        <CardHomeContext.Provider value={{
            home_list: home_list,
            card_list: card_list,
        }}>
            {props.children}
        </CardHomeContext.Provider>
    )
}
