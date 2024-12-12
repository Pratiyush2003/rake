import InteractiveSlider from '@/InteractiveSlider';
import { casinosection } from './constant';
import { playicon } from '@/assets/images/casinolobby';

const Favourites = () => {
  const totalcount = 1;
  return (
    <>
      {totalcount < 1 ? (
        <div className='text-sm text-rake_grey-300'>
          <div>No Favorites Yet</div>
          <div>
            Looks like you haven’t favorited any games yet. Browse our selection
            and hit the star icon on any game to add it to your favorites for
            quick access! 
          </div>
        </div>
      ) : (
        <InteractiveSlider
          topicdata={[casinosection[6]]}
          count={totalcount}
          cardclasses='h-52 transform bg-cover bg-center transition-transform duration-300 hover:-translate-y-4 lg:h-56'
          icon={playicon}
          carouselclasses='mt-4'
          showiconclasses='inset-0 hidden items-center justify-center text-center group-hover:flex'
          cardimageclasses='https://assets.rake.com/dice/img/Rectangle%201dice_game.svg'
          cardhoverclasses='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-25'
          carouselitemclasses='basis-40 pl-1 md:basis-1/4 lg:basis-1/6 xl:basis-48 '
          livesectionclassess='hidden'
          carouselbuttonclasses='hidden'
        />
      )}
    </>
  );
};

export default Favourites;
