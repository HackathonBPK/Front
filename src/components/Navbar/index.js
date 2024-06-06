'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';
import { Input } from '@/components/input/input';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
    window.location.href = '/login';
  };

  return (
    <>
      <div className="w-full bg-primary sticky top-0 p-2 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/dashboard/home">
              <img src="/Logo_Biopark.png" alt="Logo" className="h-10" />
            </Link>

            <ul className="hidden lg:flex gap-x-6 text-white">
              <li>
                <Link href="/meusCursos">
                  <p>Meus Cursos</p>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/home">
                  <p>Catálogo</p>
                </Link>
              </li>
              {/* <li>
                <Link href="/cursos">
                  <p>Cursos</p>
                </Link>
              </li> */}
              <li>
                <Link href="/forum">
                  <p>Fórum</p>
                </Link>
              </li>
              <li>
                <Link href="/planos">
                  <p>Planos</p>
                </Link>
              </li>
              <li>
                <Link href="/publicidade">
                  <p>Publicidade</p>
                </Link>
              </li>
            </ul>

            <div className="hidden lg:flex flex-1 max-w-md mx-4">
              <Input
                type="text"
                placeholder="Pesquisar curso"
                className="w-full"
              />
            </div>

            <Popover.Root>
              <Popover.Trigger asChild>
                <div className="flex flex-row-reverse gap-5 items-center justify-center text-white">
                  <img
                    className="h-10 w-10 cursor-pointer"
                    src="/icon_none.png"
                    alt="Icone"
                  />
                  <p>{localStorage.getItem('username')}</p>
                </div>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  className="rounded p-5 w-[260px] flex flex-col gap-3 bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                  sideOffset={5}
                >
                  <div className="w-full p-3 hover:bg-neutral-300 rounded transition-all duration-300">
                    <Link href="/meusCursos">
                      <p>Meus Cursos</p>
                    </Link>
                  </div>
                  <div className="w-full p-3 hover:bg-neutral-300 rounded transition-all duration-300">
                    <button onClick={handleLogout}>
                      <p>Desconectar</p>
                    </button>
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>

            <div className="lg:hidden flex items-center">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-primary text-white">
            <div className="flex flex-col items-center py-4">
              <Link href="/dashboard/home">
                <p onClick={toggleMenu} className="py-2">
                  Catálogo
                </p>
              </Link>
              <Link href="/cursos">
                <p onClick={toggleMenu} className="py-2">
                  Cursos
                </p>
              </Link>
              <Link href="/forum">
                <p onClick={toggleMenu} className="py-2">
                  Fórum
                </p>
              </Link>
              <Link href="/community">
                <p onClick={toggleMenu} className="py-2">
                  Comunidade
                </p>
              </Link>
              <Link href="/advertising">
                <p onClick={toggleMenu} className="py-2">
                  Publicidade
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @media (max-width: 1024px) {
          .container {
            flex-direction: column;
            align-items: center;
          }
          .flex-1 {
            width: 90%;
          }
          .lg\\:hidden {
            display: block;
          }
          .lg\\:flex {
            display: none;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .flex-1 {
            width: 70%;
          }
          .hidden {
            display: none;
          }
        }
        @media (max-width: 767px) {
          .flex-1 {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
