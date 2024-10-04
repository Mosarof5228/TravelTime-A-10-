import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";
import "./styles.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Install Swiper modules


const Slider = () => {
    SwiperCore.use([Autoplay, Navigation, Pagination]);
    return (
        <>
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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
