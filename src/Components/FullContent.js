import React, {useContext, useState} from 'react';
import ImageSlider from "./Home/ImageSlider";
import Properties from "./Properties";
import FindYourHome from "./FindYourHome";
import {CardHomeContext} from "./Contexts/ItemListContext";

function FullContent(props) {
    const {properties} = useContext(CardHomeContext)
     const [info, setInfo] = useState({
       city: "",
       beds: "",
       type: "",
       status: "",
       baths: ""
   })

    return (
        <div className="full-content">
            <div className="home-content">
                <div className="content-base">

                         <FindYourHome info={info} setInfo={setInfo}/>

                     <div className="full-content-image-slider">
                        <ImageSlider/>
                    </div>
                </div>
                <div>
                    {
                        properties.map(data =>  <Properties info={info} setInfo={setInfo} data={data}/>)
                    }

                </div>


            </div>

            <br/>


        </div>
    );
}

export default FullContent;