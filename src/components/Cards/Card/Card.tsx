import { useAppStore } from '../../../stores/useAppStore';
import { ViewDetails } from '../ViewDetails/ViewDetails';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { HeartIcon } from '@heroicons/react/24/solid';
import 'swiper/swiper-bundle.css';


import './_Card.scss';



export const Cards = () => {

  const recipes = useAppStore((state) => state.recipes);

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }} 
      spaceBetween={30}
      
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 1
      }}
      modules={[EffectCoverflow]}
      >

      { 
         recipes!.results.map(recipe => (
          <SwiperSlide key={recipe.id} className="card">
            <div className='card__img'>
              <img src={`${recipe.image}`} alt={recipe.title} loading='lazy' />
            </div>
            <div className='card__info'>
              
              <p>{recipe.dishTypes[0]}</p>
              <button>
                <HeartIcon width={20} className={true ? 'card__heartActive' : 'card__heartFalse'} />
              </button>
              <h3>{recipe.title}</h3>
              <p>{recipe.readyInMinutes} mins</p>

              <ViewDetails text={true} id={recipe.id} />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
    
  );
};
