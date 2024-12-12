import { FC, memo } from 'react';
import { ResponsivenavBar } from './constants';
import { Image } from '../ui/core/image';
import './sidebar.css';
import { MenuIcon } from '@/assets/images/sideNavBar';
import { ResponsiveNavBarProp } from './types';
import { useToggleChatSection } from '@/hooks/useToggleChatSection';

const ResponsiveNavBar: FC<ResponsiveNavBarProp> = memo(({ toggleSideBar }) => {
  const { toggleChatSection } = useToggleChatSection();
  return (
    <div
      className={`bottom-side-bar-main fixed bottom-0 z-[9999] flex w-full cursor-pointer
        justify-around border-t-[1px] border-solid border-[#2d3947] bg-[#072537]
        py-[6px]`}
    >
      <div
        onClick={toggleSideBar}
        className='bottom-side-bar flex flex-col items-center'
      >
        <Image
          url={MenuIcon}
          className='mb-[4px] h-[16px] w-full'
          alt='Menu Icon'
        />
        <span className='block text-[12px] text-[#8ca3b8]'>Menu</span>
      </div>
      {ResponsivenavBar.map((res) => (
        <div
          className='bottom-side-bar flex flex-col items-center'
          key={res.key}
          onClick={res?.key === 'chat' ? toggleChatSection : undefined}
        >
          <Image url={res.icon} className='mb-[4px] h-[16px] w-full' alt='' />
          <span className='block text-[12px] text-[#8ca3b8]'>{res.title}</span>
        </div>
      ))}
    </div>
  );
});

export default ResponsiveNavBar;
