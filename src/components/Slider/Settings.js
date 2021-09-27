export const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        draggable: true,
        autoplaySpeed: 5000,
        // sets a breakpoint for when screen size is reduced
        responsive: [
                {
                        breakpoint: 1200,
                        settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                        }
                },
                {
                        breakpoint: 1008,
                        settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                        }
                },
                {
                        breakpoint: 800,
                        settings: "unslick"
                }

        ]
};