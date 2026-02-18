# 🚀 Accessibility Refactor (WCAG 2.2)

<div align="center">
  <a href="./capturas/">
    <img src="https://img.shields.io/badge/📂_VER_CAPTURAS_/_VIEW_SCREENSHOTS-005a9c?style=for-the-badge&logo=folder&logoColor=white" alt="View screenshots folder">
  </a>
</div>

---

## 🇪🇸 Versión en Español

### 📋 Resumen
Refactorización de una web legacy para cumplir con el **100% de WCAG 2.2 (AA/AAA)** mediante Ingeniería de Prompts y validación técnica.

### 🛠️ Problemas y Soluciones
| Elemento | Solución | Criterio |
| :--- | :--- | :--- |
| `div` Botón | `<button>` Nativo | 4.1.2 Name, Role, Value |
| Sin `alt` | Atributo `alt` descriptivo | 1.1.1 Non-text Content |
| Contraste | Ratio **7:1 (AAA)** | 1.4.6 Contrast |
| Estructura | Semántica HTML5 | 1.3.1 Info & Relations |

### 📸 Evidencia de Validación
| Lighthouse (100%) | WAVE (0 Errors) | Axe DevTools (Clean) |
| :---: | :---: | :---: |
| ![Lighthouse](./capturas/post-validacion-lighthouse.png) | ![WAVE](./capturas/post-validacion-wave.png) | ![Axe](./capturas/post-validacion-axe.png) |

### El Prompt Utilizado

Para lograr la refactorización accesible, se diseñó el siguiente prompt aplicando técnicas de *Prompt Engineering* (asignación de rol, contexto normativo, restricciones estrictas y formato de salida):

> **Rol:** Actúa como un **Especialista Senior en Accesibilidad Web y Auditor WAI-ARIA**. Tu referencia es la normativa **WCAG 2.2 Nivel AA (y AAA donde sea posible)** y las mejores prácticas de semántica nativa sobre ARIA.
> 
> **Tarea:** Refactoriza el código HTML proporcionado para que sea completamente accesible. No te limites a corregir errores; reestructura el documento para garantizar robustez.
> 
> **Instrucciones Obligatorias:**
> 
> 1. **Semántica HTML5 Estricta:** Sustituye `div` y `span` genéricos por `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, y `<footer>`. Asegura una jerarquía de encabezados lógica (H1 único, sin saltos de nivel).
> 2. **Imágenes y Medios:** Añade `alt` descriptivo a imágenes informativas y usa `alt=""` para imágenes decorativas.
> 3. **Formularios y Botones:** Cada `<input>` debe tener un `<label>` asociado explícitamente (`for` + `id`). Convierte elementos clickeables simulados (ej. `div` con onClick) en `<button>` o `<a>` reales.
> 4. **WAI-ARIA y Navegación:** Aplica la "Primera Regla de ARIA": usa HTML nativo siempre que sea posible. Asegura un `tabindex` lógico y añade un enlace "Saltar al contenido" al inicio.
> 5. **Estilos Críticos (en <style>):** Define un `outline` de alto contraste para `:focus-visible` y asegura que los textos tengan un ratio de contraste mínimo de 4.5:1 (AA) o 7:1 (AAA).
> 
> **Salida:** Entrégame únicamente el código HTML completo y corregido, seguido de una breve lista con los 3 cambios más críticos realizados.
> 

---

## 🇺🇸 English Version

### 📋 Summary
Legacy web refactor to achieve **100% WCAG 2.2 (AA/AAA)** compliance using Prompt Engineering and technical validation.

### 🛠️ Issues & Solutions
| Element | Solution | Criterion |
| :--- | :--- | :--- |
| `div` Button | Native `<button>` | 4.1.2 Name, Role, Value |
| Missing `alt` | Descriptive `alt` text | 1.1.1 Non-text Content |
| Contrast | **7:1 Ratio (AAA)** | 1.4.6 Contrast |
| Structure | HTML5 Semantics | 1.3.1 Info & Relations |

### 📸 Validation Evidence
| Lighthouse (100%) | WAVE (0 Errors) | Axe DevTools (Clean) |
| :---: | :---: | :---: |
| ![Lighthouse](./capturas/post-validacion-lighthouse.png) | ![WAVE](./capturas/post-validacion-wave.png) | ![Axe](./capturas/post-validacion-axe.png) |

### The Prompt Used

To achieve accessible refactoring, the following prompt was designed using *Prompt Engineering* techniques (role assignment, regulatory context, strict constraints, and output formatting):

> **Role:** Act as a **Senior Web Accessibility Specialist and WAI-ARIA Auditor**. Your reference is the **WCAG 2.2 Level AA (and AAA where possible)** standard and best practices prioritizing native semantics over ARIA.
> 
> **Task:** Refactor the provided HTML code to be fully accessible. Do not just fix errors; restructure the document to ensure robustness.
> 
> **Mandatory Instructions:**
> 
> 1. **Strict HTML5 Semantics:** Replace generic `div` and `span` tags with `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, and `<footer>`. Ensure a logical heading hierarchy (single H1, no skipped levels).
> 2. **Images and Media:** Add descriptive `alt` attributes to informative images and use `alt=""` for decorative ones.
> 3. **Forms and Buttons:** Every `<input>` must have an explicitly associated `<label>` (`for` + `id`). Convert simulated clickable elements (e.g., `div` with onClick) into real `<button>` or `<a>` tags.
> 4. **WAI-ARIA and Navigation:** Apply the "First Rule of ARIA": use native HTML whenever possible. Ensure a logical `tabindex` and add a "Skip to content" link at the beginning.
> 5. **Critical Styles (in <style>):** Define a high-contrast `outline` for `:focus-visible` and ensure texts have a minimum contrast ratio of 4.5:1 (AA) or 7:1 (AAA).
> 
> **Output:** Provide only the complete, corrected HTML code, followed by a brief list of the 3 most critical changes made.
> 

---

### 🧰 Tools / Herramientas
* **IA:** Google Gemini
* **Testing:** WAVE, Lighthouse, Axe DevTools
* **Editor:** VS Code + Live Server