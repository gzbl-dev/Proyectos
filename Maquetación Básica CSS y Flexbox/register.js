// Importamos nuestros servicios (auth, db) y funciones de Firebase
import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// 1. Seleccionar el formulario
const registerForm = document.getElementById('register-form');

// 2. Añadir un "escuchador" para el evento 'submit'
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevenimos que el formulario se envíe por defecto

    // 3. Obtenemos los valores de los inputs
    const nombre = registerForm.name.value;
    const email = registerForm.email.value;
    const direccion = registerForm.address.value;
    const fechaNacimiento = registerForm.birthdate.value;
    const password = registerForm.password.value;
    // El 'confirm-password' ya lo validas con tu JS, ¡perfecto!

    try {
        // 4. Creamos el usuario en Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("Usuario registrado en Auth:", user.uid);

        // 5. Guardamos los datos extra en Firestore
        // Usamos el UID (ID Único) del usuario como ID del documento
        await setDoc(doc(db, "usuarios", user.uid), {
            nombre: nombre,
            email: email,
            direccion: direccion,
            fechaNacimiento: fechaNacimiento,
            fechaRegistro: new Date() // Guardamos también la fecha de registro
        });

        alert('¡Usuario registrado con éxito! Serás redirigido al login.');
        // 6. Redirigimos al login
        window.location.href = 'login.html';

    } catch (error) {
        // Manejamos errores
        console.error("Error al registrar:", error.message);
        alert("Error al registrar: " + error.message);
    }
});