import './Carousel.css';
import React, { useState } from 'react';
import { CarouselData } from './CarouselData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const CarouselSlider = ({ slides }) => {
    // set our state
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    // Function - current slide THEN ? reset to 0 ELSE : set it to current + 1
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    //shows which number in the image array that we are at
    console.log(current)
    // FUNCTION if current is 0 THEN ? set length to be -1 ELSE : set current to subtract 1
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // If we have no data or an array, then it won't return anything - but we will always have data (catch if statement)
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {CarouselData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} alt={slide.alt} className="slider-image" />)}
                            ;
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default CarouselSlider;