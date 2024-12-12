import { Image } from '../ui/core/image';

import { default as LoaderGif } from '../../assets/images/Loader.gif';

export const Loader = () => {
  return <Image url={LoaderGif} className='w-[66px] '/>;
};
