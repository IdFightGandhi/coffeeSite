import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import CarouselData from './CarouselData';

export const Carousel = () => {
    const getWidth = () => window.innerWidth;

    const [state, setState] = useState({
        translate: 0,
        transition: 0.45
    })

    const { translate, transition } = state;
    return (
        <div css={SliderCSS}>
            <CarouselData 
            translate={translate}
            transition={transition}
            width={getWidth()}
            />
        </div>
    )
}

const SliderCSS = css`
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
`