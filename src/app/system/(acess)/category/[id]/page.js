'use client'
import React, { useState, useEffect } from 'react';

import { Input } from '@/components/input/input';

import { Submit } from '@/components/submit/submit';
import { getOne, create, update } from '@/service/category';

const Page = ({params}) => {
    console.log(params)
    const [category, setCategory] = useState({});

    useEffect(() => {
        (params.id != 'new') ?
            getOne(params.id)
                .then((response) => {
                    (response?.response[0].id != null) ? setCategory(response.response[0]) : null;
                })
                .catch((error) => {
                    console.error('Erro ao carregar categorias:', error);
                }) : <></>
    }, [params.id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCategory((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        (category.id) ?
            await update(params.id, category).then((response) => {
                console.log(response.mensagem)
                returnPage()
            }) :
            await create(category).then((response) => {
                console.log(response.mensagem)
                returnPage()
            })
    };

    const returnPage = () => {
        window.location.href="/system/category"
    }

    return (
        <div className="container mx-auto py-6">
            <form className="flex gap-5 mb-6 items-center" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold">Nome</h1>
                {console.log(category)}
                <Input 
                    type="text"
                    required={false}
                    name={'nome'}
                    placeholder={"Nome"}
                    handleInputChange={handleInputChange}
                    value={category?.nome}
                />
                <div>
                    <Submit text={'Salvar'} />
                </div>
            </form>
        </div>
    );
};

export default Page;