# 3D Canvas - Integración Web con Three.js

[![Ver Demo](https://img.shields.io/badge/Demo_Online-Ver_Proyecto-success?style=for-the-badge&logo=github)](https://gzbl-dev.github.io/Proyectos/3D%20Canvas)

Este proyecto es una práctica de integración de contenido 3D en una interfaz web utilizando la librería **Three.js**. El objetivo es mostrar un personaje 3D animado dentro de un entorno "visualmente interesante" con iluminación, sombras e interactividad.

---

## 🚀 Características Principales

* **Renderizado 3D en tiempo real:** Uso de WebGL a través de Three.js.

* **Selector de Animaciones:** Interfaz de usuario (botones) que permite alternar instantáneamente entre tres estados

* **Iluminación y Sombras:** Configuración de luces hemisféricas y direccionales con proyección de sombras en tiempo real sobre el suelo.

* **Entorno Inmersivo:** Fondo degradado oscuro con efecto de niebla (Fog) para integrar el suelo infinito con el fondo de la web.

* **Interactividad:** Control de cámara orbital (OrbitControls) para rotar y hacer zoom sobre el modelo.

## 🛠️ Tecnologías Utilizadas

* **HTML5 / CSS3:** Estructura y estilos de la interfaz (botones translúcidos estilo "glassmorphism").
* **JavaScript (ES6):** Lógica de control.
* **Three.js:** Motor gráfico 3D (importado vía CDN).
* **FBXLoader:** Cargador para modelos y animaciones en formato `.fbx`.

## ⚙️ Decisiones Técnicas y Soluciones

Durante el desarrollo se implementaron soluciones específicas para resolver problemas de compatibilidad con modelos generados por IA y Mixamo:

1.  **Gestión de Animaciones (Swap Strategy):**
    * Debido a incompatibilidades en la nomenclatura de huesos (huesos *mixamorig* vs *standard*) que impedían reproducir múltiples animaciones en un solo esqueleto ("T-Pose"), se optó por una estrategia de carga múltiple.
    * Se cargan los 3 archivos `.fbx` (Baile, Rezar, Boxeo) al inicio.
    * El sistema gestiona la visibilidad (`visible = true/false`) para alternar entre ellos. Esto garantiza que cada animación se reproduzca perfectamente con su propio esqueleto original.

2.  **Preservación de Texturas:**
    * Para evitar problemas de renderizado donde el modelo aparecía negro por fallos en la iluminación de materiales complejos, se implementó una solución híbrida:
        * **Material:** Se utiliza `MeshBasicMaterial` para garantizar que la textura y los colores originales del personaje se vean nítidos y sin artefactos.
        * **Sombras:** A pesar de usar un material básico, se fuerza la proyección de sombras (`castShadow = true`) para mantener el realismo de la escena y la interacción con el suelo.

## 📂 Estructura del Proyecto

```text
/
├── assets/             # Archivos 3D (Baile.fbx, Praying.fbx, Boxing.fbx)
├── index.html          # Estructura DOM y UI
├── style.css           # Estilos visuales
├── main.js             # Lógica Three.js (Escena, Luces, Controladores)
└── README.md           # Documentación