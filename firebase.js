
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPTBi4D5n6k6_sVMD40avOiX1lmXHMMSA",
  authDomain: "the-hidden-one.firebaseapp.com",
  databaseURL: "https://the-hidden-one-default-rtdb.firebaseio.com",
  projectId: "the-hidden-one",
  storageBucket: "the-hidden-one.firebasestorage.app",
  messagingSenderId: "936466788101",
  appId: "1:936466788101:web:58ffb3807c8d999667916c",
  measurementId: "G-073X2W07X9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

