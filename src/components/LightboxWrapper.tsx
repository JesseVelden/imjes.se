import { ReactFragment } from 'react';
import { SRLWrapper, SRLWrapperOptions } from 'simple-react-lightbox';

const options = {
  settings: {
    disablePanzoom: true,
    disableWheelControls: true,
    lightboxTransitionSpeed: 0.4,
    slideTransitionSpeed: 0.2,
  },
  caption: { captionColor: '#c5c5c5' },
} as SRLWrapperOptions;
export function LightboxWrapper({ children }: { children: ReactFragment }) {
  return <SRLWrapper options={options}>{children}</SRLWrapper>;
}
