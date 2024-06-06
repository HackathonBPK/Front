'use client';
import React, { useEffect, useState } from 'react';
import CardHome from '@/components/CardHome';
import Topdez from '@/components/Topdez';

import { getAllCourses } from '@/service/course.js';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Marquee from '@/components/marquee';

const page = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getAllCourses().then((response) => {
      setCourses(response.data.data);
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden h-auto bg-[#10171E] w-full relative top-0 -z-50">
      <Navbar />
      <CardHome
        setCourses={setCourses}
        courses={courses}
        titleCardHome="Mais assistidos da Semana"
      />
      <div className="w-full h-auto my-10 mb-20 ">
        <Marquee />
      </div>
      <div className="w-full h-screen absolute -translate-y-80 -z-30 bg-gradient-to-t from-transparent to-black"></div>
      <Topdez courses={courses} titleCategories="Top 10 Entretenimento" />
      <Topdez courses={courses} titleCategories="Top 10 Marketing" />
      <Topdez courses={courses} titleCategories="Top 10 Alimentos" />
      <Topdez courses={courses} titleCategories="Top 10 Finanças" />
      <Topdez courses={courses} titleCategories="Top 10 Tecnologia" />
      <Footer />
    </div>
  );
};

export default page;
