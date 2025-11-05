// Importa las funciones que necesitas de los SDKs
// NOTA: Estas URL son para la versión 9 (modular) de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB11fwCT25q8QAmmVrtQYVk2DBycLCM--g",
  authDomain: "maquetacion-gzbl.firebaseapp.com",
  projectId: "maquetacion-gzbl",
  storageBucket: "maquetacion-gzbl.firebasestorage.app",
  messagingSenderId: "384557777640",
  appId: "1:384557777640:web:7264eee159d22c5082ff5d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar los servicios que usaremos en otros archivos
export const auth = getAuth(app);
export const db = getFirestore(app);