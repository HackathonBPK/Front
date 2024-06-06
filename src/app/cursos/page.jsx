'use client';
import React from 'react';
import { useState } from 'react';
import { tryLogin } from '@/service/auth';
import { Input } from '../../components/input/input'
import { Label } from '@/components/label/label';
import { Submit } from '@/components/submit/submit';
import { Logo } from '@/components/logo/logo';
import { LogoVertical } from '@/components/logo/logoVertical';

const page = () => {
    const [formData, setFormData] = useState();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    console.log(formData);
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(formData);

    };

    return (
        <>
            <div className='flex min-h-full justify-center px-6 py-12 lg:px-8'>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <Label text={'Titulo'} />
                            <div className='mt-2'>
                                <Input placeholder={'Insira o Titulo'} type={'text'} handleInputChange={handleInputChange} name={'titulo'} />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <Label text={'Descricao'} />

                            </div>
                            <div className='mt-2'>
                                <Input placeholder={'Insira uma descricao'} type={'text'} name={'descricao'} handleInputChange={handleInputChange} />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <Label text={'Duracao'} />
                            </div>
                            <div className='mt-2'>
                                <Input placeholder={'Insira uma duracao'} type={'text'} name={'duracao'} handleInputChange={handleInputChange} />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <Label text={'Categoria'} />
                            </div>
                            <div className='mt-2'>
                                <Input placeholder={'Insira uma categoria'} type={'number'} name={'categoria_id'} handleInputChange={handleInputChange} />
                            </div>
                        </div>

                        {/* <div>
                            <div className='flex items-center justify-between'>
                                <Label text={'Data de'} />
                            </div>
                            <div className='mt-2'>
                                <Input placeholder={'Data de Criacao'} type={'text'} name={'criado_em'} handleInputChange={handleInputChange} />
                            </div>
                        </div> */}

                        <div>
                            <div className='flex items-center justify-between'>
                                <Label text={'Logo do Curso'} />
                            </div>
                            <div className='mt-2'>
                                <Input placeholder={'Insira o Logo do Curso'} type={'file'} name={'imagem'} handleInputChange={handleInputChange} />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <Label text={'Hora Inicio'} />
                            </div>
                            <div className='mt-2'>
                                <Input placeholder={'Hora Inicio'} type={'text'} name={'hora_inicio'} handleInputChange={handleInputChange} />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <Label text={'Hora Final'} />
                            </div>
                            <div className='mt-2'>
                                <Input placeholder={'Hora Final'} type={'text'} name={'hora_final'} handleInputChange={handleInputChange} />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <Label text={'Quantidade de Horas'} />
                            </div>
                            <div className='mt-2'>
                                <Input placeholder={'Quantidade de Horas'} type={'text'} name={'qntd_horas'} handleInputChange={handleInputChange} />
                            </div>
                        </div>


                        <div>
                            <Submit text={'Enviar'} />
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default page;
