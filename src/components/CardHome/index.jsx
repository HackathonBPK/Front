'use client';
import React, { useEffect, useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { getAll } from '@/service/category';
const IMAGENSURL = 'http://localhost:3030/';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import * as Dialog from '@radix-ui/react-dialog';
import { postProgress } from '@/service/progress';

const index = ({ titleCardHome, courses, setCourses }) => {
  const [error, setError] = useState();
  const [firstCard, setFirstCard] = useState({});
  const [firstTenCards, setFirstTenCards] = useState([]);
  const [category, setCategory] = useState([]);

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };

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
      setFirstTenCards(courses.slice(0, 5));
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

  const handleSubscribe = async (curso_id) => {
    try {
      await postProgress(curso_id, localStorage.getItem('userId'), 5).then(
        () => {
          setState({ vertical: 'bottom', horizontal: 'left', open: true });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="CardContainer"
      className="w-full min-h-screen h-auto flex flex-col gap-4 p-10 items-center justify-center"
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
      <div className="w-full flex gap-1 p-10 items-center justify-center flex-wrap">
        {firstTenCards.map((card, index) => (
          <Dialog.Root key={index}>
            <Dialog.Trigger asChild>
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                id={card.id}
                className="grow basis-80 hover:scale-125 cursor-pointer h-96 w-1/5 m-0 hover:mx-12 transition-all duration-300"
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
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/60 fixed inset-0" />
              <Dialog.Content className="fixed top-[50%] left-[50%] h-[85vh] w-3/4  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <div>
                  <img
                    className="h-96 w-full object-cover"
                    src={`${IMAGENSURL}${card.imagem}`}
                    alt=""
                  />

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
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={5000}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Inscrição realizada com sucesso
        </Alert>
      </Snackbar>
    </div>
  );
};

export default index;
