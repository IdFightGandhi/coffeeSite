import React from 'react';
import Carousel from 'react-elastic-carousel';
import Image from './Image';

//these breakpoints have the image reach according to the size of the screen
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

export const Slideshow = () => {
    return (
        <div>
        <h1 style={{ textAlign: "center"}}>Example</h1>
        <div className="carousel">
            <Carousel breakPoints={breakPoints} enableAutoPlay='true' autoPlaySpeed='2000'>
                <Image>One</Image>
                <Image>Two</Image>
                <Image>Three</Image>
                <Image>Four</Image>
                <Image>Five</Image>
                <Image>Six</Image>
                <Image>Seven</Image>
                <Image>Eight</Image>
            </Carousel>
        </div>
        </div>
    )
};