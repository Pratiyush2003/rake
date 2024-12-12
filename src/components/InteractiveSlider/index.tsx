import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { bronze } from '@/assets/images/casinolobby';

interface TopicData{
  topicimg: string;
}

interface CasinoSliderProps {
  topicdata?: TopicData[];
  count: number;
  cardclasses: string;
  icon?: string;
  showiconclasses?: string;
  cardimageclasses?: string;
  cardhoverclasses?: string;
  carouselitemclasses: string;
  carouselbuttonclasses?: string;
  livesectionclassess?: string;
  carouselclasses?: string
}

const InteractiveSlider: React.FC<CasinoSliderProps> = ({ topicdata, count, cardclasses, icon, showiconclasses, cardimageclasses, cardhoverclasses, carouselitemclasses, carouselbuttonclasses, livesectionclassess, carouselclasses }) => {
  return (
    <Carousel className='relative w-full'>
      <div className={`relative w-full ${carouselclasses}`}>
        {topicdata?.map((data, index) => (
          <div key={index} className='flex items-center gap-2'>
            <img src={data.topicimg} alt={data.topic} className='h-7' />
            <h4 className='select-none text-2xl'>{data.topic}</h4>
            <h6 className='cursor-pointer text-sm text-rake_blue-500'>
              See all
            </h6>
          </div>
        ))}
        <div
          className={`absolute right-12 top-0 mt-6 w-4  ${carouselbuttonclasses}`}
        >
          <CarouselPrevious className='border text-rake_grey-300 hover:text-rake_grey-300 h-8 w-12
           bg-rake_grey-500 hover:bg-rake_grey-600 rounded-l-xl' />
          <CarouselNext className='border text-rake_grey-300 hover:text-rake_grey-300 h-8 w-12
          bg-rake_grey-500 hover:bg-rake_grey-600 rounded-r-xl'/>
        </div>
      </div>

      <CarouselContent className='-ml-1 mt-2 '>
        {Array.from({ length: count }).map((_, index) => (
          <CarouselItem
            className={`${carouselitemclasses}`}
            key={index}
          >
            <div className='group relative mt-4 pr-2' >
              <Card
                className={`relative ${cardclasses}`}
                style={{
                  backgroundImage:
                    `url(${cardimageclasses})`,
                }}
              >
                <div
                  className={`absolute ${cardhoverclasses}`}
                />
                <CardContent className='relative flex h-full items-center justify-center'>
                  <span className={`absolute ${showiconclasses && showiconclasses}`}>
                    <img
                      src={icon}
                      alt='Play icon'
                      className='select-none'
                    />
                  </span>
                </CardContent>
              </Card>
            </div>
            <div className={livesectionclassess}>
              <div className='flex items-center'>
                <div>
                  <img
                    src={bronze}
                    alt='bronze'
                    height={20}
                    width={20}
                  />
                </div>
                <div
                  className='max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-xs
                  font-semibold text-rake_grey-300 select-none'
                >
                  motef70810
                </div>
              </div>
              <div className='text-sm text-center font-semibold text-rake_green-500 select-none'>
                0.84 USD
              </div>
            </div>
          </CarouselItem>

        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default InteractiveSlider;
