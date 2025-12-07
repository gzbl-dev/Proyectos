# 🌐 Web Multimedia Interactiva con P5.js

Este proyecto consiste en el desarrollo de una Landing Page ("FUTURE GBL JS") que integra elementos web convencionales (HTML5/CSS3) con un fondo multimedia interactivo generado mediante la librería **P5.js**.

El objetivo principal es lograr una integración natural donde el canvas aporte espectacularidad visual sin entorpecer la legibilidad del contenido.

## 🚀 Demo en Vivo

Puedes visualizar el proyecto funcionando aquí:
### [🔗 VER PROYECTO (GitHub Pages)](https://gzbl-dev.github.io/Proyectos/Web%20multimedia%20interactiva%20con%20P5JS/)

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica (nav, header, section, footer).
* **CSS3:** Diseño responsivo, Flexbox y efectos de *Glassmorphism* (`backdrop-filter`) para la integración visual sobre el canvas.
* **JavaScript (P5.js):** Lógica de animación y renderizado del fondo interactivo.

## ✨ Características del Proyecto

1.  **Integración Web-Canvas:** El canvas de P5.js se ubica en un `z-index` negativo con posición fija, actuando como un fondo dinámico que cubre toda la ventana (`windowWidth`, `windowHeight`).
2.  **Interfaz "Glass":** Los contenedores HTML (tarjetas y menús) utilizan fondos semitransparentes para dejar ver la animación inferior.
3.  **Animación Generativa:** Sistema de partículas (nodos) que flotan libremente por el espacio.
4.  **Interactividad:**
    * Las partículas reaccionan a la posición del ratón (`mouseX`, `mouseY`).
    * Se generan conexiones dinámicas (líneas) cuando el cursor se acerca a los nodos.
    * La opacidad de las líneas varía según la distancia para suavizar el efecto.

## 📝 Créditos y Modificaciones

### Fuente Original
El código base para el sistema de partículas está inspirado en los ejemplos de "Network/Particles" de **Daniel Shiffman (The Coding Train)** y la documentación oficial de **OpenProcessing.org**.

### Modificaciones Realizadas (Aporte Propio)
Para adaptar el código a los requisitos de la asignatura, se realizaron las siguientes modificaciones:
* **Adaptación al DOM:** Se vinculó el canvas a un `div` contenedor específico (`#canvas-container`) en lugar de renderizarse al final del body.
* **Estética Cyberpunk/Futurista:** Se ajustó la paleta de colores a tonos oscuros (Deep Blue) y Cian (`#00d2ff`) para coincidir con la identidad corporativa de la web HTML.
* **Lógica de Interacción:** Se implementó una lógica de distancia (`dist()`) específica para que las conexiones solo ocurran con el ratón del usuario, creando un efecto de "linterna" o "foco de conexiones".
* **Responsive:** Se añadió la función `windowResized()` para recalcular el tamaño del canvas dinámicamente si el usuario cambia el tamaño del navegador.

---

## 📂 Estructura de Archivos

```text
/
├── assets/
│   └── favicon.svg     # Icono vectorizado
├── css/
│   └── styles.css      # Hoja de estilos
├── js/
│   └── sketch.js       # Lógica P5.js
├── index.html          # Página principal
└── README.md           # Documentación