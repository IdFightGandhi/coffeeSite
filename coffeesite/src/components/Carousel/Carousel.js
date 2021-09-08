import React from 'react';
import Carousel from 'react-elastic-carousel';
import Image from './Image';
import ImageData from './ImageData';
import './index.css';

// Breakpoints that act as Media Queries for screen size
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
];

export const Slideshow = () => {
    const Data = ImageData.map((slide, index) => {
        return (
            <Image key={slide.key}>
                <img src={slide.image} alt={slide.alt} key={slide.key} />
            </Image>
        )
    });

    return (
        <div>
            <div>
                <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={5000}>
                    {Data}
                </Carousel>
            </div>
        </div>
    )
};