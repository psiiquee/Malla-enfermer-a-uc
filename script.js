// --- Configuración básica de Three.js ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 20, 40);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xffeef8, 1); // fondo rosa pastel

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// --- Datos de cursos (ejemplo; añade más según tu malla PDF) ---
const courses = [
  { id: 'ANAT',  name: 'Anatomía General y del Desarrollo',          sem: 1 },
  { id: 'BIOQ',  name: 'Bioquímica Celular',                         sem: 2 },
  { id: 'MICR',  name: 'Microbiología e Infect. Clínica',            sem: 3 },
  { id: 'FARM',  name: 'Farmacología Clínica',                       sem: 4 },
  { id: 'CENF5', name: 'Cuidados Enfermería Adulto y Persona Mayor', sem: 5 },
  { id: 'CENF6', name: 'Cuidados Enfermería Infancia y Adolescencia', sem: 6 },
  { id: 'CENF7', name: 'Enfermería en Salud Familiar y Comunitaria', sem: 7 },
  { id: 'CENF8', name: 'Cuidados Enfermería Condiciones Crónicas',   sem: 8 }
];

// Construye prerrequisitos automáticamente (cada semestre depende del anterior)
const prereqs = {};
courses.forEach(c => {
  prereqs[c.id] = c.sem > 1
    ? courses.filter(x => x.sem === c.sem - 1).map(x => x.id)
    : [];
});

// Carga el estado guardado en localStorage (o lo inicializa)
let state = JSON.parse(localStorage.getItem('mallaState') || '{}');
courses.forEach(c => {
  if (state[c.id] === undefined) state[c.id] = false;
});

// Crea un cubo para cada curso
const size = 3, gap = 1;
courses.forEach(c => {
  const color = state[c.id] ? 0xff69b4 : 0xffb6c1; // completado: fuerte, pendiente: claro
  const material = new THREE.MeshBasicMaterial({ color });
  const geo = new THREE.BoxGeometry(size, size, size);
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.x = (c.sem - (courses.length / 2)) * (size + gap);
  mesh.userData = c;
  scene.add(mesh);
});

// Lógica de clic y verificación de prerrequisitos
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', e => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(scene.children);
  if (hits.length) {
    const m = hits[0].object;
    const { id } = m.userData;
    // Comprueba que todos los prerrequisitos estén completados
    const ok = prereqs[id].every(p => state[p]);
    if (!ok) {
      alert('Debes completar prerrequisitos antes');
      return;
    }
    // Alterna el estado y guarda
    state[id] = !state[id];
    localStorage.setItem('mallaState', JSON.stringify(state));
    const newColor = state[id] ? 0xff69b4 : 0xffb6c1;
    m.material.color.set(newColor);
  }
});

// Bucle de renderizado
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Ajuste al cambiar el tamaño de ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
