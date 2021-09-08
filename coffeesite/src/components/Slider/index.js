import Slider from "react-slick";
import { SliderBox } from './Slider.elements';
import { sliderSettings } from './Settings';

export const LandingSlider = () => {

    return (
        <SliderBox>
            <Slider {...sliderSettings}>
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
        </SliderBox>
    );
}