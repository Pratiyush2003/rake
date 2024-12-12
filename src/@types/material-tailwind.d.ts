// src/@types/material-tailwind.d.ts
declare module '@material-tailwind/react' {
  import React from 'react';
  export interface AccordionProps {
    open: boolean;
    title?: string;
    className?: string;
    children: React.ReactNode;
  }
  export interface AccordionHeaderProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children: React.ReactNode;
  }
  export interface AccordionBodyProps {
    className?: string;
    children: React.ReactNode;
  }
  export interface TypographyProps {
    className?: string;
    variant?: string;
    children: React.ReactNode;
  }
  export interface PopoverProps {
    open: boolean;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    handler?: (open: boolean) => void;
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'right-end' | 'top-right';
  }
  export interface PopoverHandlerProps {
    className?: string;
    children: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
  }
  export interface PopoverContentProps {
    className?: string;
    children: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }
  export interface InputProps {
      className?: string;
      type?: unknown
      ref?: React.ForwardedRef<HTMLInputElement>;
      key?: string | number;
      name?: string;
      value?: unknown;
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
      onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
      placeholder?: string;
      required?: boolean
  }

  export interface PreviewConfig {
    defaultEmoji: string;
    defaultCaption: string;
    showPreview: boolean;
  }

  export enum EmojiStyle {
    NATIVE = 'native',
    APPLE = 'apple',
    TWITTER = 'twitter',
    GOOGLE = 'google',
    FACEBOOK = 'facebook',
  }

  export enum SkinTones {
    NEUTRAL = 'neutral',
    LIGHT = '1f3fb',
    MEDIUM_LIGHT = '1f3fc',
    MEDIUM = '1f3fd',
    MEDIUM_DARK = '1f3fe',
    DARK = '1f3ff',
  }

  export interface EmojiPickerProps {
    theme?: 'light' | 'dark' | 'auto' | string;
    emojiStyle?: 'native' | 'apple' | 'twitter' | 'google' | 'facebook';
    lazyLoadEmojis?: boolean;
    searchPlaceholder?: string;
    skinTonesDisabled?: boolean;
    previewConfig?: PreviewConfig;
    onEmojiClick?: (emojiData: EmojiClickData, event: MouseEvent) => void;
    onSkinToneChange?: (skinTone: SkinTones) => void;
  }

  export interface EmojiClickData {
    activeSkinTone: SkinTones;
    unified: string;
    emoji: string;
    names: string[];
    imageUrl: string;
    getImageUrl: (emojiStyle?: EmojiStyle) => string;
    isCustom: boolean;
  }
  
  export const Accordion: React.FC<AccordionProps>;
  export const AccordionHeader: React.FC<AccordionHeaderProps>;
  export const AccordionBody: React.FC<AccordionBodyProps>;
  export const Typography: React.FC<TypographyProps>;
  export const Tooltip: React.FC<TooltipProps>;
  export const Popover: React.FC<PopoverProps>;
  export const PopoverHandler: React.FC<PopoverHandlerProps>;
  export const PopoverContent: React.FC<PopoverContentProps>;
  export const Input: React.FC<InputProps>;
}
