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
    await tryLogin(formData.email, formData.password).then((response) => {
      if (response.Login) {
        localStorage.setItem('token', response.token);
        window.location.href = '/dashboard';
      }
    });
  };

  return (
    <>
    <div className='flex w-full h-screen'>
      <div className='flex  w-3/6 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Logo  />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <Label text={'Email'} />
              <div className='mt-2'>
                <Input placeholder={'Digite seu email'} type={'text'} handleInputChange={handleInputChange} name={'email'} />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <Label text={'Password'} />

              </div>
              <div className='mt-2'>
                <Input placeholder={'Digite sua senha'} type={'password'} name={'password'} handleInputChange={handleInputChange} required={true} />
              </div>
            </div>

            <div>
              <Submit text={'Sign In'} />
            </div>
          </form>
        </div>
      </div>
    <div className='bg-[#10171E] w-1/2'>
      <LogoVertical />
    </div>
    </div>
    </>
  );
};

export default page;
