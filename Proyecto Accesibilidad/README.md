# 🚀 Refactorización de Accesibilidad Web con IA (WCAG 2.2)

<div align="center">
  <a href="./capturas/">
    <img src="https://img.shields.io/badge/📂_VER_TODAS_LAS_CAPTURAS_Y_PRUEBAS-005a9c?style=for-the-badge&logo=folder&logoColor=white" alt="Ver carpeta de capturas de validación">
  </a>
</div>

---

### 📋 Resumen del Proyecto
Este repositorio documenta el proceso de transformación de una página web heredada ("legacy") y no accesible en un documento robusto que cumple con el **100% de los criterios de accesibilidad WCAG 2.2 (Nivel AA y AAA)**.

Utilizando técnicas de **Ingeniería de Prompts** con Asistentes de IA (Gemini), se ha logrado no solo corregir errores sintácticos, sino reestructurar la arquitectura de la información para garantizar la compatibilidad con lectores de pantalla y navegación por teclado.

### ⚙️ Metodología
1.  **Diagnóstico:** Se partió de un `index.html` (en la carpeta `/original`) con errores críticos comunes.
2.  **Prompting de Rol:** Se instruyó a la IA actuar como *Auditor Senior WAI-ARIA* para priorizar HTML nativo.
3.  **Refactorización:** Reescritura completa del DOM y CSS (en la carpeta `/accesible`).
4.  **Validación y Debugging:**
    * Análisis visual con **WAVE**.
    * Iteración con **Google Lighthouse**.
    * Auditoría profunda con **Axe DevTools**.

### 🛠️ Problemas Encontrados y Soluciones Implementadas

| Elemento Original (Problema) | Solución Aplicada (IA) | Criterio WCAG Cumplido |
| :--- | :--- | :--- |
| `<div class="boton">` con `onClick` | Reemplazado por `<button type="submit">` nativo | **4.1.2 Name, Role, Value** |
| Imágenes sin atributo `alt` | Se añadió `alt` descriptivo y dimensiones | **1.1.1 Non-text Content** |
| Colores `#ccc` sobre blanco | Ajuste de paleta a ratio **7:1 (AAA)** | **1.4.6 Contrast (Enhanced)** |
| `input` solo con `placeholder` | Vinculación explícita mediante `<label for="id">` | **3.3.2 Labels or Instructions** |
| Estructura div/span | Uso de semántica `<header>`, `<main>`, `<nav>` | **1.3.1 Info and Relationships** |
| Foco invisible | Implementación de `:focus-visible` | **2.4.7 Focus Visible** |

### 📸 Evidencia de Validación

A continuación se muestra el resultado final de las auditorías (puedes ver las versiones "pre" y "post" completas en la carpeta de capturas).

**1. Resultado Lighthouse (100%):**
![Validación Lighthouse](./capturas/post-validacion-lighthouse.png)

**2. Resultado WAVE (0 Errores):**
![Validación WAVE](./capturas/post-validacion-wave.png)

**3. Resultado Axe DevTools (Clean):**
![Validación Axe](./capturas/post-validacion-axe.png)

### 🧰 Herramientas Usadas (Stack)
* **VS Code** (con Live Server).
* **Google Gemini** (Asistente de IA).
* **WAVE Evaluation Tool**.
* **Google Lighthouse**.
* **Axe DevTools**.

---