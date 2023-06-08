
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAORy9TEnsxasRVSGR6prfmBo8g1J3GjEk",
  authDomain: "e-commerce-6c4ef.firebaseapp.com",
  projectId: "e-commerce-6c4ef",
  storageBucket: "e-commerce-6c4ef.appspot.com",
  messagingSenderId: "350627828279",
  appId: "1:350627828279:web:b8b9ba92ffd0d3408f25b2",
  measurementId: "G-T45Q9FTHWD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);