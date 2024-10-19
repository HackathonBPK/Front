'use client';
import React, { useEffect, useState } from 'react';
import CardHome from '@/components/CardHome';
import Topdez from '@/components/Topdez';

import { getAllCourses } from '@/service/course.js';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Marquee from '@/components/marquee';
import { getOne } from '@/service/client';

const page = () => {
  const Inicial_Course = [
    {
      'Titulo': 'Marcenaria',
      'Quantidade_modulos': 5,
      'Duracao_total': 260,
      'Modulo': [
        {
          'Titulo': 'Introdução à Marcenaria',
          'Descricao':
            'Aprenda os conceitos básicos de marcenaria, ferramentas e segurança.',
          'Aulas': [
            {
              'Aula-1': {
                'Titulo': 'Ferramentas Essenciais',
                'Descrição':
                  'Conheça as ferramentas mais usadas em projetos de marcenaria.',
                'capa': 'tools.jpg',
                'Link': 'https://curso-marcenaria.com/aula1',
                'duração': '45 minutos',
              },
            },
            {
              'Aula-2': {
                'Titulo': 'Materiais Comuns',
                'Descrição':
                  'Entenda os diferentes tipos de madeira e como utilizá-los.',
                'capa': 'materials.jpg',
                'Link': 'https://curso-marcenaria.com/aula2',
                'duração': '40 minutos',
              },
            },
            {
              'Aula-3': {
                'Titulo': 'Técnicas Básicas de Corte',
                'Descrição':
                  'Demonstração das principais técnicas de corte de madeira.',
                'capa': 'cutting.jpg',
                'Link': 'https://curso-marcenaria.com/aula3',
                'duração': '35 minutos',
              },
            },
          ],
        },
        {
          'Titulo': 'Montagem de Móveis Simples',
          'Descricao': 'Aprenda a montar móveis básicos como mesas e cadeiras.',
          'Aulas': [
            {
              'Aula-1': {
                'Titulo': 'Estrutura de uma Mesa',
                'Descrição': 'Passo a passo para construir uma mesa simples.',
                'capa': 'table.jpg',
                'Link': 'https://curso-marcenaria.com/aula4',
                'duração': '50 minutos',
              },
            },
            {
              'Aula-2': {
                'Titulo': 'Montagem de Cadeiras',
                'Descrição':
                  'Técnicas para montar uma cadeira com segurança e estilo.',
                'capa': 'chair.jpg',
                'Link': 'https://curso-marcenaria.com/aula5',
                'duração': '45 minutos',
              },
            },
            {
              'Aula-3': {
                'Titulo': 'Ajustes e Acabamentos',
                'Descrição':
                  'Como fazer ajustes finais e aplicar acabamentos adequados.',
                'capa': 'finishing.jpg',
                'Link': 'https://curso-marcenaria.com/aula6',
                'duração': '40 minutos',
              },
            },
          ],
        },
        {
          'Titulo': 'Projetos Personalizados',
          'Descricao':
            'Crie seus próprios projetos de marcenaria com estilo personalizado.',
          'Aulas': [
            {
              'Aula-1': {
                'Titulo': 'Criação de Desenhos Técnicos',
                'Descrição': 'Como desenhar seus próprios projetos.',
                'capa': 'drawing.jpg',
                'Link': 'https://curso-marcenaria.com/aula7',
                'duração': '60 minutos',
              },
            },
            {
              'Aula-2': {
                'Titulo': 'Escolha dos Materiais',
                'Descrição':
                  'Critérios para escolher os melhores materiais para seus projetos.',
                'capa': 'material_selection.jpg',
                'Link': 'https://curso-marcenaria.com/aula8',
                'duração': '50 minutos',
              },
            },
            {
              'Aula-3': {
                'Titulo': 'Execução do Projeto',
                'Descrição': 'Passos para colocar seu projeto em prática.',
                'capa': 'execution.jpg',
                'Link': 'https://curso-marcenaria.com/aula9',
                'duração': '70 minutos',
              },
            },
          ],
        },
      ],
    },
    {
      'Titulo': 'Estofados',
      'Quantidade_modulos': 4,
      'Duracao_total': 200,
      'Modulo': [
        {
          'Titulo': 'Introdução à Estofaria',
          'Descricao':
            'Conheça as ferramentas e técnicas básicas para trabalhar com estofados.',
          'Aulas': [
            {
              'Aula-1': {
                'Titulo': 'Ferramentas de Estofaria',
                'Descrição':
                  'As ferramentas essenciais para começar a trabalhar com estofados.',
                'capa': 'upholstery_tools.jpg',
                'Link': 'https://curso-estofados.com/aula1',
                'duração': '40 minutos',
              },
            },
            {
              'Aula-2': {
                'Titulo': 'Materiais Usados',
                'Descrição':
                  'Exploração dos materiais mais utilizados na estofaria.',
                'capa': 'materials.jpg',
                'Link': 'https://curso-estofados.com/aula2',
                'duração': '45 minutos',
              },
            },
            {
              'Aula-3': {
                'Titulo': 'Segurança no Trabalho',
                'Descrição':
                  'Práticas de segurança para evitar acidentes durante a confecção.',
                'capa': 'safety.jpg',
                'Link': 'https://curso-estofados.com/aula3',
                'duração': '35 minutos',
              },
            },
          ],
        },
        {
          'Titulo': 'Renovação de Cadeiras',
          'Descricao':
            'Aprenda a renovar cadeiras com técnicas de estofamento.',
          'Aulas': [
            {
              'Aula-1': {
                'Titulo': 'Desmontagem e Avaliação',
                'Descrição': 'Como desmontar cadeiras e avaliar a estrutura.',
                'capa': 'chair_disassembly.jpg',
                'Link': 'https://curso-estofados.com/aula4',
                'duração': '50 minutos',
              },
            },
            {
              'Aula-2': {
                'Titulo': 'Substituição de Estofados',
                'Descrição': 'Como substituir tecidos antigos por novos.',
                'capa': 'fabric_replacement.jpg',
                'Link': 'https://curso-estofados.com/aula5',
                'duração': '55 minutos',
              },
            },
            {
              'Aula-3': {
                'Titulo': 'Finalização',
                'Descrição': 'Dicas para garantir um acabamento impecável.',
                'capa': 'finishing_upholstery.jpg',
                'Link': 'https://curso-estofados.com/aula6',
                'duração': '45 minutos',
              },
            },
          ],
        },
        {
          'Titulo': 'Sofás e Poltronas',
          'Descricao': 'Trabalhe em projetos maiores, como sofás e poltronas.',
          'Aulas': [
            {
              'Aula-1': {
                'Titulo': 'Estrutura de Sofás',
                'Descrição': 'Como trabalhar com a estrutura de sofás.',
                'capa': 'sofa_structure.jpg',
                'Link': 'https://curso-estofados.com/aula7',
                'duração': '60 minutos',
              },
            },
            {
              'Aula-2': {
                'Titulo': 'Aplicação de Espuma',
                'Descrição':
                  'Como aplicar espuma para criar conforto em sofás e poltronas.',
                'capa': 'foam_application.jpg',
                'Link': 'https://curso-estofados.com/aula8',
                'duração': '65 minutos',
              },
            },
            {
              'Aula-3': {
                'Titulo': 'Costura de Acabamento',
                'Descrição':
                  'Dicas para costurar tecidos de acabamento em sofás.',
                'capa': 'sofa_sewing.jpg',
                'Link': 'https://curso-estofados.com/aula9',
                'duração': '50 minutos',
              },
            },
          ],
        },
      ],
    },
  ];
  const [courses, setCourses] = useState([]);

  const [user, setUser] = useState([]);
  useEffect(() => {
    getAllCourses().then((response) => {
      console.log(response.data);

      setCourses(response.data.data);
    });
  }, []);
  console.log(courses);

  return (
    <div className='min-h-screen overflow-x-hidden h-auto bg-[#cee1f4] w-full relative top-0 -z-50 pt-20'>
      <Navbar />
      <CardHome
        setCourses={setCourses}
        courses={courses}
        titleCardHome='Modulos Marcenaria'
      />
      {/* <div className='w-full h-auto my-10 mb-20 '>
        <Marquee />
      </div>
      <div className='w-full h-screen absolute -translate-y-80 -z-30 bg-gradient-to-t from-transparent to-black'></div>
      <Topdez
        topics='Marcenaria'
        courses={courses}
        titleCategories='Modulos do curso de Marcenaria'
      />
      <Topdez
        topics='Estofados'
        courses={courses}
        titleCategories='Modulos de Estafados'
      /> */}
      {/* <Topdez courses={courses} titleCategories="Top 10 Alimentos" /> */}
      <Footer />
    </div>
  );
};

export default page;
