import { FC, memo } from 'react';
import FooterMenus from './FooterMenus';
import FooterLogos from './FooterLogos';
import CopyRight from './CopyRight';

const Footer: FC = memo(() => {
  return (
    <footer className='w-full bg-rake_background-900 px-12 pb-10 pt-12 text-white'>
      <FooterMenus />
      <FooterLogos />
      <CopyRight />
    </footer>
  );
});

export default Footer;
