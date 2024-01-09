// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDS0MO9Cio7pBby-EGslOuXpIQ2Mrg2M-M',
//   authDomain: 'blog-7ec53.firebaseapp.com',
//   projectId: 'blog-7ec53',
//   storageBucket: 'blog-7ec53.appspot.com',
//   messagingSenderId: '723911341373',
//   appId: '1:723911341373:web:50bccb87abeaaaf8f48154'
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: 'dummy-7a2a9.appspot.com',
  messagingSenderId: process.env.MESSENGER_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
