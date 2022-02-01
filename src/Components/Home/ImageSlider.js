import React, {useContext, useEffect, useState} from 'react';
import {CardHomeContext} from "../Contexts/ItemListContext"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const FeaturedItemtext = {
    fontSize: "10px"
}

const WrapperStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };



const Arrows = {
    fontSize: "30px",
     cursor: "pointer",
    color: "rgba(0, 0, 0, 0.33)",
  };


function ImageSlider(props) {
    const {home_list} = useContext(CardHomeContext)
    const {slider_content} = useContext(CardHomeContext)
    const [current_index, set_current_index] = useState(0)
    const [home_slider_list, set_home_slider_list] = useState([])
    const [slider_content_title, set_slider_content_title] = useState([])
    const [slider_content_location, set_slider_content_location] = useState([])
    const [slider_content_price, set_slider_content_price] = useState([])

    const step_action = (value) => {
        let _index = current_index
        _index += value

        // if larger
        if(_index > home_slider_list.length - 1 ){
            _index = 0
         // if smaller
        }else if (_index < 0){
           _index =  home_slider_list.length - 1
        }

        set_current_index(_index)
    }
    const fetch_slider_list = () => {
        set_home_slider_list(home_list.filter(item => item.display))
    }
    const fetch_content_title = () => {
        set_slider_content_title(home_list.filter(item => item.title))
    }
    const fetch_content_location = () =>{
        set_slider_content_location(home_list.filter(item => item.location))
    }

    const fetch_content_price = () => {
        set_slider_content_price(home_list.filter(item => item.price))
    }
    useEffect(() => {
        fetch_slider_list()
        fetch_content_title()
        fetch_content_location()
        fetch_content_price()
    }, [home_list])

    const handleChange = (num) => {
     set_current_index(num)
    }
    useEffect(() => {
        console.log(current_index)
    },[current_index])

    return (
        <div className="image-slider-container">
            <div style={WrapperStyles}>
                 <div className="featured-Item-text" style={FeaturedItemtext
                 }>
                <h1 className="Featured-Item">{
                        slider_content.map((data) =>
                            <p>{data.featured_text}</p>
                        )
                }
                </h1>
                </div>

                <div className="actions" style={Arrows}>
                <i className="fas fa-chevron-left left-step-button" onClick={e => step_action(-1)}/>
                <i className="fas fa-chevron-right right-step-button" onClick={e => step_action(1)}/>
                </div>

            </div>

            <div className="image-container">
                <div className="slider-image-container">

                     {
                         home_slider_list.map((item, index)=> <img key={item.id} className={`slider-image ${current_index === index? "active": ""}`} src={item.image} alt=""/> )
                }
                <div className="buttons">
                    <button className="button orange">{
                        slider_content.map((data) =>
                            <p>{data.orange_text}</p>
                        )
                    }</button>
                    <button className="button purple">
                        {
                        slider_content.map((data) =>
                            <p>{data.purple_text}</p>
                        )
                    }
                    </button>
                </div>
                 <div className="content">
                     <p className="Villa">{
                         slider_content_title.map((item, index)=> <p  className={`slider-content-text ${current_index === index? "active": ""}`} key={item.id}>{item.title}</p>)
                     }</p>
                     <p className="San-Predro">
                         {slider_content_location.map((item, index)=> <p className={`slider-content-location ${current_index === index ? "active": ""}`} key={item.id}>{item.location}</p>)}</p>
                     <p className="price"><span style={{fontWeight:"600"}}>{slider_content_price.map((item,index) => <p key={item.id} className={`slider-content-price ${current_index === index ? "active": ""}`}>{item.price}</p>)}</span>{
                          slider_content.map((data) =>
                            <p className="price-text">{data.month_text}</p>
                        )
                     }</p>
                 </div>
                </div>

            </div>
            <RadioGroup>

            </RadioGroup>

                <RadioGroup  className="RadioGroup" row >
                    <Radio sx={{color:"#333",
                        '& .MuiSvgIcon-root':{fontSize: 20},
                        '&.Mui-checked':{color: "#333"
                        }}} checked={current_index === 0} onChange={e => handleChange(0)}>

                    </Radio >
                    <Radio sx={{color:"#333",
                        '& .MuiSvgIcon-root':{fontSize: 20},
                        '&.Mui-checked':{
                        color: "#333"
                        }}} checked={current_index === 1} onChange={e => handleChange(1)}>

                    </Radio>
                    <Radio sx={{color:"#333",
                        '& .MuiSvgIcon-root':{fontSize: 20},
                        '&.Mui-checked':{
                        color: "#333"
                        }}}checked={current_index === 2} onChange={e => handleChange(2)}>

                    </Radio>
                </RadioGroup>

        </div>
    );
}

export default ImageSlider;