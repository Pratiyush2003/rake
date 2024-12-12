import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/core/image';
import { useOpenModal } from '@/hooks/useOpenModal';
import { FC, memo } from 'react';

const SpinNowModal: FC = () => {
  const { closeModal } = useOpenModal();

  return (
    <div
      className='relative box-border h-[500px] w-[99vw] ts:w-[516px] rounded-[10px] bg-rake_grey-500
        px-[15px] py-[26px] ss:p-10'
    >
      <div className='flex justify-center'>
        <Image
          url='https://dev.rake.com/static/media/rakeLogoImage.38e1076b9990674c5bf200bda7d93892.svg'
          alt='logo'
          className='h-[20px]'
        />
      </div>
      <Button
        onClick={closeModal}
        className='absolute left-[14px] top-[14px] h-fit bg-transparent p-0 hover:bg-transparent
          focus-visible:outline-none ss:left-[30px] ss:top-[30px]'
      >
        <Image
          url='https://dev.rake.com/static/media/backButtonIcon.2436b28d21d5c3514364d48660fd0101.svg'
          alt='close icon'
        />
      </Button>
    </div>
  );
};

export default memo(SpinNowModal);

