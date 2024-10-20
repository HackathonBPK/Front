'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import * as Popover from '@radix-ui/react-popover';

function MainLayout({ children }) {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const links = [
    { name: 'Categorias', url: 'category' },
    { name: 'Cursos', url: 'cursos' },
    { name: 'Modulo', url: 'modulo' },
    { name: 'Quiz', url: 'quiz' },
    { name: 'Logout', url: '/login' },
  ];
  return (
    <div className={isSmallScreen ? 'flex' : 'flex-row'}>
      {/* Coluna de links */}

      {isSmallScreen ? (
        <div className="w-1/5 h-screen p-6 border-r bg-gray-200">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          {links.map((link, index) => (
            <div
              key={index}
              className="w-full p-3 hover:shadow rounded transition-all duration-300"
            >
              <Link href={link.url}>
                <p>{link.name}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="m-3">
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
                {links.map((link, index) => (
                  <div
                    key={index}
                    className="w-full p-3 hover:bg-neutral-300 rounded transition-all duration-300"
                  >
                    <Link href={link.url}>
                      <p>{link.name}</p>
                    </Link>
                  </div>
                ))}
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      )}

      <div className={'h-full p-4 ' + (isSmallScreen ? 'w-3/4' : 'w-full')}>
        <div className="bg-white p-6 rounded shadow-md">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
