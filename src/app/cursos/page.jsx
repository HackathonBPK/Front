'use client';
import React, { useState } from 'react';
import { Input } from '../../components/input/input';
import { Label } from '@/components/label/label';
import { Submit } from '@/components/submit/submit';

const Page = () => {
    const [formData, setFormData] = useState({});
    const [mode, setMode] = useState('video');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleModeChange = (event) => {
        setMode(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className='flex min-h-full justify-center items-center px-6 py-12 bg-gray-50'>
            <div className='max-w-4xl w-full'>
                <div className='bg-white shadow-lg rounded-lg p-8 border border-gray-200'>
                    <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
                        <div className='col-span-2'>
                            <Label text={'Modo'} />
                            <div className='flex items-center'>
                                <input
                                    type='radio'
                                    value='transmissao'
                                    checked={mode === 'transmissao'}
                                    onChange={handleModeChange}
                                    className='form-radio h-5 w-5 text-indigo-600'
                                /><span className='ml-2 mr-4'>Transmissão</span>
                                <input
                                    type='radio'
                                    value='video'
                                    checked={mode === 'video'}
                                    onChange={handleModeChange}
                                    className='form-radio h-5 w-5 text-green-600'
                                /><span className='ml-2'>Vídeo Aula</span>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <Label text={'Título'} />
                            <Input placeholder={'Insira o Título'} type={'text'} handleInputChange={handleInputChange} name={'titulo'} />
                        </div>
                        <div className='col-span-2'>
                            <Label text={'Descrição'} />
                            <textarea
                                className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                                placeholder='Insira uma descrição'
                                name='descricao'
                                onChange={handleInputChange}
                                rows={4}
                            />
                        </div>

                        <div>
                            <Label text={'Logo do Curso'} />
                            <Input placeholder={'Insira o Logo do Curso'} type={'file'} name={'imagem'} handleInputChange={handleInputChange} />
                        </div>
                        <div>
                            <Label text={'Duração'} />
                            <Input placeholder={'Insira uma duração'} type={'text'} name={'duracao'} handleInputChange={handleInputChange} />
                        </div>
                        <div>
                            <Label text={'Categoria'} />
                            <Input placeholder={'Insira uma categoria'} type={'number'} name={'categoria_id'} handleInputChange={handleInputChange} />
                        </div>
                        {mode === 'transmissao' && (
                            <>
                                <div>
                                    <Label text={'Hora Início'} />
                                    <Input placeholder={'Hora Início'} type={'text'} name={'hora_inicio'} handleInputChange={handleInputChange} />
                                </div>
                                <div>
                                    <Label text={'Hora Final'} />
                                    <Input placeholder={'Hora Final'} type={'text'} name={'hora_final'} handleInputChange={handleInputChange} />
                                </div>
                                <div>
                                    <Label text={'Quantidade de Horas'} />
                                    <Input placeholder={'Quantidade de Horas'} type={'text'} name={'qntd_horas'} handleInputChange={handleInputChange} />
                                </div>
                            </>
                        )}
                        <div className='col-span-2'>
                            <Submit text={'Enviar'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
