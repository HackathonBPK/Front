'use client'
import React, { useState, useEffect } from 'react';
import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { getAll } from '@/service/quiz';

const Page = () => {
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        getAll()
            .then((response) => {
                setQuiz(response.response);
            })
            .catch((error) => {
                console.error('Erro ao carregar quiz:', error);
            });
    }, []);

    return (
        <div className="container mx-auto py-6">
            <div className="flex gap-5 mb-6 items-center">
                <h1 className="text-xl font-bold sm:text-2xl">Lista de Quiz</h1>
                <button 
                    onClick={() => window.location.href="/system/quiz/new"}
                    aria-label="Adicionar Novo Quiz"
                >
                    <CiCirclePlus alt="Adicionar Novo Quiz" />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.isArray(quiz) && quiz.map((qz, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-4 rounded shadow-md flex justify-between"
                        role="listitem"
                    >
                        <h2 className="text-lg font-semibold">{qz.pergunta}</h2>
                        <button 
                            onClick={() => window.location.href=`/system/quiz/${qz.id}`}
                            aria-label={`Editar Quiz ${qz.pergunta}`}
                        >
                            <CiEdit alt={`Editar Quiz ${qz.pergunta}`} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;