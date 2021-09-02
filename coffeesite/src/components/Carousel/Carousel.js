import React from 'react';
import { CarouselData } from './CarouselData';

const CarouselSlider = () => {
    return (
        <div>
            <>
            {CarouselData.map((slide, index) => {
                return <img src={slide.image} alt='testing' />;
            })}
         </>
        </div>
    )
}

export default CarouselSlider;