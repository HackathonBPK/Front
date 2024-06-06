'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getCourseById } from '@/service/course';
import { getByUserId, removeProgressByCourse } from '@/service/progress';
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { IoEyeSharp } from 'react-icons/io5';
import * as Dialog from '@radix-ui/react-dialog';
const IMAGENSURL = 'http://localhost:3030/';

const page = () => {
  const [cards, setCards] = useState([]);
  console.log(cards);
  const handleLike = (cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, isLiked: !card.isLiked };
      } else {
        return card;
      }
    });

    setCards(updatedCards);
  };
  const handleWatch = (cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, isWatched: !card.isWatched };
      } else {
        return card;
      }
    });

    setCards(updatedCards);
  };
  const handleClose = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
    removeProgressByCourse(cardId).then((response) => {
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
    });
  };

  function generateRandomStyle() {
    let width = Math.floor(Math.random() * 100) + 1;
    return { width: width + '%' };
  }

  // useEffect to fetch data initially
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
    <div className="flex flex-col justify-between items-center min-h-screen h-auto">
      <Navbar />
      <div className="w-2/3 flex-wrap flex justify-center items-center p-10 gap-4 my-10 ">
        {cards.map((card, index) => (
          <Dialog.Root key={index}>
            <Dialog.Trigger asChild>
              <div
                key={index}
                id={card.id}
                className="basis-80 grow hover:scale-105 cursor-pointer h-96 w-1/5 m-0 hover:shadow-lg hover:shadow-white transition-all duration-300 relative"
              >
                <img
                  className="w-full h-full object-cover"
                  src={`${IMAGENSURL}${card.imagem}`}
                  alt=""
                />
                <div className="w-full h-2 bg-neutral-600">
                  <div
                    style={generateRandomStyle()}
                    className="h-2 bg-red-600"
                  ></div>
                </div>
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
                      {card.hora_final === 'undefined' ||
                      card.hora_final === 'null'
                        ? null
                        : card.hora_final + 'h'}
                    </p>
                  </div>
                  <div
                    className={`${
                      card.showDetails ? 'flex' : 'hidden'
                    } flex-wrap`}
                  >
                    <span className="flex grow basis-7"></span>{' '}
                  </div>
                </div>
              </div>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/60 fixed inset-0" />
              <Dialog.Content className="fixed  z-40 top-[50%] left-[50%] h-[85vh] w-3/4  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <div className="w-full">
                  <img
                    className="h-96 w-full object-cover"
                    src={`${IMAGENSURL}${card.imagem}`}
                    alt=""
                  />
                  <div className="w-full h-2 bg-neutral-600">
                    <div
                      style={generateRandomStyle()}
                      className="h-2 bg-red-600"
                    ></div>
                  </div>
                  <div className="flex h-full p-10">
                    <div className="w-1/6">
                      <div className="flex flex-col gap-3">
                        <div>
                          <h1 className="text-3xl font-bold">{card.titulo}</h1>
                          <p className="text-lg">{card.descricao}</p>
                        </div>
                        <div>
                          <p className="text-lg">
                            {card.hora_inicio === 'undefined' ||
                            card.hora_inicio === 'null'
                              ? null
                              : card.hora_inicio + 'h'}{' '}
                            {card.hora_inicio === 'undefined' ||
                            card.hora_inicio === 'null'
                              ? null
                              : ' - '}
                            {card.hora_final === 'undefined' ||
                            card.hora_final === 'null'
                              ? null
                              : card.hora_final + 'h'}
                          </p>
                          <p className="text-lg">{card.qntd_horas} Hrs aula</p>
                        </div>
                      </div>

                      <Dialog.Close asChild>
                        <button
                          className="bg-red-600 hover:bg-red-700 p-2 rounded border-0 ring-0 text-white"
                          onClick={() => handleSubscribe(card.id)}
                        >
                          Inscrever-se
                        </button>
                      </Dialog.Close>
                    </div>
                    <div className="w-5/6 h-72">
                      <div className="h-12 w-full bg-neutral-200 flex items-center justify-between px-5">
                        <p>Aula 1 - Introdução</p>
                        <div className="flex flex-row-reverse gap-3">
                          <button
                            type="button"
                            className={`rounded-full p-2 flex items-center justify-center hover:scale-125 hover:bg-red-300  border-black border-2 transition-all duration-500 ${
                              card.isLiked ? 'bg-red-600' : ''
                            }`}
                            onClick={() => handleLike(card.id)}
                          >
                            <FaHeart className="text-xl text-black" />
                          </button>
                          <button
                            type="button"
                            className={`rounded-full p-2 flex items-center justify-center hover:scale-125 hover:bg-blue-300  border-black border-2 transition-all duration-500 ${
                              card.isWatched ? 'bg-blue-600' : ''
                            }`}
                            onClick={() => handleWatch(card.id)}
                          >
                            <IoEyeSharp className="text-xl text-black" />
                          </button>
                        </div>
                      </div>
                      <div className="h-12 w-full bg-neutral-200 flex items-center justify-between px-5">
                        <p>Aula 2 - Conceitos</p>
                        <div className="flex flex-row-reverse gap-3">
                          <button
                            type="button"
                            className={`rounded-full p-2 flex items-center justify-center hover:scale-125 hover:bg-red-300  border-black border-2 transition-all duration-500 ${
                              card.isLiked2 ? 'bg-red-600' : ''
                            }`}
                            onClick={() => handleLike(card.id)}
                          >
                            <FaHeart className="text-xl text-black" />
                          </button>
                          <button
                            type="button"
                            className={`rounded-full p-2 flex items-center justify-center hover:scale-125 hover:bg-blue-300  border-black border-2 transition-all duration-500 ${
                              card.isWatched2 ? 'bg-blue-600' : ''
                            }`}
                            onClick={() => handleWatch(card.id)}
                          >
                            <IoEyeSharp className="text-xl text-black" />
                          </button>
                        </div>
                      </div>
                      <div className="h-12 w-full bg-neutral-200 flex items-center justify-between px-5">
                        <p>Aula 3 - Prática</p>
                        <div className="flex flex-row-reverse gap-3">
                          <button
                            type="button"
                            className={`rounded-full p-2 flex items-center justify-center hover:scale-125 hover:bg-red-300  border-black border-2 transition-all duration-500 ${
                              card.isLiked3 ? 'bg-red-600' : ''
                            }`}
                            onClick={() => handleLike(card.id)}
                          >
                            <FaHeart className="text-xl text-black" />
                          </button>
                          <button
                            type="button"
                            className={`rounded-full p-2 flex items-center justify-center hover:scale-125 hover:bg-blue-300  border-black border-2 transition-all duration-500 ${
                              card.isWatched3 ? 'bg-blue-600' : ''
                            }`}
                            onClick={() => handleWatch(card.id)}
                          >
                            <IoEyeSharp className="text-xl text-black" />
                          </button>
                        </div>
                      </div>
                      <div className="h-12 w-full bg-neutral-200 flex items-center justify-between px-5">
                        <p>Aula 4 - Conclusão</p>
                        <div className="flex flex-row-reverse gap-3">
                          <button
                            type="button"
                            className={`rounded-full p-2 flex items-center justify-center hover:scale-125 hover:bg-red-300  border-black border-2 transition-all duration-500 ${
                              card.isLiked4 ? 'bg-red-600' : ''
                            }`}
                            onClick={() => handleLike(card.id)}
                          >
                            <FaHeart className="text-xl text-black" />
                          </button>
                          <button
                            type="button"
                            className={`rounded-full p-2 flex items-center justify-center hover:scale-125 hover:bg-blue-300  border-black border-2 transition-all duration-500 ${
                              card.isWatched4 ? 'bg-blue-600' : ''
                            }`}
                            onClick={() => handleWatch(card.id)}
                          >
                            <IoEyeSharp className="text-xl text-black" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`absolute bottom-3 right-3 rounded-full p-2 flex items-center justify-center hover:scale-125  border-black border-2 transition-all duration-500 `}
                      onClick={() => handleClose(card.id)}
                    >
                      <IoClose className="text-3xl text-black" />
                    </button>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
