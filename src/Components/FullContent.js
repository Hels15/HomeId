import React, {useState} from 'react';
import Content from "./FindYourHome";
import ImageSlider from "./Home/ImageSlider";
import Properties from "./Properties";
import FindYourHome from "./FindYourHome";

function FullContent(props) {

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
                    <Properties info={info} setInfo={setInfo}/>
                </div>


            </div>

            <br/>


        </div>
    );
}

export default FullContent;