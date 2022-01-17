import React from 'react';
import Content from "./Content";
import ImageSlider from "./Home/ImageSlider";

function FullContent(props) {
    return (
        <div className="full-content">
            <Content/>
            <br/>
            <div className="full-content-image-slider content-base">
                <ImageSlider/>
            </div>

        </div>
    );
}

export default FullContent;