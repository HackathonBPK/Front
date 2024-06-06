'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getCourseById } from '@/service/course';
import { getByUserId } from '@/service/progress';
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const IMAGENSURL = 'http://localhost:3030/';

const page = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getByUserId(localStorage.getItem('userId')).then((response) => {
      response.response.map((item) => {
        getCourseById(item.curso_id).then((response) => {
          setCards((prevCards) => {
            const newCards = response.data.data.filter(
              (newCard) =>
                !prevCards.some(
                  (existingCard) => existingCard.id === newCard.id
                )
            );
            return [...prevCards, ...newCards];
          });
        });
      });
    });
  }, []);
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="w-full flex justify-center items-center flex-wrap p-10 ">
        {cards.map((card, index) => (
          <div
            id={card.id}
            className="hover:scale-105 cursor-pointer h-96 w-1/5 m-0 hover:shadow-lg hover:shadow-white transition-all duration-300"
          >
            <img
              className="w-full h-full object-cover"
              src={`${IMAGENSURL}${card.imagem}`}
              alt=""
            />
            <div
              className={`transition-colors duration-300 absolute top-0 z-10 text-white bg-gradient-to-t from-black to-black/10 w-full h-full p-5 gap-3 flex flex-col items-start justify-end ${
                card.showDetails ? 'flex' : 'hidden'
              }`}
            >
              <div
                className={`w-full items-center justify-start gap-3 pr-5 ${
                  card.showDetails ? 'flex' : 'hidden'
                }`}
              >
                <div className="rounded-full bg-neutral-300 p-2 w-auto flex items-center justify-center">
                  <FaPlay className="text-xl text-black text-center" />
                </div>
                <p className="text-lg font-bold">{card.titulo}</p>
              </div>
              <div
                className={`flex-col items-start justify-center gap-1 ${
                  card.showDetails ? 'flex' : 'hidden'
                }`}
              >
                <p className="text-sm">{card.qntd_horas} aulas</p>
                <p className="text-sm">
                  {card.hora_inicio === 'undefined' ||
                  card.hora_inicio === 'null'
                    ? null
                    : card.hora_inicio + 'h'}{' '}
                  {card.hora_inicio === 'undefined' ||
                  card.hora_inicio === 'null'
                    ? null
                    : ' - '}
                  {card.hora_final === 'undefined' || card.hora_final === 'null'
                    ? null
                    : card.hora_final + 'h'}
                </p>
              </div>
              <div
                className={`${card.showDetails ? 'flex' : 'hidden'} flex-wrap`}
              >
                <span className="flex grow basis-7"></span>{' '}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
