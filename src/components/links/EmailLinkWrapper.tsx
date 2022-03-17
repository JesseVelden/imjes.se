import { cloneElement, ReactElement, useRef } from 'react';

export function EmailLinkWrapper({ children }: { children: ReactElement }): ReactElement {
  const emailRef = useRef<HTMLAnchorElement | null>(null);

  const contact = 'aGlAaW1qZXMuc2U=';

  const setHref = () => {
    emailRef.current!.href = `mailto:${atob(contact)}`;
  };

  return cloneElement(children, {
    ref: emailRef,
    onMouseEnter: setHref,
    onFocus: setHref,
    href: '#',
  });
}
