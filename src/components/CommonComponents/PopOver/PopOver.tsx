import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from '@material-tailwind/react';
import React, { FC, useEffect } from 'react';
import { Button } from '../../ui/button';
import { CloseIconModal } from '@/assets/images/sideNavBar';
import { Image } from '@/components/ui/core/image';
import './style.css';

interface PopoverProps {
  content?: (
    setOpenPopover: React.Dispatch<React.SetStateAction<boolean>>,
  ) => React.ReactNode;
  position: { top: number; left: number };
  className?: string;
  buttonContent?: React.ReactNode;
  trigger?: 'click' | 'hover';
  closeIcon?: boolean;
  crossIconPlaceMent?: 'left' | 'right';
  placement?:
    | 'right-end'
    | 'top'
    | 'left'
    | 'bottom'
    | 'right'
    | 'top-right'
    | undefined;
  component?: (
    setOpenPopover: React.Dispatch<React.SetStateAction<boolean>>,
  ) => React.ReactNode;
  buttonContentClasses?: string;
  popoverContentClasses?: string;
  closeFromOutside?: boolean;
  openPopoverGif?: boolean;
  functionForPopOverComponent?: () => void | null;
  setCryptoSearchTerm?: (value: string) => void;
}

const PopOverComponent: FC<PopoverProps> = ({
  content,
  position,
  buttonContent,
  trigger = 'hover',
  closeIcon = false,
  crossIconPlaceMent = 'right',
  placement = 'right-end',
  component,
  buttonContentClasses,
  popoverContentClasses,
  openPopoverGif = false,
  closeFromOutside = false,
  functionForPopOverComponent = () => {},
  setCryptoSearchTerm = () => {},
}) => {
  const [openPopover, setOpenPopover] = React.useState(false);

  const handleMouseEnter = (value: boolean) => {
    if (trigger === 'hover') {
      setOpenPopover(true);
      value && functionForPopOverComponent();
    }
  };
  const handleMouseLeave = () => {
    if (trigger === 'hover') setOpenPopover(false);
  };
  const handleClick = () => {
    if (trigger === 'click') setOpenPopover(!openPopover);
  };

  const handleClose = () => {
    setOpenPopover(false);
  };

  useEffect(() => {
    return () => {
      setCryptoSearchTerm('');
    };
  }, [setCryptoSearchTerm]);

  return (
    <Popover
      className='max-h-80 w-32 overflow-auto rounded-lg bg-[#0f0f0f] px-4 py-2'
      style={{ top: position.top, left: position.left }}
      open={closeFromOutside ? openPopoverGif && openPopover : openPopover}
      handler={setOpenPopover}
      placement={placement}
    >
      <PopoverHandler
        onMouseEnter={() => {
          handleMouseEnter(true);
        }}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div>
          <Button
            className={`group h-[50px] w-[50px] rounded-[10px] border-none bg-transparent p-0
              hover:bg-transparent hover:opacity-[1] focus-visible:!shadow-none
              focus-visible:outline-none ${buttonContentClasses} opacity-0.5 cursor-pointer`}
          >
            {buttonContent}
          </Button>
        </div>
      </PopoverHandler>

      <PopoverContent
        onMouseEnter={() => {
          handleMouseEnter(false);
        }}
        onMouseLeave={handleMouseLeave}
        className={`popover-main relative z-50 max-h-[350px] max-w-[24rem] overflow-auto
          bg-[#020E17] !transition-none ${popoverContentClasses}`}
      >
        {closeIcon && (
          <Image
            className={`absolute right-[11px] top-[22px] cursor-pointer
            ${crossIconPlaceMent === 'right' ? 'left-auto right-0' : 'left-0 right-auto'}`}
            onClick={handleClose}
            url={CloseIconModal}
          />
        )}
        {component
          ? component(setOpenPopover)
          : content
            ? content(setOpenPopover)
            : null}
      </PopoverContent>
    </Popover>
  );
};

export default PopOverComponent;
