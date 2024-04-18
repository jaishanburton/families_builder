import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Head>
        <title>Families App</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="min-h-screen dark:bg-gray-900 bg-gray-50 flex flex-col items-center justify-center pt-12 transition-colors duration-500">
        <div className="flex flex-col items-center">
          <Image src="/images/logo.jpg" alt="Logo" width={120} height={120} />
          <h1 className="text-3xl font-bold mt-3 mb-3 dark:text-white text-gray-900 transition-colors duration-500">Families App</h1>
        </div>
        <div className="card dark:bg-gray-800 bg-white text-center shadow-lg rounded-lg p-6 dark:text-gray-100 text-gray-800 transition-colors duration-500">
          <p className="subtitle">Choose what you want to do</p>
          <section className="section">
            <h2 className="section-title">New Family</h2>
            <p className="section-text">Create a new family of portfolio: it will be available in reports.</p>
            <Link href="/path-to-new-family-form" passHref>
              <button className="button-blue dark:bg-blue-700 bg-blue-500 text-white rounded px-4 py-2 mt-4 transition-colors duration-500">Create</button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
