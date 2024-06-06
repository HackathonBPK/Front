'use client';
import React, { useState, useRef } from 'react';
const IMAGENSURL = 'http://localhost:3030/';

const Index = ({ titleCategories, courses }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      sliderRef.current.scrollBy({ left: -330, behavior: 'smooth' });
    } else {
      sliderRef.current.scrollBy({ left: 330, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-auto w-full flex flex-col items-center justify-center overflow-hidden relative gap-5 py-10">
      <p className="w-11/12 text-3xl font-bold text-white">{titleCategories}</p>
      <div className="w-full h-[32%] flex items-center justify-center gap-2">
        <button
          className=" bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-600 h-full"
          onClick={() => scroll('left')}
        >
          &lt;
        </button>
        <div className="relative w-10/12 overflow-hidden">
          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-hidden px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="relative min-w-[300px] w-64 h-80 flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 "
              >
                <img
                  src={`${IMAGENSURL}${course.imagem}`}
                  className="w-full h-full object-cover rounded-lg"
                  alt={course.titulo}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-center text-white p-4">
                  <h3 className="text-lg font-bold">{course.titulo}</h3>
                  <p className="text-sm">{course.descricao}</p>
                  <p className="text-sm">duração: {course.duracao}h</p>
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
