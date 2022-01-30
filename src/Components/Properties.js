import React, {useState} from 'react';
import Card from "./Home/Card";
import {CardHomeContext} from "./Contexts/ItemListContext";
function Properties(props) {
    const [properties, setProperties] = useState(0)

    const info = props.info
    const setInfo = props.setInfo
    const data = props.data
    return (
         <div className="properties">
                <div className="found-section">
                    <div className="found">
                        <p>{data.bellow_text}<span style={{color: "#0EC6D5"}}>{properties}</span>{data.after_text}</p>
                    </div>
                    <div className="sort-by">
                        <p>Sort By</p>
                    </div>
                </div>
                <Card info={info} setInfo={setInfo} properties={properties} setProperties={setProperties}/>

            </div>
    );
}

export default Properties;