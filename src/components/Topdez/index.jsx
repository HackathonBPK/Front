import React, { useState, useRef } from 'react';

const Index = () => {
  const [courses] = useState([
    {
      titulo: 'Introdução à Programação Web',
      descricao:
        'Aprenda os fundamentos da programação web com HTML, CSS e JavaScript.',
      duracao: '8 semanas',
      categoria_id: 1,
      imagem: 'https://source.unsplash.com/random/300x200',
    },
    {
      titulo: 'Desenvolvimento de Aplicações Mobile',
      descricao:
        'Crie aplicativos mobile nativos para Android e iOS usando React Native.',
      duracao: '12 semanas',
      categoria_id: 2,
      imagem: 'https://source.unsplash.com/random/300x200',
    },
    {
      titulo: 'Marketing Digital Completo',
      descricao:
        'Domine as estratégias de marketing digital para impulsionar seu negócio.',
      duracao: '10 semanas',
      categoria_id: 3,
      imagem: 'https://source.unsplash.com/random/300x200',
    },
    {
      titulo: 'Data Science com Python',
      descricao:
        'Analise dados, crie modelos preditivos e domine o Python para Data Science.',
      duracao: '16 semanas',
      categoria_id: 4,
      imagem: 'https://source.unsplash.com/random/300x200',
    },
    {
      titulo: 'Design Gráfico para Iniciantes',
      descricao:
        'Aprenda os princípios básicos do design gráfico e ferramentas como Photoshop.',
      duracao: '6 semanas',
      categoria_id: 5,
      imagem: 'https://source.unsplash.com/random/300x200',
    },
    {
      titulo: 'Finanças Pessoais para o Sucesso',
      descricao:
        'Organize suas finanças, invista com inteligência e alcance a liberdade financeira.',
      duracao: '4 semanas',
      categoria_id: 6,
      imagem: 'https://source.unsplash.com/random/300x200',
    },
    {
      titulo: 'Inglês para Negócios',
      descricao:
        'Domine o inglês para se comunicar com fluidez em ambientes profissionais.',
      duracao: '10 semanas',
      categoria_id: 7,
      imagem: 'https://source.unsplash.com/random/300x200',
    },
    {
      titulo: 'Produtividade e Gestão do Tempo',
      descricao:
        'Organize seu tempo, aumente sua produtividade e alcance seus objetivos.',
      duracao: '4 semanas',
      categoria_id: 8,
      imagem: 'https://source.unsplash.com/random/300x200',
    },
    {
      titulo: 'Redes Sociais para Empreendedores',
      descricao:
        'Construa uma presença online forte e atraia mais clientes para seu negócio.',
      duracao: '6 semanas',
      categoria_id: 9,
      imagem: 'https://source.unsplash.com/random/300x200',
    },
    {
      titulo: 'Criando um Negócio Online do Zero',
      descricao:
        'Aprenda a criar e gerenciar seu próprio negócio online com sucesso.',
      duracao: '12 semanas',
      categoria_id: 10,
      imagem: 'https://source.unsplash.com/random/300x200',
    },
  ]);

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      sliderRef.current.scrollBy({ left: -900, behavior: 'smooth' });
    } else {
      sliderRef.current.scrollBy({ left: 900, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden bg-gray-100 relative gap-2">
      <div className="w-full h-[32%] flex items-center justify-center gap-2">
        <button
          className=" z-10 bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-600 h-full"
          onClick={() => scroll('left')}
        >
          &lt;
        </button>
        <div className="relative w-10/12 overflow-hidden">
          <div
            ref={sliderRef}
            className="flex space-x-4 overflow-x-hidden px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="relative min-w-[300px] w-64 h-80 flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={course.imagem}
                  className="w-full h-full object-cover rounded-lg"
                  alt={course.titulo}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-center text-white p-4">
                  <h3 className="text-lg font-bold">{course.titulo}</h3>
                  <p className="text-sm">{course.descricao}</p>
                  <p className="text-sm">{course.duracao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className=" bg-gray-800 text-white rounded-lg p-3 hover:bg-gray-600 h-full"
          onClick={() => scroll('right')}
        >
          &gt;
        </button>
      </div>{' '}
    </div>
  );
};

export default Index;
