import { curriculum } from './data.js';

// Inicialización Three.js (opcional si deseas 3D)
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight * 0.6);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.6), 0.1, 1000);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set(0, 1, 5);
controls.update();
const animate = () => { requestAnimationFrame(animate); renderer.render(scene, camera); };
animate();

// Lógica 2D de la malla
const container = document.getElementById('curriculum-container');

curriculum.forEach((sem, semIndex) => {
  const semDiv = document.createElement('div');
  semDiv.className = 'semester';
  semDiv.innerHTML = `<h2>Semestre ${sem.semester}</h2>`;

  sem.courses.forEach((course, idx) => {
    const div = document.createElement('div');
    div.className = 'course';
    div.dataset.sem = semIndex;
    div.dataset.idx = idx;
    div.innerHTML = `
      <div class="title">${course.code} - ${course.name}</div>
      <div class="desc">${course.desc}</div>
    `;

    if (!course.prereq) div.classList.add('unlocked');

    div.addEventListener('click', () => {
      if (!div.classList.contains('unlocked')) return;
      div.classList.toggle('open');

      if (div.classList.contains('open')) {
        curriculum.forEach((s, sI) => {
          s.courses.forEach((c, cI) => {
            if (c.prereq === course.code) {
              const selector = `.course[data-sem="${sI}"][data-idx="${cI}"]`;
              const next = document.querySelector(selector);
              if (next) next.classList.add('unlocked');
            }
          });
        });
      }
    });

    semDiv.appendChild(div);
  });

  container.appendChild(semDiv);
});
