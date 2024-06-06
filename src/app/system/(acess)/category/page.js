'use client'
import React, { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { getAll } from '@/service/category';

const Page = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAll()
            .then((response) => {
                console.log("AAAAQUI",response)
                setCategories(response.response);
            })
            .catch((error) => {
                console.error('Erro ao carregar categorias:', error);
            });
    }, []);

    return (
        <div className="container mx-auto py-6">
            <div className="flex gap-5 mb-6 items-center">
                <h1 className="text-3xl font-bold">Lista de Categorias</h1>
                <button onClick={() => window.location.href="/system/category/new" }>
                    <CiCirclePlus />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {(typeof categories == 'object') ? categories.map((category, index) => (
                    <div key={index} className="bg-white p-4 mb-2 flex justify-between rounded shadow-md items-center">
                        <h2 className="text-xl font-semibold mr-1">{category.nome}</h2>
                        <button onClick={() => window.location.href="/system/category/"+category.id }>
                            <CiEdit  />
                        </button>
                        {/* <p className="text-gray-700">{category.description}</p> */}
                    </div>
                )) : <></>}
            </div>
        </div>
    );
};

export default Page;