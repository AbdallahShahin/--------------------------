  // Import the functions you need from the SDKs you need
  import { initializeApp } from 'firebase/app';
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAtpw7j1-ZxHvMsKkO381o95IkkcAmKx0Y",
    authDomain: "vooofortest.firebaseapp.com",
    databaseURL: "https://vooofortest-default-rtdb.firebaseio.com",
    projectId: "vooofortest",
    storageBucket: "vooofortest.appspot.com",
    messagingSenderId: "72763494086",
    appId: "1:72763494086:web:3075e6938d98ec6ed251c7",
    measurementId: "G-ZMTRG8J13Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
