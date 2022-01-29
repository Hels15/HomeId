import React, {useContext} from 'react';
import {CardHomeContext} from "../Contexts/ItemListContext";
import ItemCard from "./ItemCard";

function Card(props) {
    const {card_list} = useContext(CardHomeContext)

    const info = props.info
    const setInfo = props.setInfo

    const properties = props.properties
    const setProperties = props.setProperties

    const filteredRooms =  card_list.filter(data => (info.beds === "" || info.beds === data.beds) && (info.baths === "" || info.baths === data.baths) && (info.type === "" || info.type === data.type) &&  ( info.city === "" || info.city === data.location) && (info.status === "" || info.status.replace(/\s/g, "") === data.forSale))


    return (
        <div>

            {filteredRooms.map(data => <ItemCard data={data}/>)}
            {setProperties(filteredRooms.length)}
        </div>
    );
}

export default Card;