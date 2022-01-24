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
    const [current_index, set_current_index] = useState(0)
    const [home_slider_list, set_home_slider_list] = useState([])

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

    useEffect(() => {
        fetch_slider_list()
    }, [home_list])

    const handlechange = (num) => {
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
                <h1 className="Featured-Item">Featured Properties</h1>
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
                    <button className="button orange">FEATURED</button>
                    <button className="button purple">FOR RENT</button>
                </div>
                 <div className="content">
                     <p className="Villa">Villa on Hollywood Boulevard</p>
                     <p className="San-Predro">14212 San Predro St, Los Angeles</p>
                     <p className="price"><span style={{fontWeight:"600"}}>$2500</span>/month</p>
                 </div>
                </div>

            </div>
            <RadioGroup>

            </RadioGroup>

                <RadioGroup  className="RadioGroup" row >
                    <Radio sx={{color:"#333",
                        '& .MuiSvgIcon-root':{fontSize: 20},
                        '&.Mui-checked':{color: "#333"
                        }}} checked={current_index === 0} onChange={e => handlechange(0)}>

                    </Radio >
                    <Radio sx={{color:"#333",
                        '& .MuiSvgIcon-root':{fontSize: 20},
                        '&.Mui-checked':{
                        color: "#333"
                        }}} checked={current_index === 1} onChange={e => handlechange(1)}>

                    </Radio>
                    <Radio sx={{color:"#333",
                        '& .MuiSvgIcon-root':{fontSize: 20},
                        '&.Mui-checked':{
                        color: "#333"
                        }}}checked={current_index === 2} onChange={e => handlechange(2)}>

                    </Radio>
                </RadioGroup>

        </div>
    );
}

export default ImageSlider;