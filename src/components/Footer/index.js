import React from 'react';

const Footer = () => {
  return (
    <footer className="flex h-auto xxs:bg-fill xxs:bg-no-repeat md:bg-contain md:bg-repeat-round justify-center items-center bg-[#10171E] shadow-2xl shadow-neutral-200 text-white py-10 relative overflow-hidden bg-footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 px-4">
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mb-6 md:mb-0">
          <img
            src="/BioparkVertical.svg"
            alt="Biopark Cursos"
            className="h-20 w-20 md:h-40 md:w-40"
          />
        </div>
        <address className="not-italic text-center md:text-left mb-6 md:mb-0">
          Toledo - PR <br />
          <a
            href="mailto:bioparkcursos@bioparkedu.com"
            className="text-blue-400"
          >
            bioparkcursos@bioparkedu.com
          </a>{' '}
          <br />
          +55 (45) 2036-3601 <br />
          Rodovia estadual - conexão com BR - PR-182 <br />
          <a
            href="https://www.google.com/maps"
            className="text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no mapa
          </a>
        </address>
        <div className="flex flex-col items-center md:items-end">
          <button className="bg-red-600 text-white px-4 py-2 rounded mb-4">
            Alguma dúvida? Contate-nos!
          </button>
          <a href="#" className="text-red-400 mb-4">
            Assine nossa newsletter!
          </a>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-pink-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-700">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
