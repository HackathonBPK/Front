'use client'
import React, { useState, useEffect } from 'react';

import { Input } from '@/components/input/input';

import { Submit } from '@/components/submit/submit';
import { getOne, create, update } from '@/service/quiz';
import { getAllCourses } from '@/service/course';

const Page = ({params}) => {
    console.log(params)
    const [quiz, setQuiz] = useState({});
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        getAllCourses().then(response => setCursos(response.data.data)).catch((error) => {
            console.error('Erro ao carregar categorias:', error);
        });

        (params.id != 'new') ?
            getOne(params.id)
                .then((response) => {
                    (response?.response[0].id != null) ? setQuiz(response.response[0]) : null;
                })
                .catch((error) => {
                    console.error('Erro ao carregar categorias:', error);
                }) : <></>
    }, [params.id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setQuiz((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // console.log(quiz)
        (quiz.id) ?
            await update(params.id, quiz).then((response) => {
                console.log(response.mensagem)
                returnPage()
            }) :
            await create(quiz).then((response) => {
                console.log(response.mensagem)
                returnPage()
            })
    };

    const returnPage = () => {
        window.location.href="/system/quiz"
    }

    return (
        <div className="container mx-auto py-6">
            <form className="flex flex-col gap-5 mb-6 items-center" onSubmit={handleSubmit}>
                <div>
                    <h1 className="text-3xl font-bold">Pergunta</h1>
                    <Input 
                        type="text"
                        required={false}
                        name={'pergunta'}
                        placeholder={"Pergunta"}
                        handleInputChange={handleInputChange}
                        value={quiz?.nome}
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Alternativa A</h1>
                    <Input 
                        type="text"
                        required={false}
                        name={'alternativaA'}
                        placeholder={"Alternativa A"}
                        handleInputChange={handleInputChange}
                        value={quiz?.alternativaA}
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold">Alternativa B</h1>
                    <Input 
                        type="text"
                        required={false}
                        name={'alternativaB'}
                        placeholder={"Alternativa B"}
                        handleInputChange={handleInputChange}
                        value={quiz?.alternativaB}
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold">Alternativa C</h1>
                    <Input 
                        type="text"
                        required={false}
                        name={'alternativaC'}
                        placeholder={"Alternativa C"}
                        handleInputChange={handleInputChange}
                        value={quiz?.alternativaC}
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold">Alternativa D</h1>
                    <Input 
                        type="text"
                        required={false}
                        name={'alternativaD'}
                        placeholder={"Alternativa D"}
                        handleInputChange={handleInputChange}
                        value={quiz?.alternativaD}
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold">Alternativa Correta</h1>
                    <select onChange={(e) =>{
                        if(quiz[e.target.value] && quiz[e.target.value] !== 'undefined' ){
                            setQuiz((prevFormData) => ({ ...prevFormData, respostaCerta: quiz[e.target.value] }))
                        }
                    }
                    }>
                        <option value="alternativaA" selected={quiz.respostaCerta === 'alternativaA'}>
                            Alternativa A
                        </option>
                        <option value="alternativaB" selected={quiz.respostaCerta === 'alternativaB'}>
                            Alternativa B
                        </option>
                        <option value="alternativaC" selected={quiz.respostaCerta === 'alternativaC'}>
                            Alternativa C
                        </option>
                        <option value="alternativaD" selected={quiz.respostaCerta === 'alternativaD'}>
                            Alternativa D
                        </option>
                    </select>
                </div>


                <div>
                    <h1 className="text-3xl font-bold">Curso Referente</h1>
                    <select
                        onChange={(e) => {
                            setQuiz((prevFormData) => ({ ...prevFormData, curso_id: e.target.value }))
                        }}
                        value={quiz.curso_id} // Adicionando o atributo value para sincronizar o valor do select com o estado quiz.curso_id
                    >
                        {cursos.map(elm => (
                            <option key={elm.id} value={elm.id}>
                                {elm.titulo}
                            </option>
                        ))}
                    </select>
                </div>


                <div>
                    <Submit text={'Salvar'} />
                </div>
            </form>
        </div>
    );
};

export default Page;