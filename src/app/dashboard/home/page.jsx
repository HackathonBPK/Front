'use client';
import React, { useEffect, useState } from 'react';
import CardHome from '@/components/CardHome';
import Topdez from '@/components/Topdez';

import { getAllCourses } from '@/service/course.js';

const page = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getAllCourses().then((response) => {
      setCourses(response.data.data);
    });
  }, []);

  console.log(courses);

  return (
    <div className="min-h-screen h-auto bg-[#10171E] w-full relative top-0 -z-50">
        
      <CardHome
        setCourses={setCourses}
        courses={courses}
        titleCardHome="Mais assistidos da Semana"
      />
      <div className="w-full h-screen absolute -z-30 bg-gradient-to-t from-transparent to-black"></div>
      <Topdez courses={courses} titleCategories="Top 10 entretenimento" />
      <Topdez courses={courses} titleCategories="Top 10 Marketing" />
      <Topdez courses={courses} titleCategories="Top 10 Marketing" />
      <Topdez courses={courses} titleCategories="Top 10 Marketing" />
      <Topdez courses={courses} titleCategories="Top 10 Marketing" />
    </div>
  );
};

export default page;
