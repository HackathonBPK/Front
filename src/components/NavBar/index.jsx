'use client';

import React from "react";
import Link from "next/link";

import * as Popover from '@radix-ui/react-popover';

// import Button from "./Button";

const Navbar = () => {

    return (
        <>
        <div className="w-full h-10 bg-primary sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <img src="Logo_Biopark.png" alt="Logo" />

                    <ul className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/courses">
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

                    <input type="text" placeholder="Pesquisar curso"></input>

                    <Popover.Root>
                        <Popover.Trigger asChild>
                            <img className="h-8 w-8" src="icon_none.png" alt="Icone" />
                        </Popover.Trigger>
                        <Popover.Portal>
                            <Popover.Content
                                className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                                sideOffset={5}
                            >
                                <p>
                                    <Link href="/my-courses">
                                        <p>Meus Cursos</p>
                                    </Link>
                                </p>
                                <p>
                                    <Link href="/logout">
                                        <p>Desconectar</p>
                                    </Link>
                                </p>
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