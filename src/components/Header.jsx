import { useState } from 'react';
import { MenuIcon, XIcon, IconWhatsapp } from './Icons';
import { enlaces } from '../constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const whatsappNumber = '75331045';
  const message = `¡Hola! Estoy interesado en cotizar sobre sus servicios de desarrollo web`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <nav className="fixed w-full top-0 z-50 bg-black backdrop-blur-lg bg-opacity-60 border-opacity-50">
      <div className="max-w-screen-xl px-5 md:px-0 flex flex-wrap items-center justify-between mx-auto md:w-5/6 lg:w-5/6 py-3 md:pl-0">
        <a href='#inicio' className="flex gap-1 items-center pl-0">
          <img src="/logo.webp" width={125} height={44} alt="Logo Creaciones Webtech" />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className=" items-center p-0 justify-center text-sm rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <XIcon className="w-7 h-7 text-white" aria-hidden="true" />
          ) : (
            <MenuIcon className="w-7 h-7 text-white" aria-hidden="true" />
          )}
        </button>
        <div
          className={`relative top-full left-0 px-1 pb-1 w-full md:w-auto ${
            isMenuOpen ? 'block  ' : 'hidden'
          } transition-transform duration-500 ease-in-out md:flex md:items-center md:space-x-8 md:relative md:bg-transparent`}
          id="navbar-default"
        >
          <ul className="text-sm md:text-sm lg:text-sm 2xl:text-lg flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {enlaces.map(enlace => (
              <li key={enlace.id} className="mt-4 md:mt-0 ">
                <a href={enlace.link} className="flex items-center justify-center md:justify-start">
                  <p className="block text-white text-base ">{enlace.name}</p>
                </a>
              </li>
            ))}
          </ul>
          <div className='p-4 md:p-0 md:hidden'>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center gap-2 rounded-xl hover:before:bg-redborder-red-500 relative py-1.5 overflow-hidden bg-gradient-to-r from-[#EDFF7D] to-[#49F992] px-5 shadow-md transition-colors before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#EDFF7D] before:transition-color before:duration-500 hover:before:left-0 hover:before:w-full'>
                <span className='relative z-10 font-bold'>cotizar </span>
                <span className='relative z-10'><IconWhatsapp /></span>
            </a>
          </div>
        </div>
        <div className='p-4 md:p-0 hidden md:block'>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center gap-2 rounded-xl hover:before:bg-redborder-red-500 relative py-1.5 overflow-hidden bg-gradient-to-r from-[#EDFF7D] to-[#49F992] px-5 shadow-md transition-colors before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#EDFF7D] before:transition-colors before:duration-500 hover:before:left-0 hover:before:w-full'>
              <span className='relative z-10 font-bold'>cotizar </span>
              <span className='relative z-10'><IconWhatsapp /></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
