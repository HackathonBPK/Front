import React from 'react';
// Libs
import Marquee from 'react-fast-marquee';

// Documentação da lib
// https://www.npmjs.com/package/react-fast-marquee

const index = () => {
  const Publis = [
    {
      empresa: 'Cresol',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvpbug-8YkRMjcRURe4fi1S6rOZi4MX5iMUQ&s',
      titulo: 'emprestimo',
      desconto: '10%',
      cupom: 'credito10',
    },
    {
      empresa: 'Sebrae',
      src: 'https://files.cercomp.ufg.br/weby/up/1344/o/SB.png?1671805695',
      titulo: 'Consultoria',
      desconto: '12%',
      cupom: 'Consultoria12',
    },
    {
      empresa: 'ACIT',
      src: 'https://acit.org.br/wp-content/uploads/2022/06/compartilhar.jpg',
      titulo: 'Estagios',
      desconto: '15%',
      cupom: 'Estagio15',
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
