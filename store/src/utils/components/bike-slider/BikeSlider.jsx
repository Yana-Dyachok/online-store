import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import BikeCard from '../bike-card/BikeCard';
import bikes from '../../mockAPI/bike-data';

import 'swiper/css';
import 'swiper/css/navigation';
import './_bike-slider.scss';

const BikeSlider = () => {
    // const [bikes, setBikes] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch(
    //                 '../src/utils/components/bike-slider/bike-data.json'
    //             ); // проблема із шляхом?
    //             const data = await res.json();
    //             setBikes(data.bikes);
    //         } catch (err) {
    //             console.error('Error data', err);
    //         }
    //     };

    //     fetchData();
    // }, []);
    return (
        <section className="bike-slider">
            <div className="bike-slider__inner container">
                <h3 className="bike-slider__title title">Рекомендації</h3>
                <div className="bike-slider__wrapper">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.bike-slider__btn--next',
                            prevEl: '.bike-slider__btn--prev',
                        }}
                        spaceBetween={5}
                        slidesPerView={4}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {bikes.map((bike) => (
                            <SwiperSlide key={bike.id}>
                                <div className="bike-slider__item">
                                    <BikeCard bike={bike} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default BikeSlider;