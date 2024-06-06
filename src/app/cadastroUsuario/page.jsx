'use client';
import React, {useState} from "react";
import { Input } from '@/components/input/input'
import { Label } from '@/components/label/label';
import { Submit } from '@/components/submit/submit';
import { Logo } from '@/components/logo/logo';
import { LogoVertical } from '@/components/logo/logoVertical';


const page = () => {
    const [formData, setFormData] = useState();
    const [isCNPJ, setIsCNPJ] = useState(false); //

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(formData)
    };
    const handleRadioChange = (event) => {
      setIsCNPJ(event.target.value === 'cnpj');
    };//
  

  return(
    <>
    <div className='flex w-full h-screen'>
      <div className='bg-[#10171E] w-2/6 '>
        <LogoVertical isAuto={false} />
      </div>
      <div className='flex  w-4/6 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Logo />
        </div>
          <div className='p-10 rounded-xl bg-[#F3F3F3] shadow-xl shadow-black/30  sm:mx-auto sm:w-full sm:max-w-sm'>
            <h3 className="pb-[20px] text-2xl" >Cadastrar-se</h3>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <Label text={'Nome'} />
                <div className='mt-2'>
                  <Input placeholder={'Digite seu Nome'} type={'text'} handleInputChange={handleInputChange} name={'nome'} required={true}/>
                </div>
              </div>

              <div>
                <Label text={'Email'} />
                <div className='mt-2'>
                  <Input placeholder={'Digite seu email'} type={'text'} handleInputChange={handleInputChange} name={'email'} required={true}/>
                </div>
              </div>
              
              <div className='flex items-center'>
                <Label text={'Tipo de Cadastro'} />
                <div className='ml-4'>
                    <label>
                        <input type="radio" value="cpf" checked={!isCNPJ} onChange={handleRadioChange} />
                        CPF
                    </label>
                    <label className='ml-4'>
                        <input type="radio" value="cnpj" checked={isCNPJ} onChange={handleRadioChange} />
                        CNPJ
                    </label>
                </div>
                </div>
                <div>
                    <Label text={isCNPJ ? 'CNPJ' : 'CPF'} />
                    <div className='mt-2'>
                        <Input placeholder={isCNPJ ? 'Digite seu CNPJ' : 'Digite seu CPF'} type={'text'} handleInputChange={handleInputChange} name={isCNPJ ? 'cnpj' : 'cpf'} required={true} />
                    </div>
                </div>

              <div className='flex items-center justify-between'>
                  <Label text={'Password'} />
              </div>
                <div className='mt-2'>
                  <Input placeholder={'Digite sua senha'} type={'password'} name={'password'} handleInputChange={handleInputChange} required={true} />
                </div>

                <div className='flex items-center justify-between'>
                  <Label text={'Repita sua senha'} />
                </div>
                <div className='mt-2'>
                  <Input placeholder={'Repita sua senha'} type={'password'} name={'password'} handleInputChange={handleInputChange} required={true} />
                </div>

              <div>
                <Submit text={'Cadastrar'} />
              </div>
            </form>
          </div>
      </div>
    </div>
    </>
  );
};

export default page;