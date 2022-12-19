import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Swiper.module.css'
import 'swiper/css';
import { Navigation } from 'swiper';
import { Icon } from '@iconify/react';

interface SwiperProps {
  slides?: string[]
}
export default ({ slides }: SwiperProps) => {
  const swiper = useSwiper();
  if (!slides) {
    return <></>
  }
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={4}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev"
        }
        }
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          slides.map((item, index) => <SwiperSlide key={index + item}><img src={item} alt="" className={styles.slide}></img></SwiperSlide>)
        }

      </Swiper>
      <div className="button-next"><Icon width="35" height="35" icon="material-symbols:chevron-right" /></div>
      <div className="button-prev"><Icon width="35" height="35" icon="material-symbols:chevron-right" rotate={2} /></div>
    </div >
  );
};

