'use client';
import React, { useEffect, useState } from 'react';
import Topdez from '@/components/Topdez';

import { checkAuth } from '@/service/auth';
import Loading from '@/components/Loading';

const user = {
  name: 'Vitor Dallanol',
  email: '',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const handleAuth = async () => {
  await checkAuth().then((response) => {
    console.log(response);
  });
};

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
    return <Topdez />;
  }
  if (isAuthenticaded == 'Unauthorized') {
    backToLogin();
  }
  return <Loading />;
};

export default page;
