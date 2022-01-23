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

    return (
        <div>
            {card_list.map( data => <ItemCard key={data.id} data={data}/>)}

        </div>
    );
}

export default Card;