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
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    getAllCourses().then((response) => {
      setCourses(response.data.data);
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden h-auto bg-[#cee1f4] w-full relative top-0 -z-50 pt-20">
      <Navbar />
      <CardHome
        setCourses={setCourses}
        courses={courses}
        titleCardHome="Modulos Marcenaria"
      />
      <div className="w-full h-auto my-10 mb-20 ">
        <Marquee />
      </div>
      <div className="w-full h-screen absolute -translate-y-80 -z-30 bg-gradient-to-t from-transparent to-black"></div>
      <Topdez
        topics="Marcenaria"
        courses={courses}
        titleCategories="Modulos do curso de Marcenaria"
      />
      <Topdez
        topics="Estofados"
        courses={courses}
        titleCategories="Modulos de Estafados"
      />
      {/* <Topdez courses={courses} titleCategories="Top 10 Alimentos" /> */}
      <Footer />
    </div>
  );
};

export default page;
