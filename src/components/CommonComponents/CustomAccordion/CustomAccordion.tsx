import { FC, ReactNode } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { Image } from '@/components/ui/core/image';
import { UpArrow } from '@/assets/images/sideNavBar';
import './style.css';

interface CustomAccordionProps
  extends Omit<
    React.ComponentProps<typeof Accordion>,
    'children' | 'title' | 'open' | 'icon'
  > {
  open: boolean;
  title: string;
  link?: string | undefined;
  icon: string;
  onToggle: () => void;
  children: ReactNode;
  showToggleIcon?: boolean;
  isSideBarOpen: boolean;
  onMouseEnter?: () => void;
  isLanguageAccordion?: boolean;
  className?: string;
  isChatAccordion?: boolean;
  fullChatWidth?: boolean;
  openModal?: () => void;
}

const CustomAccordion: FC<CustomAccordionProps> = ({
  open,
  title,
  link,
  icon,
  onToggle,
  children,
  showToggleIcon = true,
  isSideBarOpen,
  isLanguageAccordion,
  className,
  isChatAccordion,
  fullChatWidth = true,
  openModal,
  ...props
}) => {
  const { ...accordionHeaderProps } = props;

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    } else if (openModal) {
      openModal();
    } else {
      onToggle();
    }
  };

  return (
    <Accordion
      open={open}
      className={`mb-[16px] cursor-pointer ${isSideBarOpen ? '' : 'static mb-0'}
        ${isChatAccordion ? 'relative h-[38px]' : ''} `}
      {...props}
    >
      <div className={`${isChatAccordion ? 'absolute top-0' : 'relative'}`}>
        <AccordionHeader
          onClick={handleClick}
          className={`up-arrow-main flex h-[36px] cursor-pointer flex-col items-center justify-between
            rounded-[10px] border-0 bg-transparent text-[#8ca3b8] hover:bg-[#455b70]
            hover:text-[#fff] focus-visible:outline-none ${isSideBarOpen ? 'p-[8px]' : ''}
            ${className ? 'flex-row' : ''}
            ${isChatAccordion ? 'whitespace-nowrap p-0 text-white hover:bg-transparent' : ''}`}
          {...accordionHeaderProps}
        >
          <div
            className={`group flex items-center
              ${isSideBarOpen ? 'w-full justify-between' : 'w-fit justify-center'}
              ${className}`}
          >
            <div
              className={`flex items-center ${isSideBarOpen ? '' : 'w-fit'}
                ${isChatAccordion ? 'px-[8px] pt-[2px]' : ''}`}
            >
              <Image
                url={icon}
                alt='icon'
                className={`mt-[-2px] h-[17px] w-[17px] opacity-[0.5] ${className ? 'mr-[8px]' : ''}
                  ${isChatAccordion ? 'rounded-full object-cover opacity-[1]' : ''} ${
                  isSideBarOpen
                      ? `${isLanguageAccordion ? 'rounded-full object-cover' : ''} mr-[8px] h-[17px]
                        w-[17px]`
                      : 'mr-0 justify-center'
                  }`}
              />
              {fullChatWidth && (
                <span
                  className={`text-[14px] capitalize ${isChatAccordion ? 'font-bold' : 'font-medium'}`}
                >
                  {isChatAccordion ? `Chat: ${title}` : title}
                </span>
              )}
            </div>
            {showToggleIcon && (
              <Image
                // url={isChatAccordion ? UpArrowIcon : UpArrow}
                url={UpArrow}
                alt='arrow'
                className={`${open ? 'up-arrow' : 'down-arrow'} ${isChatAccordion ? 'h-[6px] w-[16px]' : ''}
                arrow-main`}
              />
            )}
          </div>
        </AccordionHeader>
        {<AccordionBody className='p-0'>{children}</AccordionBody>}
      </div>
    </Accordion>
  );
};

export default CustomAccordion;
