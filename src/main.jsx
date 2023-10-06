import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhbh4SNAJn8mummzy0yE62_ICivdxbSJ4",
  authDomain: "test-fcafd.firebaseapp.com",
  projectId: "test-fcafd",
  storageBucket: "test-fcafd.appspot.com",
  messagingSenderId: "1084027142166",
  appId: "1:1084027142166:web:f529a91769137057863537",
  measurementId: "G-HGCTB3ZSEW"
};

const a= {
  buyer: {name: "Mia", phone: 542215542, email: "mia@gmail.com"},
  items: [{id:1, title:"remerased", precio:10}],
  total: 1000,
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)