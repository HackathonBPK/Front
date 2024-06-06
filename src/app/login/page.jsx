'use client';
import React from 'react';
import { useState } from 'react';
import { tryLogin } from '@/service/auth';
import { Input } from '@/components/input/input';
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    await tryLogin(formData.email, formData.password).then((response) => {
      if (response.Login) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.result[0].id);
        console.log(response);
        window.location.href = '/dashboard/home';
      }
    });
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="flex  w-3/6 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Logo />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Faça Seu Login!
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm gap-5 flex flex-col">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label text={'Email'} />
                <div className="mt-2">
                  <Input
                    placeholder={'Digite seu email'}
                    type={'email'}
                    handleInputChange={handleInputChange}
                    name={'email'}
                    required={true}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label text={'Senha'} />
                </div>
                <div className="mt-2">
                  <Input
                    placeholder={'Digite sua senha'}
                    type={'password'}
                    name={'password'}
                    handleInputChange={handleInputChange}
                    required={true}
                  />
                </div>
              </div>

              <div>
                <Submit text={'Entrar'} />
              </div>
            </form>
            <a
              className="text-red-500 text-sm font-semibold "
              href="cadastroUsuario"
            >
              Ainda não tem uma conta?
            </a>
          </div>
        </div>
        <div className="bg-[#10171E] w-1/2 lg:flex hidden items-center justify-center">
          <LogoVertical isAuto={true} />
        </div>
      </div>
    </>
  );
};

export default page;
