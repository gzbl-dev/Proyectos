# Maqueta Web Cisco NetAcad - Bootstrap 5

Este proyecto consiste en la maquetación de una landing page educativa basada en el diseño de Cisco Networking Academy. El objetivo principal es demostrar el dominio del sistema de Grid de Bootstrap, la responsividad y el uso de componentes interactivos.

## 🛠 Tecnologías Utilizadas
* **HTML5:** Estructura semántica y atributo `loading="lazy"`.
* **CSS3:** Estilos personalizados separados en `style.css`.
* **Bootstrap 5.3:** Framework principal para el layout y componentes.
* **AOS (Animate On Scroll):** Librería de JavaScript para efectos de aparición al hacer scroll.
* **Bootstrap Icons:** Iconografía vectorial.

## 📋 Características y Requisitos Cumplidos

### 1. Cabecera (Navbar)
* Implementada con `navbar` de Bootstrap.
* **Distribución:** Tres columnas visuales (Menú izquierda, Logo centro, Herramientas derecha) logradas con clases de utilidad flexbox (`justify-content-between`, `mx-auto`).

### 2. Jumbotron (Hero Section)
* Se sustituyó el componente Jumbotron (obsoleto en Bootstrap 5) por un **Card con Image Overlay**.
* Incluye imagen de fondo con opacidad y texto centrado.

### 3. Diseño en Damero (Checkerboard)
* Se crearon 3 filas intercalando texto e imagen.
* **Responsividad:**
    * **Escritorio:** 2 columnas (`col-md-6`).
    * **Móvil:** 1 columna (`col-12`). Al reducir la pantalla, los elementos se apilan verticalmente ocupando el 100% del ancho.

### 4. Secciones Interactivas
* **Collapse (Categorías):** Fila de 4 columnas donde las imágenes/botones despliegan información oculta al hacer clic, utilizando el componente `collapse` de Bootstrap.
* **Footer Adaptativo:**
    * En **Escritorio**: Se muestra como una fila horizontal de iconos.
    * En **Móvil**: Se transforma visualmente en un **Acordeón** desplegable para ahorrar espacio. Esto se logra alternando visibilidad con las clases `d-none d-md-flex` y `d-md-none`.

### 5. Optimización y Efectos (Puntos Extra)
* **Lazy Loading:** Todas las etiquetas `<img>` incluyen el atributo `loading="lazy"` para mejorar el rendimiento de carga.
* **Scroll Animations:** Se integró la librería **AOS**. Los elementos tienen atributos `data-aos="fade-up"` o `fade-right` para aparecer suavemente conforme el usuario baja por la página.

## 🚀 Ejecutar el proyecto

[![Demo Online](https://img.shields.io/badge/Demo-Probar_Online-blue?style=for-the-badge&logo=firefox)](https://gzbl-dev.github.io/Proyectos/Bootstrap)

---
*Desarrollado como ejercicio práctico de diseño de interfaces.*