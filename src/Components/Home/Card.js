import React, {useContext} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import info from "../FindInput"
import {CardHomeContext} from "../Contexts/ItemListContext";

import ItemCard from "./ItemCard";
function Card(props) {
    const {card_list} = useContext(CardHomeContext)
    const info = props.info
    const setInfo = props.setInfo

    const filteredRooms =  card_list.filter(data => (info.beds === "" || info.beds === data.beds) && (info.baths === "" || info.baths === data.baths) && (info.type === "" || info.type === data.type) &&  ( info.location === "" || info.location === data.city))
    //console.log(filteredRooms.length)
    return (
        <div>

            {filteredRooms.map(data => <ItemCard data={data}/>)}
        </div>
    );
}

export default Card;