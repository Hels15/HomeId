import React, {useState} from 'react';
import Card from "./Home/Card";

function Properties(props) {
    const [properties, setProperties] = useState(10)

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
                <Card info={info} setInfo={setInfo}/>

            </div>
    );
}

export default Properties;