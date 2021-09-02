import React, { useState } from 'react';
import { CarouselData } from './CarouselData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const CarouselSlider = ({ slides }) => {
    // set our state
    const [current, setCurrent] = useState(0)
    const length = slides.length


    return (
        <div>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" />
                <FaArrowAltCircleRight className="right-arrow" />
            {CarouselData.map((slide, index) => {
                return <img src={slide.image} alt='testing' />;
            })}
         </section>
        </div>
    )
}

export default CarouselSlider;