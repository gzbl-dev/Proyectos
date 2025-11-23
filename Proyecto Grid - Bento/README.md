# Bento Grid Layout - Apple Style 🍱

Este proyecto es una recreación del popular diseño estilo **"Bento Grid"**, utilizado frecuentemente por Apple en sus presentaciones de producto (como los chips M1/M2).

El objetivo principal es demostrar el dominio de **CSS Grid avanzado**, utilizando grids anidados, variables CSS y diseño responsivo adaptativo.

## 🚀 Características Principales

- **Diseño 100% Responsivo:**
  - 📱 **Móvil:** Layout de una sola columna fluida.
  - 💻 **Escritorio:** Layout complejo de 3 columnas principales con filas dinámicas.
- **Dark Mode Automático:** Soporte nativo para tema oscuro y claro detectando la preferencia del sistema (`prefers-color-scheme`).
- **Arquitectura CSS Grid Anidado:** Uso de contenedores padres e hijos para lograr alineaciones complejas.
- **Variables CSS:** Uso de Custom Properties para una gestión eficiente de colores, tipografías y espaciados.

## 🛠️ Tecnologías

- **HTML5:** Semántico.
- **CSS3:**
  - Grid Layout & Flexbox.
  - Media Queries.
  - BEM (Naming convention simplificado).

## 📂 Estructura del Proyecto

El sistema de grid funciona mediante una jerarquía de tres niveles:

1. **`.bento-container`**: Contenedor principal (3 columnas en escritorio).
2. **`.bento-column`**: Sub-grids verticales para agrupar las tarjetas.
3. **`.bento-item`**: Las tarjetas individuales que contienen la información.

```text
/src
  ├── /assets/images   # Imágenes del proyecto
  ├── /css
  │     ├── styles.css      # Lógica del Grid y estilos
  │     └── variables.css   # Paleta de colores y temas
  └── index.html

## 🎨 Fragmento de Código
Implementación del Dark Mode mediante variables CSS:

:root {
  /* Tema Claro por defecto */
  --color-page-bg: #f5f5f7;
  --color-card-bg: #ffffff;
  --color-text-primary: #1d1d1f;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Tema Oscuro automático */
    --color-page-bg: #000000;
    --color-card-bg: #1d1d1f;
    --color-text-primary: #f5f5f7;
  }
}

