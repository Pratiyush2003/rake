import { FC, memo, useState } from 'react';
import { Image } from '../ui/core/image';
import { upperSectionIcons, roomsOption, arrow } from './constants';
import { PopOverComponent } from '../CommonComponents';
import { Button } from '../ui/button';
import { ActiveGifIcon, SmileFaceIcon } from '@/assets/images/chat';
import { useOpenModal } from '@/hooks/useOpenModal';
import GifModal from './modals/GifModal';
import EmojiModal from './modals/EmojiModal';
import RespectModal from './modals/RespectModal';
import { useToggleChatSection } from '@/hooks/useToggleChatSection';
import { flagSpanishIcon } from '@/assets/images/flags';
import { InputComponent } from '../ui/input';
import { useTranslation } from 'react-i18next';
import { useSearchBarFocused } from '@/hooks/useSearchBarFocused';

interface Room {
  key: string;
  title: string;
  icon: string;
  isAccordion: boolean;
}

interface Message {
  userName: string;
  levelUrl: string;
  message: string;
}

const Chat: FC = memo(() => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  const { isSearchBarFocused } = useSearchBarFocused();
  const [currentRoom, setCurrentRoom] = useState<Room>(roomsOption[0]);
  const [messagesArray, setMessagesArray] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [fullChatWidth, setFullChatWidth] = useState<boolean>(true);
  const [openPopoverGif, setOpenPopoverGif] = useState(false);
  const { openModal } = useOpenModal();
  const { toggleChatSection } = useToggleChatSection();
  const { t } = useTranslation('chat');
  const dummyUserName = 'User123';
  const dummyLevelUrl = 'path/to/dummy/image.png';

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessagesArray((prev) => [
        ...prev,
        {
          userName: dummyUserName,
          levelUrl: dummyLevelUrl,
          message: inputMessage,
        },
      ]);
      setInputMessage('');
    }
  };

  const handleGifSelect = (gifUrl: string) => {
    setMessagesArray((prev) => [
      ...prev,
      { userName: dummyUserName, levelUrl: dummyLevelUrl, message: gifUrl },
    ]);
    setOpenPopoverGif(false);
  };

  const onEmojiClick = (emoji: string) => {
    setInputMessage((prev) => prev + emoji);
  };
  return (
    <aside
      className={`${
        !fullChatWidth
          ? 'w-[232px] min-w-[232px] max-w-[232px] transition-all duration-300 ease-in-out'
          : `w-full min-w-full max-w-[370px] transition-all duration-300 ease-in-out
            ss:w-[319px] ss:min-w-[319px]`
        } flex h-full max-h-[calc(100%-64px)] select-none flex-col justify-between
        border-l border-solid border-[#2d3947] bg-[#072537]
        ${isSearchBarFocused ? 'opacity-[0.3]' : ''} `}
    >
      {/* upper section */}
      <div
        className='flex h-[39px] items-center justify-between border-b-[1px] border-solid
          border-[#2d3947] bg-[#072537] px-[16px]'
      >
        <PopOverComponent
          className='rounded-[8px] bg-[#020e16] p-[10px]'
          component={(setOpenPopover) => (
            <>
              {roomsOption.map((element) => (
                <div
                  key={element.key}
                  className='group my-[2px] flex cursor-pointer items-center space-x-2 rounded-[10px]
                    bg-transparent p-[8px]'
                  onClick={() => {
                    setOpenPopover(false);
                    setCurrentRoom(element);
                  }}
                >
                  <Image
                    url={element.icon}
                    alt='icon'
                    className='mr-[8px] mt-[-2px] h-[17px] w-[17px] rounded-full object-cover'
                  />
                  <span
                    className={`font-medium capitalize text-[#f5f5f5] group-hover:text-[#0099f4]
                    ${currentRoom?.title === element?.title ? '!text-[#0099f4]' : ''}`}
                  >
                    {t(`${element?.title}`)}
                  </span>
                </div>
              ))}
            </>
          )}
          position={{ top: 10, left: 60 }}
          buttonContent={
            <div
              className={
                'group flex w-fit flex-row items-center justify-center'
              }
              onClick={() => {
                setAccordionOpen(!accordionOpen);
              }}
            >
              <div className={'flex w-fit items-center px-[8px] pt-[2px]'}>
                <Image
                  url={currentRoom?.icon}
                  alt='icon'
                  className={`mr-0 mr-[8px] mt-[-2px] h-[17px] w-[17px] justify-center rounded-full
                  object-cover !opacity-[1] opacity-[0.5]`}
                />
                {fullChatWidth && (
                  <span className={'text-[14px] font-bold capitalize'}>
                    Chat: {t(`${currentRoom?.title}`)}
                  </span>
                )}
              </div>
              <Image
                url={arrow}
                alt='arrow'
                className={`${!accordionOpen ? 'up-arrow' : 'down-arrow'} arrow-main h-[8px] w-[16px]`}
              />
            </div>
          }
          trigger='click'
          closeIcon={false}
          placement='bottom'
          buttonContentClasses='h-fit w-fit'
          popoverContentClasses='!bg-[#000e17] !opacity-[1] w-fit box-border max-h-fit !top-[99px] max-h-72 right-0 ss:!right-[131px] !left-auto p-0'
        />

        <div className='flex flex-col items-center space-y-2'>
          <div className='h-0 w-0 border-b-8 border-l-4 border-r-4 border-transparent border-b-blue-500'></div>
          <div className='h-0 w-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-blue-500'></div>
        </div>

        <div className='flex items-center'>
          <div
            onClick={() => {
              openModal(RespectModal);
            }}
            className='m-[-10px] mr-[5px] p-[10px]'
          >
            <Image
              url={upperSectionIcons?.[0].icon}
              className='h-[15px] w-[13px] cursor-pointer'
            />
          </div>
          <div
            onClick={() => {
              setFullChatWidth(!fullChatWidth);
            }}
            className='m-[-10px] mr-[5px] hidden cursor-pointer p-[10px] ss:block'
          >
            <Image
              url={upperSectionIcons?.[1].icon}
              className={`h-[15px] w-[16px] transition-transform duration-300 ease-in-out ${
                !fullChatWidth ? 'rotate-180' : 'rotate-0' }`}
            />
          </div>
          <div onClick={toggleChatSection} className='m-[-10px] p-[10px]'>
            <Image
              url={upperSectionIcons?.[2].icon}
              className='cursor-pointer'
            />
          </div>
        </div>
      </div>

      <div className='flex h-full flex-col justify-end overflow-y-auto bg-[#04141e] pt-[10px]'>
        {messagesArray.map((res, idx) => (
          <div
            key={idx}
            className='mx-[8px] mb-[8px] mt-[4px] flex items-center rounded-[8px] bg-[#293c53] px-[8px]
              py-[9px]'
          >
            <Image
              url={flagSpanishIcon}
              className='mr-[1px] inline-block h-[20px] w-[20px]'
            />
            <span className='ml-[3px] mr-[6px] inline-block text-[14px] font-medium text-[#8ca3b8]'>
              {res.userName} :{' '}
            </span>
            {res.message.startsWith('http') ? (
              <Image
                url={res.message}
                alt={'gif'}
                className='mt-[4px] h-[100px] w-[179px]'
              />
            ) : (
              <span className='inline-block text-[14px] text-[#f5f5f5]'>
                {res.message}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className='box-border bg-[#072537] px-[15px] py-4'>
        <div className='items-center'>
          <InputComponent
            type='text'
            placeholder={t('Type_your_message')}
            className='box-border h-[45px] w-full flex-grow rounded-lg border-0 !bg-[#010e17] px-[15px]
              py-[12px] text-[14px] font-medium text-[#f5f5f5] focus:outline-none
              focus-visible:!shadow-none'
            value={inputMessage}
            onChange={(e) => {
              setInputMessage(e.target.value);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <div className='mt-[17px] flex items-center justify-between'>
            <div className='flex items-center'>
              <PopOverComponent
                className='max-h-80 w-32 overflow-auto rounded-lg'
                component={() => <GifModal handleGifSelect={handleGifSelect} />}
                position={{ top: 10, left: 60 }}
                buttonContent={
                  <Image
                    url={ActiveGifIcon}
                    onClick={() => {
                      setOpenPopoverGif(true);
                    }}
                  />
                }
                trigger='click'
                closeIcon={true}
                placement='top'
                openPopoverGif={openPopoverGif}
                closeFromOutside={true}
                buttonContentClasses='h-fit w-fit p-[10px] pl-0'
                popoverContentClasses='!bg-[#002636] max-w-full ss:max-w-[24rem] w-full ss:w-[345px] box-border p-[14px] max-h-fit !top-auto !bottom-[132px] right-0 ss:!right-[11px] !left-auto'
              />
              <PopOverComponent
                className='max-h-80 w-32 overflow-auto rounded-lg bg-[#000]'
                component={() => <EmojiModal onEmojiSelect={onEmojiClick} />}
                position={{ top: 10, left: 60 }}
                buttonContent={<Image url={SmileFaceIcon} />}
                trigger='click'
                closeIcon={false}
                placement='top'
                buttonContentClasses='h-fit w-fit p-[10px] px-0'
                popoverContentClasses='!bg-[#002636] w-full max-w-full ss:max-w-[24rem]  ss:w-[370px] box-border max-h-fit !top-auto !bottom-[138px] right-0 ss:!right-[1px] p-0 !left-auto'
              />
            </div>
            <div className='flex items-center gap-[8px]'>
              {fullChatWidth && (
                <div className='ml-[7px] flex items-center'>
                  <div className='mr-[5px] h-[8px] w-[8px] rounded-full bg-[#3ac922]'></div>
                  <p className='whitespace-nowrap text-[14px] text-[#f5f5f5]'>
                    {t('Online_amount_users', { amountUsers: '1-200' })}
                  </p>
                </div>
              )}
              <div className='mx-[15px] text-[14px] text-[#8ca3b8]'>160</div>
            </div>
            <Button
              onClick={handleSendMessage}
              className='inline-flex h-[35px] cursor-pointer items-center justify-center
                whitespace-nowrap rounded-xl border-none bg-[#0099f4] p-[10px] text-[16px]
                font-bold text-white transition-colors hover:bg-rake_blue-500/90
                disabled:pointer-events-none disabled:opacity-50'
            >
              {t('Send_')}
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
});
export default Chat;
