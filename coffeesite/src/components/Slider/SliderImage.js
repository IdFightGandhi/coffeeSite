import React from 'react';
import { SliderHeader, SliderImgBtn, Image } from './Slider.elements';
export const SliderImages = (props) => {


    return (
        <div style={{ "position": "relative" }}>
            <SliderHeader>{props.headerTitle}</SliderHeader>
            <SliderImgBtn>{props.btnText}</SliderImgBtn>
            <Image {...props} />
        </div>
    )
}