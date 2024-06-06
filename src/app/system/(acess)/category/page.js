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
                <h1 className="text-xl font-bold sm:text-2xl">Lista de Categorias</h1>
                <button 
                    onClick={() => window.location.href="/system/category/new"}
                    aria-label="Adicionar Nova Categoria"
                >
                    <CiCirclePlus alt="Adicionar Nova Categoria" />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.isArray(categories) && categories.map((category, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-4 rounded shadow-md flex justify-between"
                        role="listitem"
                    >
                        <h2 className="text-lg font-semibold">{category.nome}</h2>
                        <button 
                            onClick={() => window.location.href=`/system/category/${category.id}`}
                            aria-label={`Editar Categoria ${category.nome}`}
                        >
                            <CiEdit alt={`Editar Categoria ${category.nome}`} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;