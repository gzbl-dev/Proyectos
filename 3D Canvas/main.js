import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

// --- CONFIGURACIÓN DE TUS 3 ANIMACIONES ---
const modelsConfig = [
    { name: "Baile Hip Hop", url: 'assets/baile.fbx' }, // Este saldrá primero
    { name: "Rezar", url: 'assets/Praying.fbx' },
    { name: "Boxeo", url: 'assets/Boxing.fbx' }       // Nuevo
];

// VARIABLES GLOBALES
const mixers = []; // Lista de reproductores
const loadedModels = []; // Lista de los muñecos cargados
const clock = new THREE.Clock();

// 1. ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020); 
scene.fog = new THREE.Fog(0x202020, 500, 2000); 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
camera.position.set(0, 150, 400); 

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true; 
document.body.appendChild(renderer.domElement);

// 2. LUCES
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
hemiLight.position.set(0, 200, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
dirLight.position.set(100, 300, 100); 
dirLight.castShadow = true;
dirLight.shadow.camera.top = 500;
dirLight.shadow.camera.bottom = -500;
dirLight.shadow.camera.left = -500;
dirLight.shadow.camera.right = 500;
scene.add(dirLight);

// 3. SUELO
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(5000, 5000),
    new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8, depthWrite: false }) 
);
floor.rotation.x = - Math.PI / 2;
floor.receiveShadow = true; 
scene.add(floor);

// 4. CONTROLES
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI / 2;

// 5. CARGAR MODELOS (ESTRATEGIA: CARGAR TODOS Y OCULTAR)
const loader = new FBXLoader();
const panel = document.getElementById('animations-panel'); 

// Limpiamos el panel de botones por si acaso
if (panel) panel.innerHTML = '';

modelsConfig.forEach((config, index) => {
    
    loader.load(config.url, (object) => { 
        
        console.log(`Cargado: ${config.name}`);

        // AJUSTES
        object.scale.set(100, 100, 100); 
        object.position.y = 0; // Pies en el suelo

        // MANTENER TEXTURAS (TU CÓDIGO SEGURO)
        object.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true; 
                if (child.material) {
                    const oldMaterial = Array.isArray(child.material) ? child.material[0] : child.material;
                    const texture = oldMaterial.map;
                    if (texture) {
                        child.material = new THREE.MeshBasicMaterial({
                            map: texture,
                            color: 0xffffff,
                            side: THREE.DoubleSide
                        });
                        texture.colorSpace = THREE.SRGBColorSpace;
                    } else {
                        child.material = new THREE.MeshBasicMaterial({ color: 0x888888 });
                    }
                }
            }
        });

        // PREPARAR ANIMACIÓN
        let localMixer = null;
        if (object.animations.length > 0) {
            localMixer = new THREE.AnimationMixer(object);
            const action = localMixer.clipAction(object.animations[0]);
            action.play();
            mixers.push(localMixer);
        }

        // GUARDAR REFERENCIA
        object.userData = { id: index }; 
        scene.add(object);
        loadedModels.push(object);

        // SOLO MOSTRAR EL PRIMERO (BAILE)
        if (index === 0) {
            object.visible = true;
        } else {
            object.visible = false;
        }

        // CREAR BOTÓN
        const btn = document.createElement('button');
        btn.className = 'anim-btn';
        if(index === 0) btn.classList.add('active'); // El primero activo
        btn.innerText = config.name;
        
        btn.addEventListener('click', () => {
            switchModel(index, btn);
        });
        
        // ORDENAR BOTONES (Para que salgan Baile - Rezar - Boxeo siempre)
        btn.style.order = index; 
        panel.appendChild(btn);

    }, undefined, (error) => {
        console.error(`Error cargando ${config.name}:`, error);
    });
});


// FUNCIÓN DE CAMBIO
function switchModel(indexToShow, btnElement) {
    
    // 1. Ocultar todos
    loadedModels.forEach(model => {
        model.visible = false;
    });

    // 2. Mostrar el seleccionado
    const selectedModel = loadedModels.find(m => m.userData.id === indexToShow);
    if (selectedModel) {
        selectedModel.visible = true;
    }

    // 3. Actualizar botones
    document.querySelectorAll('.anim-btn').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
}

// 6. LOOP
function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    // Actualizar todas las animaciones a la vez
    mixers.forEach(mixer => mixer.update(delta));

    controls.update();
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();