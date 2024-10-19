'use client';
import React, { useState, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
const IMAGENSURL = 'http://localhost:3030/';

const Index = ({ titleCategories, courses, topics }) => {
  const sliderRef = useRef(null);

  let filteredCourses = courses;
  if (topics === 'Marcenaria') {
    filteredCourses = courses.filter((course, index) => index < 5);
  } else if (topics === 'Estofados') {
    filteredCourses = courses.filter(
      (course, index) => index >= 5 && index < 10
    );
  }

  const scroll = (direction) => {
    if (direction === 'left') {
      sliderRef.current.scrollBy({ left: -330, behavior: 'smooth' });
    } else {
      sliderRef.current.scrollBy({ left: 330, behavior: 'smooth' });
    }
  };

  const handleSubscribe = async (curso_id) => {
    try {
      if (typeof window !== 'undefined') {
        await postProgress(curso_id, localStorage.getItem('userId'), 5).then(
          () => {
            setState({ vertical: 'bottom', horizontal: 'left', open: true });
          }
        );
      }
    } catch (error) {
      console.log(error);
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
            {filteredCourses.map((course, index) => (
              <Dialog.Root key={index}>
                <Dialog.Trigger asChild>
                  <div
                    key={index}
                    className=" relative min-w-[300px] w-64 h-80 flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 "
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
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="bg-black/60 fixed inset-0" />
                  <Dialog.Content className="fixed top-[50%] left-[50%] h-[85vh] w-3/4  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <div>
                      <img
                        className="h-96 w-full object-cover"
                        src={`${IMAGENSURL}${course.imagem}`}
                        alt=""
                      />

                      <div className="flex flex-col gap-3">
                        <div>
                          <h1 className="text-3xl font-bold">
                            {course.titulo}
                          </h1>
                          <p className="text-lg">{course.descricao}</p>
                        </div>
                        <div>
                          <p className="text-lg">
                            {course.hora_inicio === 'undefined' ||
                            course.hora_inicio === 'null'
                              ? null
                              : course.hora_inicio + 'h'}{' '}
                            {course.hora_inicio === 'undefined' ||
                            course.hora_inicio === 'null'
                              ? null
                              : ' - '}
                            {course.hora_final === 'undefined' ||
                            course.hora_final === 'null'
                              ? null
                              : course.hora_final + 'h'}
                          </p>
                          <p className="text-lg">
                            {course.qntd_horas} Hrs aula
                          </p>
                        </div>
                      </div>
                      <Dialog.Close asChild>
                        <button
                          className="bg-red-600 hover:bg-red-700 p-2 rounded border-0 ring-0 text-white"
                          onClick={() => handleSubscribe(course.id)}
                        >
                          Inscrever-se
                        </button>
                      </Dialog.Close>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
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
