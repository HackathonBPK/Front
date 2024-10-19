import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full h-auto xxs:bg-fill xxs:bg-no-repeat md:bg-contain md:bg-repeat-round justify-center items-center bg-gradient-to-b from-[#cee1f4] to-[rgba(12,113,195,0.35)] shadow-2xl shadow-neutral-200 text-white py-10 relative overflow-hidden">
      <div className="flex items-center justify-evenly text-3xl text-black gap-60">
        <p>PATROCÍNIO</p>
        <p>REALIZAÇÃO</p>
      </div>
      <div className="w-full flex items-center justify-center gap-20">
        <img src="/assets/cresol-logo.png" alt="" />
        <img src="/assets/sebrae-logo-1.png" alt="" />
        <img src="/assets/acit-logo-1.png" alt="" />
      </div>
      <div className="w-full flex items-center justify-center">
        <img src="/assets/apoios-desktop.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
