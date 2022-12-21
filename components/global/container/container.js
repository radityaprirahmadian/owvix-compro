import React from 'react';
import Head from 'next/head';
import Navbar from '../navbar';
import ScrollToTopButton from '../button/scrollToTopButton';
import Footer from '../footer';

const Container = (props) => {
  const { title, background } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Owvix Photography was formed with limited resources, but was
              able to produce a great output that could compete in the creative agency industry in
              West Java"
        />
        <meta charset="utf-8" />
        <meta name="keywords" content="photography, agency, creative" />
        <meta name="robots" content="follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className={`flex justify-center flex-col bg-${background}`}>{props.children}</div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Container;
