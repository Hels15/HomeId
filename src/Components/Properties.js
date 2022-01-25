import React, {useState} from 'react';
import Card from "./Home/Card";
import {CardHomeContext} from "./Contexts/ItemListContext";
function Properties(props) {
    const [properties, setProperties] = useState(0)

    const info = props.info
    const setInfo = props.setInfo

    return (
         <div className="properties">
                <div className="found-section">
                    <div className="found">
                        <p>We found <span style={{color: "#0EC6D5"}}>{properties}</span> properties available for you </p>
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