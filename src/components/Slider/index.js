import React from "react";
import Slider from "react-slick";
// css styling sheet
import './index.css';
// settings for slider
import { SliderSettings } from './Settings';
import { SliderDetails } from '../Slider/SliderDetails'
import { SliderImages } from '../Slider/SliderImage'

export const LandingSlider = () => {

    // I have slider details stored in Slider Details so we can easily update them when needed. Then we map through here and put them into the slider
    const details = SliderDetails.map((deets) => {
        // console.log(deets)
        return (
            <SliderImages
                headerTitle={deets.headerTitle}
                smallText={deets.smallText}
                src={deets.src}
                alt={deets.alt}
                btnText={deets.btnText}
                key={deets.btnText}
            />
        )
    });

    return (
        <div>
            <Slider {...SliderSettings}>
                {details}
            </Slider>
        </div>
    );

};