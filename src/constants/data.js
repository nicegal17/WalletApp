import React from 'react';

import Avatar1 from '../assets/img/avatar1.png';
import Avatar2 from '../assets/img/avatar2.png';
import Avatar3 from '../assets/img/avatar3.jpg';
import Avatar4 from '../assets/img/avatar4.png';

import JPNSVG from '../assets/svg/japan.svg';
import EURSVG from '../assets/svg/europe.svg';
import IDRSVG from '../assets/svg/indonesia.svg';
import SGDSVG from '../assets/svg/singapore.svg';

import MainSVG from '../assets/svg/main-account.svg';
import VirtualSVG from '../assets/svg/virtual-account.svg';
import AdditionalSVG from '../assets/svg/additional-account.svg';

export const CARDS = [
  {
    id: 1,
    type: 'visa',
    balance: '$ 2, 543.00',
    cardNumber: '4682 7896 8995 7865',
    cardExpiry: '06/30',
  },
  {
    id: 2,
    type: 'visa',
    balance: 1000,
    cardNumber: '4682 7896 8995 7865',
    cardExpiry: '06/30',
  },
  {
    id: 3,
    type: 'visa',
    balance: 1000,
    cardNumber: '4682 7896 8995 7865',
    cardExpiry: '06/30',
  },
  {
    id: 4,
    type: 'visa',
    balance: 1000,
    cardNumber: '4682 7896 8995 7865',
    cardExpiry: '06/30',
  },
];

export const CONTACTS = [
  {
    id: 0,
    name: 'Adam Wisely',
    number: '**** *** 9256',
    image: Avatar1,
  },
  {
    id: 1,
    name: 'Andrew Morison',
    number: '**** *** 9256',
    image: Avatar2,
  },
  {
    id: 2,
    name: 'Andy Robert',
    number: '**** *** 9256',
    image: Avatar3,
  },
  {
    id: 3,
    name: 'Brandon',
    number: '**** *** 9256',
    image: Avatar4,
  },
  {
    id: 4,
    name: 'Charlie Hugo',
    number: '**** *** 9256',
    image: Avatar1,
  },
  {
    id: 5,
    name: 'Chamkin Adam',
    number: '**** *** 9256',
    image: Avatar2,
  },
  {
    id: 6,
    name: 'Daniel Pedro',
    number: '**** *** 9256',
    image: Avatar3,
  },
  {
    id: 7,
    name: 'Diego Silva',
    number: '**** *** 9256',
    image: Avatar3,
  },
  {
    id: 8,
    name: 'Duren Camila',
    number: '**** *** 9256',
    image: Avatar4,
  },
  {
    id: 9,
    name: 'Duren Camila',
    number: '**** *** 9256',
    image: Avatar4,
  },
  {
    id: 10,
    name: 'Duren Camila',
    number: '**** *** 9256',
    image: Avatar4,
  },
  {
    id: 11,
    name: 'Duren Camila',
    number: '**** *** 9256',
    image: Avatar4,
  },
  {
    id: 12,
    name: 'Duren Camila',
    number: '**** *** 9256',
    image: Avatar4,
  },
  {
    id: 13,
    name: 'Duren Camila',
    number: '**** *** 9256',
    image: Avatar4,
  },
  {
    id: 14,
    name: 'Duren Camila',
    number: '**** *** 9256',
    image: Avatar4,
  },
];

export const EXCHANGE_RATE = [
  {
    index: 0,
    currency: 'YEN',
    imageIcon: JPNSVG,
    rate: '113.37/USD',
  },
  {
    index: 1,
    currency: 'EUR',
    imageIcon: EURSVG,
    rate: '0.87/USD',
  },
  {
    index: 2,
    currency: 'IDR',
    imageIcon: IDRSVG,
    rate: '14.500/USD',
  },
  {
    index: 3,
    currency: 'SGD',
    imageIcon: SGDSVG,
    rate: '1.3458/USD',
  },
];

export const ACCOUNTS = [
  {
    index: 0,
    name: 'Main Account',
    account: '**** **** **** 7865',
    icon: <MainSVG />,
  },
  {
    index: 1,
    name: 'Virtual Account',
    account: '**** **** **** 9865',
    icon: <VirtualSVG />,
  },
  {
    index: 2,
    name: 'Additional Account',
    account: '**** **** **** 1458',
    icon: <AdditionalSVG />,
  },
];

// export const SETTINGS = [
//   {
//     id: 0,
//     name: 'Personal Information',
//     icon: PersonalSVG,
//   },
//   {
//     id: 1,
//     name: 'Support Center',
//     icon: SupportSVG,
//   },
//   {
//     id: 2,
//     name: 'Account & Credit Card',
//     icon: AccountSVG,
//   },
//   {
//     id: 3,
//     name: 'Payment Reference',
//     icon: PaymentSVG,
//   },
//   {
//     id: 4,
//     name: 'Security',
//     icon: SecuritySVG,
//   },
//   {
//     id: 5,
//     name: 'Language',
//     icon: LanguageSVG,
//   },
//   {
//     id: 6,
//     name: 'Terms & Condition',
//     icon: TermsSVG,
//   },
// ];
