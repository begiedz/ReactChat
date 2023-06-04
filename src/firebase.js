// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBex-5nwUfiSdZfm94go_fBfBa5HI0kI8Y',
    authDomain: 'react-chat-b2b2a.firebaseapp.com',
    projectId: 'react-chat-b2b2a',
    storageBucket: 'react-chat-b2b2a.appspot.com',
    messagingSenderId: '208293012414',
    appId: '1:208293012414:web:260bf9a7555a2fe8790fef',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
