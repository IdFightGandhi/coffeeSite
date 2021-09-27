import React from "react";
import Slider from "react-slick";
// css styling sheet
import './index.css';
// settings for slider
import { sliderSettings } from './Settings';
// components
import { SliderImages } from './SliderImage';
import { SliderDetails } from "./SliderDetails";


export const LandingSlider = () => {

    // I have slider details stored in Slider Details so we can easily update them when needed. Then we map through here and put them into the slider
    const details = SliderDetails.map((deets) => {
        // console.log(deets)
        return (
            <SliderImages
                headerTitle={deets.headerTitle}
                src={deets.src}
                alt={deets.alt}
                btnText={deets.btnText}
                key={deets.btnText}
            />
        )
    })

    return (
        <div>
            <Slider {...sliderSettings}>
                {details}
            </Slider>
        </div>
    );

}