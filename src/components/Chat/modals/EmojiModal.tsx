import { FC, memo, useState, useEffect } from 'react';
import EmojiPicker, { EmojiClickData, EmojiStyle } from 'emoji-picker-react';
import './modals.css';
import { Loader } from '@/components/CommonComponents';

interface EmojiModalProps {
  onEmojiSelect?: (emoji: string) => void;
  autoFocusSearch?: boolean;
  lazyLoadEmojis?: boolean;
  previewConfig?: object;
  searchPlaceholder?: string;
  skinTonesDisabled?: boolean;
  searchDisabled?: boolean;
  emojiVersion?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  customEmojis?: Array<{ names: string[]; imgUrl: string; id: string }>;
  hiddenEmojis?: string[];
  reactionsDefaultOpen?: boolean;
  reactions?: string[];
  allowExpandReactions?: boolean;
  onSkinToneChange?: (skinTone: string) => void;
  emojiStyle?: EmojiStyle;
}

const EmojiModal: FC<EmojiModalProps> = ({
  onEmojiSelect,
  autoFocusSearch = true,
  lazyLoadEmojis = true,
  previewConfig = {},
  searchPlaceholder = 'Search',
  skinTonesDisabled = true,
  searchDisabled = false,
  emojiVersion = '',
  className = '',
  width = 368,
  height = 250,
  style = {},
  customEmojis,
  hiddenEmojis = [],
  reactionsDefaultOpen = false,
  reactions,
  allowExpandReactions = true,
  onSkinToneChange,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className='loader flex h-[250px] w-full items-center justify-center'>
        <Loader />
      </div>
    );
  }

  return (
    <EmojiPicker
      onEmojiClick={(e: EmojiClickData) => {
        const selectedEmoji = e.emoji;
        if (onEmojiSelect) {
          onEmojiSelect(selectedEmoji);
        }
      }}
      autoFocusSearch={autoFocusSearch}
      emojiStyle={EmojiStyle.NATIVE}
      lazyLoadEmojis={lazyLoadEmojis}
      previewConfig={previewConfig}
      searchPlaceholder={searchPlaceholder}
      skinTonesDisabled={skinTonesDisabled}
      searchDisabled={searchDisabled}
      emojiVersion={emojiVersion}
      className={className}
      width={width}
      height={height}
      style={style}
      customEmojis={customEmojis}
      hiddenEmojis={hiddenEmojis}
      reactionsDefaultOpen={reactionsDefaultOpen}
      reactions={reactions}
      allowExpandReactions={allowExpandReactions}
      onSkinToneChange={onSkinToneChange}
    />
  );
};

export default memo(EmojiModal);
