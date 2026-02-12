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

---

### 🧰 Tools / Herramientas
* **IA:** Google Gemini
* **Testing:** WAVE, Lighthouse, Axe DevTools
* **Editor:** VS Code + Live Server