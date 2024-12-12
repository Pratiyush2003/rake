import { FC, memo } from 'react';
import {
  bitCoin,
  bnb,
  dogeCoin,
  ethereum,
  liteCoin,
  tether,
  tron,
  usdCoin,
  knockout,
  dazn,
  responsibleGambling,
  topRank,
  rakeLogo,
} from '@/assets/images/footer';

const FooterLogos: FC = memo(() => {
  return (
    <div className='my-7'>
      <div
        className='relative before:absolute before:bottom-0 before:-mb-[10px] before:h-[2px]
          before:w-full before:bg-rake_grey-500 before:content-[""]'
      >
        <div
          className='grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 md:px-8 lg:grid-cols-3 lg:px-16
            xl:grid-cols-4 xl:gap-4'
        >
          <img className='mx-auto h-12 w-24' src={bitCoin} alt='Bitcoin' />
          <img className='mx-auto h-12 w-24' src={liteCoin} alt='Litecoin' />
          <img className='mx-auto h-12 w-24' src={dogeCoin} alt='Dogecoin' />
          <img className='mx-auto h-12 w-24' src={bnb} alt='BNB' />
          <img className='mx-auto h-12 w-24' src={ethereum} alt='Ethereum' />
          <img className='mx-auto h-12 w-24' src={tron} alt='Tron' />
          <img className='mx-auto h-12 w-24' src={tether} alt='Tether' />
          <img className='mx-auto h-12 w-24' src={usdCoin} alt='USD Coin' />
        </div>
      </div>

      <div
        className='relative mt-8 flex flex-wrap items-center justify-center gap-6 text-center
          before:absolute before:bottom-0 before:-mb-[10px] before:h-[2px] before:w-full
          before:bg-rake_grey-500 before:content-[""] lg:flex-nowrap'
      >
        <div className='flex w-full flex-col items-center justify-between lg:w-[60%]'>
          <div className='text-start'>As seen on</div>
          <div className='mt-4 flex w-full flex-wrap items-center justify-around gap-3'>
            <img
              className='h-auto w-16 lg:w-20'
              src={knockout}
              alt='Knockout'
            />
            <img className='h-auto w-16 lg:w-20' src={topRank} alt='Top Rank' />
            <img className='h-auto w-16 lg:w-20' src={dazn} alt='DAZN' />
          </div>
        </div>

        <div className='relative flex w-full flex-col items-center lg:w-[40%]'>
          <div className='text-start'>License</div>
          <div className='mt-4 flex w-full flex-wrap items-center justify-center gap-4'>
            <div className='relative mx-4 block min-w-[60px] max-w-[70px] overflow-hidden'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://validator.antillephone.com/validate?domain=dev.rake.com&amp;seal_id=29d2b81d10a4c257558f9e91b16480470323e103f15a0c817cbc3d6d2448bc6f0fc383738209f21df30218094f143a0c&amp;stamp=87dfd6c2a7d661167391938205b4ead2'
              >
                <img
                  alt='License Seal'
                  className='h-auto w-full'
                  src='https://8748b583-4ec1-460f-8595-9054b37eb298.snippet.antillephone.com/sealassets/87dfd6c2a7d661167391938205b4ead2-dev.rake.com-29d2b81d10a4c257558f9e91b16480470323e103f15a0c817cbc3d6d2448bc6f0fc383738209f21df30218094f143a0c-c2VhbC5wbmc%3D?status=valid'
                />
              </a>
            </div>
            <div className='relative block w-auto min-w-[60px] gap-x-2 overflow-hidden'>
              <img
                className='w-24'
                src={responsibleGambling}
                alt='Responsible Gambling'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8 flex w-full items-center justify-center'>
        <img className='h-auto w-36' src={rakeLogo} alt='Rake Logo' />
      </div>
    </div>
  );
});

export default FooterLogos;
