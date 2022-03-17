import clsx from 'clsx';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { ImageLightbox } from '@/components/ImageLightbox';

export interface MDXImageProps extends NextImageProps {
  src: string;
  size?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
}

export function MDXImage({
  size,
  width = size,
  height = size,
  layout,
  className,
  loading = 'lazy',
  priority,
  src,
  ...rest
}: MDXImageProps) {
  if (typeof size !== 'undefined' || typeof layout !== 'undefined') {
    return (
      <ImageLightbox href={src}>
        <NextImage
          {...rest}
          src={src}
          width={width}
          height={height}
          layout={layout ?? 'fixed'}
          className={className}
          loading={priority ? undefined : loading}
          // @ts-ignore
          srl_gallery_image='true'
        />
      </ImageLightbox>
    );
  }
  return (
    <span className={clsx('relative block h-[100px] max-h-full min-h-0 w-full max-w-full overflow-hidden', className)}>
      <ImageLightbox href={src}>
        <NextImage
          {...rest}
          src={src}
          layout='fill'
          loading={priority ? undefined : loading}
          objectFit='contain'
          // @ts-ignore
          srl_gallery_image='true'
        />
      </ImageLightbox>
    </span>
  );
}
