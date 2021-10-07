export const sliderSettings = {
        dots: false,
<<<<<<< HEAD
        infinite: false,
        speed: 1000,
=======
        infinite: true,
        speed: 5000,
>>>>>>> 89ead648ac51c2960bcad32d4c573337fa67c9e1
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