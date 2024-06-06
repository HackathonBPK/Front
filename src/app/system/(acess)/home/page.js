'use client';
import React, { useEffect, useState } from 'react';
// import CardHome from '@/components/CardHome';
import Loading from '@/components/Loading';

import { checkAuth } from '@/service/auth';

const backToLogin = () => {
  window.location.href = '/system';
};

const page = () => {
  const [isAuthenticaded, setIsAuthenticaded] = useState('loading');
  const checkAuthUseEffect = async () => {
    await checkAuth()
      .then((response) => {
        setIsAuthenticaded(response.auth);
      })
      .catch((error) => {
        backToLogin();
      });
  };

  return <p>Tela de administrador</p>;
};

export default page;
