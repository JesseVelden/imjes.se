import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import CustomCode, { Pre } from '@/components/layout/CustomCode';
import SplitImage, { Split } from '@/components/layout/SplitImage';
import UnderlineLink from '@/components/links/UnderlineLink';
import { MDXImage, MDXImageProps } from '@/components/MDXImage';

const MDXComponents = {
  a: UnderlineLink,
  img: (props: MDXImageProps) => <MDXImage {...props} className='rounded' layout='responsive' quality={90} />,
  Image,
  pre: Pre,
  code: CustomCode,
  LiteYouTubeEmbed,
  SplitImage,
  Split,
};

export default MDXComponents;
