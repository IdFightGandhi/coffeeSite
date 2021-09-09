import Slider from "react-slick";
import { SliderImgBtn } from './Slider.elements';
import { sliderSettings } from './Settings';
import { SliderImages } from './SliderImage';

export const LandingSlider = () => {

    return (
        <div>
            <Slider {...sliderSettings}>

                <SliderImages
                    headerTitle="Really Good Chioto Coffee"
                    src="https://www.acouplecooks.com/wp-content/uploads/2021/05/Latte-Art-069.jpg"
                    alt="image of coffee goods"
                    btnText="Discover More"
                />
                <SliderImages
                    headerTitle="Really Good Chioto Coffee"
                    src="https://www.acouplecooks.com/wp-content/uploads/2020/10/How-to-make-an-Americano-004.jpg"
                    alt="image of coffee goods"
                    btnText="Discover More"
                />
                <SliderImages
                    headerTitle="Really Good Chioto Coffee"
                    src="https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-a-macchiato-003.jpg"
                    alt="image of coffee goods"
                    btnText="Discover More"
                />
                <SliderImages
                    headerTitle="Really Good Chioto Coffee"
                    src="https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg"
                    alt="image of coffee goods"
                    btnText="Discover More"
                />
                <SliderImages
                    headerTitle="Really Good Chioto Coffee"
                    src="https://www.acouplecooks.com/wp-content/uploads/2021/04/Flat-White-003-1.jpg"
                    alt="image of coffee goods"
                    btnText="Discover More"
                />
                <SliderImages
                    headerTitle="Really Good Chioto Coffee"
                    src="https://www.acouplecooks.com/wp-content/uploads/2021/08/Cortado-004.jpg"
                    alt="image of coffee goods"
                    btnText="Discover More"
                />
            </Slider>
        </div>
    );

}