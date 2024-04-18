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
      <main className="min-h-screen flex flex-col items-center justify-center pt-12 dark:bg-gray-800 bg-gray-100">

       <div className="flex flex-col items-center">
          <Image src="/images/logo.jpg" alt="Logo" width={120} height={120} />
          <h1 className="text-2xl font-bold mt-3 mb-3 font-roboto">Families App</h1> {/* Texte plus grand et police Roboto */}
        </div>
        <div className="card text-center">
          <p className="subtitle">Choose what you want to do</p>
          <section className="section">
            <h2 className="section-title">New Family</h2>
            <p className="section-text">Create a new family of portfolio: it will be available in reports.</p>
            <Link href="/path-to-new-family-form" passHref>
              <button className="button-blue">Create</button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
