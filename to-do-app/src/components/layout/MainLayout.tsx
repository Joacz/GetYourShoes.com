import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { Navbar } from '../ui/index';
interface Props {
  children: any;
  keywords?: string;
  description?: string;
}

export const MainLayout: FunctionComponent<Props> = ({
  children,
  keywords,
  description,
}) => {
  return (
    <>
      <Head>
        <title>GetYourSneakers</title>
        <meta
          name='description'
          content={
            description ||
            'Welcome to GetYourSneakers! here you will find the best sport shoes in the world'
          }
        />
        <meta
          name='keywords'
          content={
            keywords ||
            'shoes, trainers, sports sneakers, sneakers, sports shoes, sports trainers'
          }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
