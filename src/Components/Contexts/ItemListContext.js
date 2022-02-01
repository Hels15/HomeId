import React, {createContext, useEffect, useState} from "react";
import axios from "axios";


export const CardHomeContext = createContext(true)

export const CardHomeProvider = (props) => {
    const [home_list, set_home_list] = useState([])
    const [card_list, set_card_list] = useState([])
    const [header_bottom, set_header_bottom] = useState([])
    const [find_your_home, set_find_your_home] = useState([])
    const [other_features, set_other_features] = useState([])
    const [find_input, set_find_input] = useState([])
    const [properties, set_properties] = useState([])
    const [sort_by, set_sort_by] = useState([])
    const [footer, set_footer] = useState([])
    const [slider_content, set_slider_content] = useState([])

    const fetch_slider_content = () =>{
        axios({
            method: "get",
            url:`${process.env.REACT_APP_API_UR}/slider_content/`
        }).then(res => set_slider_content(res.data))
    }
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

    const fetch_header_bottom = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/header-bottom/`
        }).then(res => set_header_bottom(res.data))
    }
     const fetch_find_your_home = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/find-your-home/`
        }).then(res => set_find_your_home(res.data))
    }
     const fetch_other_features = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/other-features/`
        }).then(res => set_other_features(res.data))
    }

     const fetch_find_input = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/find-input/`
        }).then(res => set_find_input(res.data))
    }
    const fetch_properties = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/properties/`
        }).then(res => set_properties(res.data))
    }

    const fetch_sort_by = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/sort-by/`
        }).then(res => set_sort_by(res.data))
    }
    const fetch_footer = () =>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_UR}/footer/`
        }).then(res => set_footer(res.data))
    }
    useEffect( () =>{
        fetch_card_list()
        fetch_grid_list()
        fetch_header_bottom()
        fetch_find_your_home()
        fetch_other_features()
        fetch_find_input()
        fetch_properties()
        fetch_sort_by()
        fetch_footer()
        fetch_slider_content()
    }, [])


    return(
        <CardHomeContext.Provider value={{
            home_list: home_list,
            card_list: card_list,
            header_bottom:header_bottom,
            find_your_home: find_your_home,
            other_features:other_features,
            find_input: find_input,
            properties: properties,
            sort_by:sort_by,
            footer:footer,
            slider_content: slider_content
        }}>
            {props.children}
        </CardHomeContext.Provider>
    )
}
