'use client';

import React from 'react';
import Link from 'next/link';

import * as Popover from '@radix-ui/react-popover';

import { Input } from '@/components/input/input';

const Navbar = () => {
  return (
    <>
      <div className="w-full  bg-primary sticky top-0 p-2 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/dashboard/home">
              <img src="/Logo_Biopark.png" alt="Logo" />
            </Link>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/dashboard/home">
                  <p>Catálogo</p>
                </Link>
              </li>
              <li>
                <Link href="/cursos">
                  <p>Cursos</p>
                </Link>
              </li>
              <li>
                <Link href="/forum">
                  <p>Fórum</p>
                </Link>
              </li>
              <li>
                <Link href="/community">
                  <p>Comunidade</p>
                </Link>
              </li>
              <li>
                <Link href="/advertising">
                  <p>Publicidade</p>
                </Link>
              </li>
            </ul>

            <div className="md:flex xxs:hidden  w-1/3 flex  md:translate-x-10">
              <Input type="text" placeholder="Pesquisar curso" />
            </div>

            <Popover.Root>
              <Popover.Trigger asChild>
                <img
                  className="h-10 w-10 cursor-pointer"
                  src="/icon_none.png"
                  alt="Icone"
                />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  className="rounded p-5 w-[260px] flex flex-col gap-3  bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                  sideOffset={5}
                >
                  <div className="w-full p-3 hover:bg-neutral-300 rounded transition-all duration-300">
                    <Link href="/my-courses">
                      <p>Meus Cursos</p>
                    </Link>
                  </div>
                  <div className="w-full p-3 hover:bg-neutral-300 rounded transition-all duration-300">
                    <Link href="/login">
                      <p>Desconectar</p>
                    </Link>
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
