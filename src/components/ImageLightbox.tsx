import { cloneElement, ReactElement } from 'react';

export function ImageLightbox({ href, children }: { href: string; children: ReactElement }) {
  const child = cloneElement(children, {
    srl_gallery_image: 'true',
    className: children.props.className + ' cursor-zoom-in',
  });
  return <a href={href}>{child}</a>;
}
