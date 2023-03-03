import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'Payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'Terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'Connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'Plugins', icon: <FaBook />, url: '/developers' },
      { label: 'Libraries', icon: <FaBook />, url: '/developers' },
      { label: 'Help', icon: <FaBook />, url: '/developers' },
      { label: 'Billing', icon: <FaBook />, url: '/developers' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'About', icon: <FaBriefcase />, url: '/company' },
      { label: 'Customers', icon: <FaBriefcase />, url: '/company' },
    ],
  },
];

export default sublinks;