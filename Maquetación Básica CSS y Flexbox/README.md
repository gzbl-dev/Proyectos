# 🚀 Proyecto: Formularios de Autenticación (HTML, CSS, JS y Firebase)

Este proyecto es una tarea para la asignatura de **Diseño de Interfaces Web**. Implementa un sistema completo de registro (signup) e inicio de sesión (login) utilizando HTML, CSS, JavaScript y **Firebase** (Authentication y Firestore).

---

## Demo en Vivo (GitHub Pages)

El proyecto está desplegado en GitHub Pages para su corrección. Puedes probarlo en el siguiente enlace:

**[Proyecto Maquetación gzbl-dev GitHub Pages](https://gzbl-dev.github.io/Proyectos/Maquetaci%C3%B3n%20B%C3%A1sica%20CSS%20y%20Flexbox/src/index.html#)**


---

## ✨ Características Principales

* **Maquetación Moderna:** Sitio de 3 páginas (`index`, `login`, `register`) maquetado con Flexbox y estética coherente.
* **Tema Oscuro:** Interfaz limpia que utiliza variables CSS para un tema oscuro moderno.
* **Formulario de Registro (`register.html`):**
    * Validación de formato de email con expresión regular (HTML5).
    * Validación de contraseñas coincidentes (JS).
    * Botón para **mostrar/ocultar contraseña** (JS).
    * Recogida de datos adicionales (nombre, dirección, fecha de nacimiento).
    * Checkbox de aceptación de política de privacidad (LOPD).
* **Formulario de Login (`login.html`):**
    * Botón para mostrar/ocultar contraseña (JS).
* **Integración con Firebase (v9 Modular):**
    * **Firebase Authentication:** Creación de usuarios (`createUserWithEmailAndPassword`) y autenticación de usuarios (`signInWithEmailAndPassword`).
    * **Cloud Firestore:**
        1.  Al registrarse, los datos extra del usuario (nombre, dirección, etc.) se guardan en una colección `usuarios`.
        2.  Al iniciar sesión, se guarda un registro (ID de usuario y fecha/hora) en una colección `logs_entrada`.

## 🛠️ Tecnologías Utilizadas

* HTML5 (Semántico)
* CSS3 (Flexbox, Variables CSS, Pseudo-clases)
* JavaScript (ES Modules)
* Firebase
    * Firebase Authentication
    * Cloud Firestore
* Font Awesome (Iconos)

## 📂 Estructura del Proyecto

El código fuente está organizado dentro de la carpeta `src/` para mantener una estructura limpia.

### ⚠️ Aviso de Despliegue
Para este trabajo de clase, el archivo `firebase-config.js` (que contiene las claves de la API) se ha subido intencionadamente al repositorio para permitir el despliegue directo en GitHub Pages. En un proyecto real en producción, este archivo **nunca** debe ser público.