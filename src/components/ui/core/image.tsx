import { CSSProperties, forwardRef, LegacyRef } from 'react';

type ImageProps = {
  className?: string;
  url?: string;
  sizes?: string;
  style?: CSSProperties;
  alt?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
};

const Image = forwardRef(
  (
    {
      className = '',
      url,
      sizes,
      style,
      alt = 'fox',
      width,
      height,
      onClick,
    }: ImageProps,
    ref: LegacyRef<HTMLImageElement> | undefined,
  ) => (
    <img
      ref={ref}
      style={style}
      sizes={sizes}
      loading='lazy'
      src={url}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  ),
);

export { Image };
