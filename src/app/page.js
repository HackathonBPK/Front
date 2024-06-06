'use client';
import React from 'react';
import { useState } from 'react';
import { tryLogin } from '@/service/auth';

const page = () => {
  window.location.href = '/login';
};

export default page;
