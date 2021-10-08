import React from "react";
// packages
import ImageGallery from "react-image-gallery";

// styles
import './index.css';


// images to be used
import coffeecup from '../../images/coffeecup2.jpeg';
import coffeedrinker from '../../images/coffeedrinker.jpeg';
import coffeemachine from '../../images/coffeemachine.jpeg';


export const Carousel = () => {

    const items = [
        {
            original: {coffeecup}
        }
    ]

    return (
        <div>
            <ImageGallery className="image-gallery" items={items} />

        </div>
    );

};