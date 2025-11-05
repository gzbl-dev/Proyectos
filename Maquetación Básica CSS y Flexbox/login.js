// Importamos nuestros servicios y funciones de Firebase
import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// 1. Seleccionar el formulario
const loginForm = document.getElementById('login-form');

// 2. Añadir "escuchador" para 'submit'
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevenimos el envío por defecto

    // 3. Obtenemos valores
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
        // 4. Autenticamos al usuario con Firebase Auth
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("Usuario autenticado:", user.uid);

        // 5. Guardamos el log de entrada en Firestore (como pide la tarea)
        // Creamos una nueva colección llamada "logs_entrada"
        await addDoc(collection(db, "logs_entrada"), {
            userId: user.uid,
            email: user.email,
            fecha: serverTimestamp() // Firebase pone la hora del servidor
        });

        alert('¡Inicio de sesión correcto! Bienvenido.');
        
        // 6. Redirigimos a la página principal
        window.location.href = 'index.html';

    } catch (error) {
        // Manejamos errores
        console.error("Error al iniciar sesión:", error.message);
        alert("Error: " + error.message);
    }
});