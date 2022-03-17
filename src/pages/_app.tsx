import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import SimpleReactLightbox from 'simple-react-lightbox';

import '@/styles/globals.css';
import '@/styles/mdx.css';

/**
 *
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ThemeProvider>
  );
}

export default MyApp;
