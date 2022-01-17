import React, {useContext, useEffect, useState} from 'react';
import {CardHomeContext} from "../Contexts/ItemListContext"
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box'
import RadioGroup from '@mui/material/RadioGroup';

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

    return (
        <div className="slider-container">
            <div className="items-flex">
                <div className="actions">
                <i className="fas fa-chevron-left left-step-button" onClick={e => step_action(-1)}/>
                <i className="fas fa-chevron-right right-step-button" onClick={e => step_action(1)}/>
            </div>
            <div className="featured-Item-text">
                <h1 className="Featured-Item">Featured Properties</h1>
            </div>
            </div>

            <div className="image-container">
                <div className="slider-image-container">
                     {
                    home_slider_list.map((item, index)=> <img key={item.id} className={`slider-image ${current_index === index? "active": ""}`} src={item.image} alt=""/> )
                }
                </div>

            </div>
            <RadioGroup>

            </RadioGroup>

                <RadioGroup  className="RadioGroup" row >
                    <Radio checked={current_index === 0}>

                    </Radio>
                    <Radio checked={current_index === 1} onChange={event => event.target.value}>

                    </Radio>
                    <Radio checked={current_index === 2}>

                    </Radio>
                </RadioGroup>



        </div>
    );
}

export default ImageSlider;