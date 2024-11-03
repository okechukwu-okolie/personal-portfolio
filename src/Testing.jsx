


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import PortfolioCard from './component/PortfolioCard';


const Testing= () => {
  return (
    <div className="py-4">
    <Swiper
      modules={[Navigation,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{delay:3000}}
    >
      <SwiperSlide> 
            
            <PortfolioCard cardImg={'/nextcent.png'} title='Nexcent Website' description='This is a simple webste done using html and css.' git={"https://okechukwu-okolie.github.io/Nexcent-website/"}/>
      </SwiperSlide>
      <SwiperSlide>
           <PortfolioCard cardImg={'/furniro.png'} title='Furniro Website' description='This is a simple webste done using html and css.' git={"https://okechukwu-okolie.github.io/furniro-furniture-website/"}/>
      </SwiperSlide>
      <SwiperSlide>
            <PortfolioCard cardImg={'/country.png'} title='A map of countries' description='A map of countries, showing details about the country' git={"https://okechukwu-okolie.github.io/mapOfCountries/"}/>
      </SwiperSlide>
      <SwiperSlide>
            <PortfolioCard cardImg={'/kuda.png'} title='kuda home page clone' description='A clone site using react'  vercel={"https://kuda-landing-umuo.vercel.app/"}/>
      </SwiperSlide>
    </Swiper>
    </div>
    
  );
};
export default Testing

