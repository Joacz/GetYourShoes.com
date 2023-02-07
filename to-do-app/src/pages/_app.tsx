import '@/styles/globals.css';
import '@/styles/navbar.css';
import '@/styles/header.css';
import '@/styles/button.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '@/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
