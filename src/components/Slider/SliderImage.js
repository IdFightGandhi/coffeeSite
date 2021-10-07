import React from 'react';
// packages
import { Fade } from 'react-awesome-reveal';

export const SliderImages = (props) => {
    return (
        <div className="banner-wrapper">
            <Fade className="slider-header-wrapper" triggerOnce={true} delay={1250} cascade={true}>

                <Fade cascade={true} delay={1250}>

                    <h1 className="slider-header">{props.headerTitle}</h1>
                    <p className="slider-text">{props.smallText}</p>
                </Fade>

            </Fade>
            <Fade className="slider-button-wrapper" triggerOnce={true} delay={1000} duration={500}>
                <button>{props.btnText}</button>
            </Fade>
            <img {...props} />
        </div>
    )
}