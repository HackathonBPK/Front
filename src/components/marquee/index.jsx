import React from 'react';
// Libs
import Marquee from 'react-fast-marquee';

// Documentação da lib
// https://www.npmjs.com/package/react-fast-marquee

const index = () => {
  const Publis = [
    {
      empresa: 'Prati Donaduzzi',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjA7kthgxh3f3kBwUDrnApl0Re3L8Q2Ej8g&s',
      titulo: 'dipirona',
      desconto: '10%',
      cupom: 'dipirona10',
    },
    {
      empresa: 'Biopark',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDMWEVbw_XjslIe9nUoP05M8xNRsROxPtxQ&s',
      titulo: 'lote',
      desconto: '12%',
      cupom: 'bio12',
    },
    {
      empresa: 'Biopark educação',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHgyXkKkAsTk6TkeGZFWMJTPdpfDpFFMbYw&s',
      titulo: 'mensalidade',
      desconto: '15%',
      cupom: 'ADStheBest15',
    },
  ];

  return (
    <Marquee pauseOnHover pauseOnClick autoFill speed={100}>
      {Publis.map((publi, index) => (
        <div
          className="flex justify-center items-center ml-10 gap-1 "
          key={index}
        >
          <div className="bg-white rounded-full w-32 h-32 justify-center items-center flex">
            <img
              className=" object-cover w-28 h-28 rounded-full"
              src={publi.src}
              alt={publi.empresa}
            />
          </div>
          <div className="bg-white text-black p-3  rounded-lg">
            <p className="text-lg font-black">{publi.empresa}</p>
            <p className="text-base font-semibold">{publi.titulo}</p>
            <p className="text-sm ">
              Desconto: <span className="font-semibold">{publi.desconto}</span>
            </p>
            <p className="text-sm ">
              Cupom: <span className="font-semibold">{publi.cupom}</span>
            </p>
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default index;
