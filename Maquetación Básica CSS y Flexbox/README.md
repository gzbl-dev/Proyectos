# 🚀 Proyecto: Formularios de Autenticación (HTML, CSS, JS y Firebase)

Este proyecto es una tarea para la asignatura de **Diseño de Interfaces Web**. Implementa un sistema completo de registro (signup) e inicio de sesión (login) utilizando HTML, CSS, JavaScript y **Firebase** (Authentication y Firestore).

---

## Demo en Vivo (GitHub Pages)

El proyecto está desplegado en GitHub Pages para su corrección. Puedes probarlo en el siguiente enlace:

**[https://TU_USUARIO.github.io/NOMBRE_DEL_REPOSITORIO/src/index.html](https://TU_USUARIO.github.io/NOMBRE_DEL_REPOSITORIO/src/index.html)**

*(**Nota:** Debes reemplazar `TU_USUARIO` y `NOMBRE_DEL_REPOSITORIO` con los tuyos. La ruta `/src/index.html` es necesaria porque los archivos no están en la raíz).*

### Para activar el enlace (si no lo has hecho):
1.  Ve a la pestaña "Settings" (Configuración) de tu repositorio.
2.  En el menú lateral, ve a "Pages".
3.  Bajo "Build and deployment", selecciona "Deploy from a branch".
4.  Asegúrate de que la rama (`Branch`) seleccionada sea `main` (o `master`) y la carpeta sea `/root`.
5.  Guarda. El enlace de arriba tardará 1 o 2 minutos en activarse.

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

/Maquetación Básica CSS y Flexbox │ ├── src/ │ ├── index.html (Página principal) │ ├── login.html (Formulario de login) │ ├── register.html (Formulario de registro) │ │ │ ├── css/ │ │ ├── style.css (Estilos generales, header, footer) │ │ └── form-style.css (Estilos específicos de formularios) │ │ │ ├── js/ │ │ ├── login.js (Lógica de inicio de sesión) │ │ ├── register.js (Lógica de registro) │ │ └── firebase-config.js (Configuración de Firebase) │ │ │ └── assets/ (Contiene 'recursos'/'imagenes') │ └── ... │ ├── .gitignore └── README.md (Esta documentación)
---

### ⚠️ Aviso de Despliegue
Para este trabajo de clase, el archivo `firebase-config.js` (que contiene las claves de la API) se ha subido intencionadamente al repositorio para permitir el despliegue directo en GitHub Pages. En un proyecto real en producción, este archivo **nunca** debe ser público.