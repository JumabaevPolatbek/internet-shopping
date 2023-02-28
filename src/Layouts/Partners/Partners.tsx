import './Partners.scss';
import { v4 as uuid } from 'uuid';
import Slider from 'react-slick';

function Partners() {

    const settings = {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 6,
        speed: 1000,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                },
            }
        ],
    };


    const renderSlides = [1, 2, 3, 4, 5, 6, 7, 8].map((partnerNumber: number) =>
        <img src={`./images/partners/partner${partnerNumber}.png`} key={uuid()} alt={`partner${partnerNumber}`} />
    )

    return (
        <div className="partners">
            <div className="partner">
                <Slider {...settings}>{renderSlides}</Slider>
            </div>
        </div>
    )
}

export default Partners;