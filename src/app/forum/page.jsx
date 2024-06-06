'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import {
  FaLaptopCode,
  FaBriefcase,
  FaAppleAlt,
  FaBookOpen,
  FaCapsules,
  FaUtensils,
} from 'react-icons/fa';

// Adicionando cores diretamente nos ícones
const icons = {
  'Tecnologia': {
    icon: <FaLaptopCode className="text-3xl" />,
    bgColor: 'bg-green-500',
  },
  'Gestão': {
    icon: <FaBriefcase className="text-3xl" />,
    bgColor: 'bg-yellow-400',
  },
  'Alimentos': {
    icon: <FaUtensils className="text-3xl" />,
    bgColor: 'bg-violet-400',
  },
  'Educação': {
    icon: <FaBookOpen className="text-3xl" />,
    bgColor: 'bg-blue-400',
  },
  'Farmácia': {
    icon: <FaCapsules className="text-3xl" />,
    bgColor: 'bg-red-500',
  },
};

const defaultCategories = [
  {
    title: 'Tecnologia',
    topics: 13784,
    postsPerWeek: 12,
    lastPost: 3,
  },
  {
    title: 'Gestão',
    topics: 128466,
    postsPerWeek: 268,
    lastPost: 74,
  },
  {
    title: 'Alimentos',
    topics: 56224,
    postsPerWeek: 135,
    lastPost: 35,
  },
  {
    title: 'Educação',
    topics: 20071,
    postsPerWeek: 44,
    lastPost: 8,
  },
  {
    title: 'Farmácia',
    topics: 16666,
    postsPerWeek: 52,
    lastPost: 2,
  },
];

const CategoryCard = ({ category }) => {
  const { icon, bgColor } = icons[category.title] || {
    icon: <FaAppleAlt className="text-3xl" />,
    bgColor: 'bg-gray-400',
  };

  return (
    <div className="flex w-full items-center bg-white rounded-md shadow-xl lg:h-32 h-16 ">
      <div
        className={`lg:p-4 p-2 h-full flex justify-center items-center w-1/6 text-white ${bgColor} rounded-md`}
      >
        {icon}
      </div>
      <div className="ml-4 flex-1 flex justify-between">
        <div className="flex items-center justify-center">
          <h2 className="lg:text-xl text-sm font-bold lg:p-2 p-1">
            {category.title}
          </h2>
        </div>
        <div className="flex justify-center items-center divide-x divide-gray-200">
          <div className=" flex items-center justify-center lg:px-4 px-2 :text-right flex-col">
            <p className="flex items-center justify-center lg:text-xl text-sm font-bold">
              {category.topics}
            </p>
            <p className="text-xs items-center justify-center text-gray-500">
              tópicos
            </p>
          </div>
          <div className="lg:px-4 px:2 text-right flex-col items-center justify-center">
            <p className="flex items-center text-center justify-center lg:text-xl text-sm font-bold">
              {category.postsPerWeek}
            </p>
            <p className="text-xs text-center text-gray-500">
              na última semana
            </p>
          </div>
          <div className=" flex items-center justify-center px-4 text-right flex-col">
            <p className="flex text-center items-center justify-center lg:text-xl text-sm font-bold">
              {category.lastPost}
            </p>
            <p className="text-xs text-center text-gray-500">sem resposta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="min-w-screen w-full flex flex-col">
      <Navbar />
      <div className="flex min-h-full w-full justify-center items-center lg:px-6 px-3 lg:py-12 py-6 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
