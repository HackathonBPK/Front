'use client'
import React, { useState, useEffect } from 'react';

import Navbar from '@/components/Navbar';

const Quiz = ({params}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [score, setScore] = useState(0);

    const curso = 'teste 2'

    const quizQuestions = [
        {
            pergunta: "Qual o nome dos netos de Rick?",
            alternativaA: "Summer e Jerry",
            alternativaB: "Morry e Beth",
            alternativaC: "Beth e Jerry",
            alternativaD: "Summer e Morty",
            respostaCerta: "Summer e Morty"
        },
        {
            pergunta: "Qual é a realidade do Rick principal da série?",
            alternativaA: "Dimensão Oi",
            alternativaB: "D-878",
            alternativaC: "C-137",
            alternativaD: "Dimensão Quadrada",
            respostaCerta: "C-137"
        }
    ];

    useEffect(() => {
        if (!params.id) {
            router.replace('/dashboard');
        }
    }, [params.id]);

    const handleAnswerClick = (idx, answer) => {
        setSelectedAnswer({...selectedAnswer, [idx]: answer});
    };

    const handleNextQuestion = () => {
        if(quizQuestions[currentQuestion].respostaCerta == selectedAnswer[currentQuestion]){
            setScore(score + 1)
        }

        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div className="min-h-screen overflow-x-hidden h-auto bg-[#10171E] w-full relative top-0 -z-50 px-2">
            <Navbar />
            <div className='flex flex-col h-auto bg-white rounded-md shadow-xl  px-2'>
                {(currentQuestion < quizQuestions.length ) ? (
                    <div className='flex flex-col' >
                        <h1>{curso}</h1>
                        <h1>Pergunta {currentQuestion + 1} / {quizQuestions.length}</h1>
                        <h2>{quizQuestions[currentQuestion].pergunta}</h2>
                        <div className="shadow flex items-center p-2 gap-2">
                            <input
                                type="checkbox"
                                checked={selectedAnswer[currentQuestion] === quizQuestions[currentQuestion].alternativaA}
                                onChange={() => handleAnswerClick(currentQuestion, quizQuestions[currentQuestion].alternativaA)}
                            />
                            <label>{quizQuestions[currentQuestion].alternativaA}</label>
                        </div>
                        <div className="shadow flex items-center p-2 gap-2">
                            <input
                                type="checkbox"
                                checked={selectedAnswer[currentQuestion] === quizQuestions[currentQuestion].alternativaB}
                                onChange={() => handleAnswerClick(currentQuestion, quizQuestions[currentQuestion].alternativaB)}
                            />
                            <label>{quizQuestions[currentQuestion].alternativaB}</label>
                        </div>
                        <div className="shadow flex items-center p-2 gap-2">
                            <input
                                type="checkbox"
                                checked={selectedAnswer[currentQuestion] === quizQuestions[currentQuestion].alternativaC}
                                onChange={() => handleAnswerClick(currentQuestion, quizQuestions[currentQuestion].alternativaC)}
                            />
                            <label>{quizQuestions[currentQuestion].alternativaC}</label>
                        </div>
                        <div className="shadow flex items-center p-2 gap-2">
                            <input
                                type="checkbox"
                                checked={selectedAnswer[currentQuestion] === quizQuestions[currentQuestion].alternativaD}
                                onChange={() => handleAnswerClick(currentQuestion, quizQuestions[currentQuestion].alternativaD)}
                            />
                            <label>{quizQuestions[currentQuestion].alternativaD}</label>
                        </div>

                        <button className='my-2' onClick={handleNextQuestion}>Próxima Pergunta</button>
                    </div>
                ) : (
                    <div>
                        <h1>Parabéns, você concluiu o Quiz!</h1>
                        <p>Sua pontuação: {score} / {quizQuestions.length}</p>
                    </div>
                )}
                </div> 
            {/* <Footer /> */}
        </div>
    );
};

export default Quiz;
