import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4V1OPyTANhBOQTyPJpdYDovRciITXodU",
  authDomain: "ryder-5fd74.firebaseapp.com",
  projectId: "ryder-5fd74",
  storageBucket: "ryder-5fd74.appspot.com",
  messagingSenderId: "427629095541",
  appId: "1:427629095541:web:7aec909dc45282e340263c",
  measurementId: "G-KM8Q2SDPLN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);