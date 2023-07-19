import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAh3WvrCCSVVN6BTfQvJ2uqe7JjJBu6aKk",
  authDomain: "e-commerce-54ec8.firebaseapp.com",
  projectId: "e-commerce-54ec8",
  storageBucket: "e-commerce-54ec8.appspot.com",
  messagingSenderId: "128432139371",
  appId: "1:128432139371:web:819273d7ed7358786c152e",
  measurementId: "G-TKGTQZSDCW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);