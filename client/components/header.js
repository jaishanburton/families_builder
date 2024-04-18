import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ theme, toggleTheme }) => {
    return (
    <header className={`w-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-black'} p-6 flex justify-between items-center`}>
      <Link href="/" passHref>
        <div className="flex items-center cursor-pointer">
          <Image src="/images/logo.jpg" alt="Logo" width={60} height={60} />
        </div>
      </Link>
      <nav className="ml-6"> {}
        <Link href="/" passHref>
          <span className="text-white text-xl hover:text-blue-500 transition-colors duration-300 cursor-pointer"> {/* Ajustement de la taille de la police avec text-xl */}
            Accueil
          </span>
        </Link>
      </nav>
      <button onClick={toggleTheme} className="text-white text-lg">
        {theme === 'light' ? '🌞' : '🌜'}
      </button>
    </header>
  );
};

export default Header;
