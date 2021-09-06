import React from 'react';
import Carousel from 'react-elastic-carousel';
import Image from './Image';
import ImageData from './ImageData';

//these breakpoints have the image reach according to the size of the screen
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];





export const Slideshow = () => {

    const Data = ImageData.map((slide,index) => {
       
        return (
            <img src={slide.image} alt={slide.alt} key={slide.image}></img>
        )
    })
    console.log(Data)

    return (
        <div>
        <h1 style={{ textAlign: "center"}}>Example</h1>
        
        <div className="carousel">
            <Carousel breakPoints={breakPoints} enableAutoPlay='true' autoPlaySpeed='3500'>
                
                <Image>{Data[0]}</Image>
                <Image>{Data[1]}</Image>
                <Image>{Data[2]}</Image>
                <Image>{Data[3]}</Image>
                <Image>{Data[4]}</Image>
                <Image>{Data[5]}</Image>
                <Image>{Data[6]}</Image>
                <Image>{Data[7]}</Image>
            </Carousel>
        </div>
        </div>
    )
};