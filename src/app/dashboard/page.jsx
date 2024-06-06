'use client';
import React, { useEffect, useState } from 'react';
import Topdez from '@/components/Topdez';

import { checkAuth } from '@/service/auth';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';

const backToLogin = () => {
  window.location.href = '/login';
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
  useEffect(() => {
    checkAuthUseEffect();
  }, []);

  if (isAuthenticaded == 'Authorized') {
    return (
      <>
        <Navbar />
        <Topdez />
      </>
    );
  }
  if (isAuthenticaded == 'Unauthorized') {
    backToLogin();
  }
  return <Loading />;
};

export default page;
