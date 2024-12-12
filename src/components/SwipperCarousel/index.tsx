import Autoplay from 'embla-carousel-autoplay';
import { rakeLogo } from '@/assets/images/footer';
import { Card, CardContent } from '@/components/ui/card';
import { casinobannerdata } from '../casinosuites/constant';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const SwipperCarousel = () => {
  return (
    <>
      <Carousel
        className='w-full '
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className='-ml-1 rounded-full '>
          {casinobannerdata.map((ele, index) => (
            <CarouselItem key={index} className='w-full p-1'>
              <div>
                <Card className="w-full rounded-2xl">
                  <CardContent className="h-full md:h-[35rem] lg:h-[17rem] rounded-2xl overflow-hidden flex flex-col lg:flex-row">

                    <div className="flex flex-col items-center w-full h-60 lg:w-[50%] mt-0 lg:mt-4 p-4">
                      <div>
                        <img src={rakeLogo} alt="rake logo" />
                      </div>
                      <div className='h-24'>
                        <div className="my-2 font-mulish text-2xl font-bold text-center select-none">
                          {ele.slidetitle}
                        </div>
                        <div className='text-rake_blue-500 font-mulish text-2xl  text-center font-bold select-none'>
                          {ele.slidesubtitle}
                        </div>
                      </div>

                      <div className=' lg:mb-3  mt-6'>
                        <Link to={ele.link}>
                        <Button>
                          {ele.buttonText}
                        </Button>
                        </Link>
                      </div>
                    </div>
                    <div className='w-full h-full lg:w-[50%] rounded-2xl'>
                      <img
                        className="lg:h-full w-full object-cover object-center rounded-b-lg relative top-2 md:top-8 lg:top-0"
                        src={ele.imgsSrc}
                        alt="lobbyimage"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default SwipperCarousel;
