import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
    return (
        <div className="w-[100%] mt-[-20px]" style={{ width: '100%', height: '500px' }}> {/* Ensure parent has size */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]} // Use Swiper modules
                className="mySwiper"
            >
                <SwiperSlide className="w-full">
                    <img className="w-[100%]" src="/src/assets/3.jpeg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/src/assets/4.jpeg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/src/assets/travel time second logo.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/src/assets/travel time second logo.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/src/assets/travel time second logo.png" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;
