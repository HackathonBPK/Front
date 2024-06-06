'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '../../components/input/input';
import { Label } from '@/components/label/label';
import { Submit } from '@/components/submit/submit';
import { getCategory } from '@/service/category';
import { createCourse } from '@/service/course';

import Alert from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

import Navbar from '@/components/Navbar';

import ReactInputMask from 'react-input-mask';

const Page = () => {
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);
  const [mode, setMode] = useState('video');
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleInputChangeFile = (event) => {
    const { name } = event.target;
    const value = event.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  console.log(formData);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataPost = new FormData();
    console.log(formData);
    formDataPost.append('titulo', formData.titulo);
    formDataPost.append('descricao', formData.descricao);
    formDataPost.append('duracao', formData.duracao);
    formDataPost.append('categoria_id', formData.categoria_id);
    formDataPost.append('imagem', formData.imagem);
    formDataPost.append('hora_inicio', formData.hora_inicio);
    formDataPost.append('hora_final', formData.hora_final);
    formDataPost.append('qntd_horas', formData.qntd_horas);

    console.log(formData);
    if (
      !formData.titulo ||
      !formData.descricao ||
      !formData.duracao ||
      !formData.categoria_id ||
      !formData.imagem
    ) {
      alert('Preencha todos os campos');
    } else {
      await createCourse(formDataPost);
      setState({ vertical: 'bottom', horizontal: 'left', open: true });
    }
  };

  useEffect(() => {
    getCategory().then((response) => {
      setCategories(response.data.response);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='flex min-h-full justify-center items-center px-6 py-12 bg-gray-50'>
        <div className='max-w-4xl w-full'>
          <div className='bg-white shadow-lg rounded-lg p-8 border border-gray-200'>
            <form className='grid grid-cols-2 gap-6' onSubmit={handleSubmit}>
              <div className='col-span-2'>
                <Label text={'Modo'} />
                <div className='flex items-center'>
                  <input
                    name='transmissao'
                    id='transmissao'
                    type='radio'
                    value='transmissao'
                    checked={mode === 'transmissao'}
                    onChange={handleModeChange}
                    className='form-radio h-5 w-5 text-indigo-600'
                  />
                  <label htmlFor='transmissao' className='ml-2 mr-4'>
                    Transmissão
                  </label>
                  <input
                    type='radio'
                    name='video'
                    id='video'
                    value='video'
                    checked={mode === 'video'}
                    onChange={handleModeChange}
                    className='form-radio h-5 w-5 text-green-600'
                  />
                  <label htmlFor='video' className='ml-2'>
                    Vídeo Aula
                  </label>
                </div>
              </div>
              <div className='col-span-2'>
                <Label text={'Título*'} />
                <Input
                  placeholder={'Insira o Título'}
                  type={'text'}
                  handleInputChange={handleInputChange}
                  name={'titulo'}
                  required={true}
                />
              </div>
              <div className='col-span-2'>
                <Label text={'Descrição*'} />
                <textarea
                  className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                  placeholder='Insira uma descrição'
                  name='descricao'
                  onChange={handleInputChange}
                  rows={4}
                  required={true}
                />
              </div>

              <div>
                <Label text={'Logo do Curso*'} />
                <Input
                  placeholder={'Insira o Logo do Curso'}
                  type={'file'}
                  name={'imagem'}
                  required={true}
                  handleInputChange={handleInputChangeFile}
                />
              </div>
              <div>
                <Label text={'Duração*'} />
                <ReactInputMask
                  mask='99:99'
                  placeholder='Duração'
                  required={true}
                  value={formData.duracao || ''}
                  onChange={handleInputChange}
                  className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                  name='duracao'
                />
              </div>
              <div>
                <Label text={'Categoria*'} />
                <select
                  name='categoria_id'
                  required={true}
                  id='categoria_id'
                  defaultValue={'placeholder'}
                  onChange={handleInputChange}
                  className='block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[1px]   focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow shadow-black/30'
                >
                  <option disabled value='placeholder'>
                    Selecione uma categoria
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.nome}
                    </option>
                  ))}
                </select>
              </div>
              {mode === 'transmissao' && (
                <>
                  <div>
                    <Label text={'Hora Início'} />
                    <ReactInputMask
                      mask='99:99'
                      placeholder='Hora Início'
                      value={formData.hora_inicio || ''}
                      onChange={handleInputChange}
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                      name='hora_inicio'
                    />
                  </div>
                  <div>
                    <Label text={'Hora Final'} />
                    <ReactInputMask
                      mask='99:99'
                      placeholder='Hora Final'
                      value={formData.hora_final || ''}
                      onChange={handleInputChange}
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                      name='hora_final'
                    />
                  </div>
                  <div>
                    <Label text={'Quantidade de Horas'} />

                    <ReactInputMask
                      mask='99:99'
                      placeholder='Quantidade de Horas'
                      value={formData.qntd_horas || ''}
                      onChange={handleInputChange}
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                      name='qntd_horas'
                    />
                  </div>
                </>
              )}
              <div className='col-span-2'>
                <Submit text={'Enviar'} />
              </div>
            </form>
          </div>
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
            severity='success'
            variant='filled'
            sx={{ width: '100%' }}
          >
            Curso criado com sucesso
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default Page;
