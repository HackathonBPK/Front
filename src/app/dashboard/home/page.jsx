import React from 'react';
import CardHome from '@/components/CardHome';
import Topdez from '@/components/Topdez';
const page = () => {
  return (
    <div className="min-h-screen h-auto bg-[#10171E] w-full relative top-0 -z-50">
      <CardHome titleCardHome="Mais assistidos da Semana" />
      <div className="w-full h-screen absolute -z-30 bg-gradient-to-t from-transparent to-black"></div>
      <Topdez titleCategories="Top 10 entretenimento" />
      <Topdez titleCategories="Top 10 Marketing" />
      <Topdez titleCategories="Top 10 Marketing" />
      <Topdez titleCategories="Top 10 Marketing" />
      <Topdez titleCategories="Top 10 Marketing" />
    </div>
  );
};

export default page;
