import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';

export default function Layout(props) {
  const location = useLocation();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16"></link>
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32"></link>
        <link rel="icon" href="/favicon/favicon-128x128.png" sizes="128x128"></link>
        <link rel="icon" href="/favicon/favicon-152x152.png" sizes="152x152"></link>
        <link rel="icon" href="/favicon/favicon-167x167.png" sizes="167x167"></link>
        <link rel="icon" href="/favicon/favicon-180x180.png" sizes="180x180"></link>
        <link rel="icon" href="/favicon/favicon-192x192.png" sizes="192x192"></link>
        <link rel="icon" href="/favicon/favicon-196x196.png" sizes="196x196"></link>
        <link rel="icon" href="/favicon/favicon-512x512.png" sizes="512x512"></link>

        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon-60x60.png"></link>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon-76x76.png"></link>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png"></link>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png"></link>

        <link rel="manifest" href="/manifest.webmanifest" ></link>

        <meta name="theme-color" content="#005EB8"></meta>
        <link rel="preconnect" href="https://www.britishgas.co.uk/"></link>
        <link rel="preload" href="https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2" as="font" type="font/woff2" crossorigin></link>
        <link rel="preload" href="https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2" as="font" type="font/woff2" crossorigin></link>
        <link rel="preload" href="https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2" as="font" type="font/woff2" crossorigin></link>
      </Head>
      <OriginalLayout {...props} />
    </>
  );
}