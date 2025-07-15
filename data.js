export const curriculum = [
  // Semestre 1
  {
    semester: 1,
    courses: [
      { code: "ENF101", name: "Anatomía General y del Desarrollo", desc: "", prereq: null },
      { code: "ENF102", name: "Química", desc: "", prereq: null },
      { code: "ENF103", name: "Bioestadística", desc: "", prereq: null },
      { code: "ENF104", name: "Dimensión Interpersonal del Cuidado de Enfermería", desc: "", prereq: null }
    ]
  },
  // Semestre 2
  {
    semester: 2,
    courses: [
      { code: "ENF201", name: "Bioquímica Celular", desc: "", prereq: "ENF101" },
      { code: "ENF202", name: "Fisiología", desc: "", prereq: "ENF101" },
      { code: "ENF203", name: "Fundamentos Éticos del Ejercicio Profesional", desc: "", prereq: null },
      { code: "ENF204", name: "Informática en Salud I", desc: "", prereq: null }
    ]
  },
  // Semestre 3
  {
    semester: 3,
    courses: [
      { code: "ENF301", name: "Microbiología e Infectología Clínica", desc: "", prereq: "ENF201" },
      { code: "ENF302", name: "Psicología", desc: "", prereq: null },
      { code: "ENF303", name: "Salud Pública", desc: "", prereq: null },
      { code: "ENF304", name: "Informática en Salud II", desc: "", prereq: "ENF204" }
    ]
  },
  // Semestre 4
  {
    semester: 4,
    courses: [
      { code: "ENF401", name: "Farmacología Clínica", desc: "", prereq: "ENF202" },
      { code: "ENF402", name: "Fisiopatología General y de Sistemas", desc: "", prereq: "ENF202" },
      { code: "ENF403", name: "Psicología en Salud Mental", desc: "", prereq: "ENF302" },
      { code: "ENF404", name: "Educación para la Salud", desc: "", prereq: null }
    ]
  },
  // Semestre 5
  {
    semester: 5,
    courses: [
      { code: "ENF501", name: "Cuidados de Enfermería I", desc: "", prereq: "ENF402" },
      { code: "ENF502", name: "Cuidados de Enfermería del Adulto y Persona Mayor", desc: "", prereq: "ENF501" },
      { code: "ENF503", name: "Naturaleza de la Enfermería", desc: "", prereq: null },
      { code: "ENF504", name: "Electivo Formación General", desc: "", prereq: null }
    ]
  },
  // Semestre 6
  {
    semester: 6,
    courses: [
      { code: "ENF601", name: "Cuidados de Enfermería II", desc: "", prereq: "ENF502" },
      { code: "ENF602", name: "Cuidados de Enfermería en la Infancia y Adolescencia", desc: "", prereq: "ENF601" },
      { code: "ENF603", name: "Gestión y Liderazgo I", desc: "", prereq: null },
      { code: "ENF604", name: "Electivo Formación General", desc: "", prereq: null }
    ]
  },
  // Semestre 7
  {
    semester: 7,
    courses: [
      { code: "ENF701", name: "Enfermería en Salud Familiar y Comunitaria", desc: "", prereq: "ENF602" },
      { code: "ENF702", name: "Metodología de la Investigación", desc: "", prereq: null },
      { code: "ENF703", name: "Optativo de Profundización", desc: "", prereq: null },
      { code: "ENF704", name: "Electivo Formación General", desc: "", prereq: null }
    ]
  },
  // Semestre 8
  {
    semester: 8,
    courses: [
      { code: "ENF801", name: "Cuidados de Enfermería en Personas con Condiciones Crónicas de Salud", desc: "", prereq: "ENF701" },
      { code: "ENF802", name: "Investigación", desc: "", prereq: "ENF702" },
      { code: "ENF803", name: "Gestión y Liderazgo II", desc: "", prereq: "ENF603" },
      { code: "ENF804", name: "Electivo Formación General", desc: "", prereq: null }
    ]
  },
  // Semestre 9
  {
    semester: 9,
    courses: [
      { code: "ENF901", name: "Internado de Enfermería Hospitalario", desc: "", prereq: "ENF801" },
      { code: "ENF902", name: "Optativo de Profundización", desc: "", prereq: null }
    ]
  },
  // Semestre 10
  {
    semester: 10,
    courses: [
      { code: "ENF1001", name: "Internado de Enfermería Ambulatorio", desc: "", prereq: "ENF901" },
      { code: "ENF1002", name: "Internado de Enfermería en Urgencias", desc: "", prereq: "ENF901" },
      { code: "ENF1003", name: "Internado de Enfermería Electivo", desc: "", prereq: "ENF901" }
    ]
  }
];
