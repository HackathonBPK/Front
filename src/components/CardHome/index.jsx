'use client';
import React, { useEffect, useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { getAll } from '@/service/category';
const IMAGENSURL = 'http://localhost:3030/';

const index = ({ titleCardHome, courses, setCourses }) => {
  const [hover, setHover] = useState('hidden');
  const [firstCard, setFirstCard] = useState({});
  const [firstTenCards, setFirstTenCards] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (courses.length > 0) {
      setFirstCard(courses[0]); // Set the first card directly
    }
  }, [courses]);

  useEffect(() => {
    getAll().then((response) => {
      setCategory(response.response);
    });
  }, []);
  console.log(category);
  const intervalRef = useRef(null);
  useEffect(() => {
    let currentCardIndex = 1; // Index of the current card

    // Start the interval
    intervalRef.current = setInterval(() => {
      if (currentCardIndex < 5) {
        // Only cycle through the first 5 cards
        setFirstCard(courses[currentCardIndex]);
        currentCardIndex++;
      } else {
        currentCardIndex = 0; // Reset to the beginning
        setFirstCard(courses[0]); // Show the first card again
      }
    }, 3000); // Update every 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalRef.current);
  }, [courses]);

  useEffect(() => {
    if (courses.length > 0) {
      setFirstTenCards(courses.slice(0, 30));
    }
  }, [courses]);

  const handleMouseEnter = (index) => {
    const updatedCardWeek = [...courses];
    updatedCardWeek[index].showDetails = true;
    setCourses(updatedCardWeek);
  };

  const handleMouseLeave = (index) => {
    const updatedCardWeek = [...courses];
    updatedCardWeek[index].showDetails = false;
    setCourses(updatedCardWeek);
  };

  return (
    <div
      id="CardContainer"
      className="w-full h-screen flex flex-col gap-4 p-10 items-center justify-center"
    >
      <div className="w-full h-screen absolute -z-10 top-0 ">
        <div className="bg-gradient-to-t from-black to-black/50 w-full h-full absolute top-0"></div>
        <img
          className="w-full h-full object-cover object-center "
          src={`${IMAGENSURL}${firstCard.imagem}`}
          alt=""
        />
      </div>
      <p className="w-11/12 text-5xl font-bold text-white">{titleCardHome}</p>
      <div className="w-full flex gap-1 p-10 items-center justify-center ">
        {firstTenCards.map((card, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            id={card.id}
            className="hover:scale-125 cursor-pointer h-96 w-1/5 m-0 hover:mx-12 transition-all duration-300"
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
                <span className="flex grow basis-7 ">
                  <p className="font-semibold text-base">
                    {
                      category.find(
                        (categoria) => categoria.id === card.categoria_id
                      )?.nome
                    }
                  </p>
                </span>
                <span className="flex grow basis-7"></span>{' '}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
