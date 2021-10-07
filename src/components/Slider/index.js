import React from "react";
import Slider from "react-slick";
// css styling sheet
import './index.css';
// settings for slider
import { sliderSettings } from './Settings';
import coffeecup from '../../images/coffeecup2.jpeg'
import coffeedrinker from '../../images/coffeedrinker.jpeg'
import coffeemachine from '../../images/coffeemachine.jpeg'
import {SliderDetails} from '../Slider/SliderDetails'
import {SliderImages} from '../Slider/SliderImage'

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
                <div>
                    <img src={coffeecup} />
                    <p>Here is a random word about some coffee stuff!</p>
                    <button>Click here for blah blah</button>
                </div>
                <div>
                    <img src={coffeedrinker} />
                    <p>Here is a random word about some coffee stuff!</p>
                    <button>Click here for blah blah</button>
                </div>
                <div>
                    <img src={coffeemachine} />
                    <p>Here is a random word about some coffee stuff!</p>
                    <button>Click here for blah blah</button>
                </div>
                <div>
                    <h1>IMAGE</h1>
                    <p>Here is a random word about some coffee stuff!</p>
                    <button>Click here for blah blah</button>
                </div>
                <div>
                    <h1>IMAGE</h1>
                    <p>Here is a random word about some coffee stuff!</p>
                    <button>Click here for blah blah</button>
                </div>
                <div>
                    <h1>IMAGE</h1>
                    <p>Here is a random word about some coffee stuff!</p>
                    <button>Click here for blah blah</button>
                </div>
            </Slider>
        </div>
    );

}