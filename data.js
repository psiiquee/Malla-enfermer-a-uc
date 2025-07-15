 export const curriculum = [
semester: 1,
courses: [
{ code: "ENF101", name: "Anatomía General y del Desarrollo", desc: "Estudio de la estructura y función del cuerpo humano durante distintas etapas.", prereq: null },
{ code: "ENF102", name: "Química", desc: "Fundamentos de la química general aplicados a la salud.", prereq: null },
{ code: "ENF103", name: "Bioestadística", desc: "Métodos estadísticos básicos para el análisis de datos en enfermería.", prereq: null },
{ code: "ENF104", name: "Dimensión Interpersonal del Cuidado", desc: "Competencias comunicativas y relacionales en enfermería.", prereq: null }
]
},
/ Semestre 2 /
{
semester: 2,
courses: [
{ code: "ENF201", name: "Bioquímica Celular", desc: "Procesos bioquímicos fundamentales en células humanas.", prereq: "ENF101" },
{ code: "ENF202", name: "Fisiología", desc: "Mecanismos funcionales de los sistemas corporales.", prereq: "ENF101" },
{ code: "ENF203", name: "Fundamentos Éticos Profesional", desc: "Principios éticos y deontología en enfermería.", prereq: null },
{ code: "ENF204", name: "Informática en Salud I", desc: "Uso de herramientas digitales en sistemas de salud.", prereq: null }
]
},
/ Semestre 3 /
{
semester: 3,
courses: [
{ code: "ENF301", name: "Microbiología Clínica", desc: "Microorganismos de importancia clínica y control de infecciones.", prereq: "ENF201" },
{ code: "ENF302", name: "Psicología", desc: "Principios psicológicos aplicados al cuidado del paciente.", prereq: null },
{ code: "ENF303", name: "Salud Pública", desc: "Determinantes de salud y estrategias comunitarias.", prereq: null },
{ code: "ENF304", name: "Informática en Salud II", desc: "Gestión de datos e historia clínica electrónica.", prereq: "ENF204" }
]
},
/ Semestre 4 */
{
semester: 4,
courses: [
{ code: "ENF401", name: "Farmacología Clínica", desc: "Principios de acción y uso de medicamentos.", prereq: "ENF202" },
{ code: "ENF402", name: "Fisiopatología", desc: "Alteraciones funcionales asociadas a enfermedades.", prereq: "ENF202" },
{ code: "ENF403", name: "Psicología en Salud Mental", desc: "Atención y cuidados de pacientes con trastornos mentales.", prereq: "ENF302" },
{ code: "ENF404", name: "Educación para la Salud", desc: "Estrategias educativas para promoción de la salud.", prereq: null }
]
}
// Agrega más semestres siguiendo el mismo patrón
];
