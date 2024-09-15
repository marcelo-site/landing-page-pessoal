const certificate = document.querySelector("#certificate");
const certificateNone = document.querySelector("#certificate-none");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const count = document.querySelector("#count");
const btnValidate = document.querySelector("#btn-validate");

const validateCursoEmVideo =
  "https://www.cursoemvideo.com/validacao-de-certificado/?codigo=";

const validateUdemy = "https://www.udemy.com/certificate/";

const certs = [
  {
    title: "Curso-HTML5-e-CSS3-módulo-2-de-5-[40-HORAS]",
    baseUrlValidate: validateCursoEmVideo,
    code: "45271-E776-7",
  },
  {
    title: "Curso-HTML5-e-CSS3-módulo-3-de-5-[40-HORAS]",
    baseUrlValidate: validateCursoEmVideo,
    code: "45271-15678-2",
  },
  {
    title: "WordPress-+-WooCommerce-Módulo-3-[40-Horas]",
    baseUrlValidate: validateCursoEmVideo,
    code: "45271-D263-A",
  },
  {
    title: "CURSO-HTML5-e-CSS3-MÓDULO-1-DE-5-[40-HORAS]",
    baseUrlValidate: validateCursoEmVideo,
    code: "45271-C9E9-5",
  },
  {
    title: "WORDPRESS-MÓDULO-1-[40-HORAS]",
    baseUrlValidate: validateCursoEmVideo,
    code: "45271-9D84-9",
  },
  {
    title: "WORDPRESS-MÓDULO-2-[40-HORAS]",
    baseUrlValidate: validateCursoEmVideo,
    code: "45271-9F60-8",
  },
  {
    title: "MARKETING-DIGITAL-[40-HORAS]",
    baseUrlValidate: validateCursoEmVideo,
    code: "45271-65AA-2",
  },
  {
    title: "EXCEL-[40-HORAS]",
    baseUrlValidate: validateCursoEmVideo,
    code: "45271-654D-4",
  },
  {
    title: "PHP-BÁSICO-[40-HORAS]",
    baseUrlValidate: validateCursoEmVideo,
    code: "45271-632E-5",
  },
  {
    title: "JAVASCRIPT-[40-HORAS]",
    baseUrlValidate: validateCursoEmVideo,
    code: "45271-6C61-1",
  },
  {
    title: "Git-e-GitHub-do-basico-ao-avançado",
    baseUrlValidate: validateUdemy,
    code: "UC-f8b267d9-d560-4c1d-8187-e2919dad3af4",
  },
  {
    title: "Nodejs-do-Zero-a-Maestria",
    baseUrlValidate: validateUdemy,
    code: "UC-016aa745-0fba-4576-940b-c72cd012bcfe",
  },
  {
    title: "Redes-TCP-IP",
    baseUrlValidate: validateUdemy,
    code: "UC-77c86e55-3c4c-48a6-94e0-cd7d4d7337fc",
  },
  {
    title: "Arquitetura-de-Redes",
    baseUrlValidate: validateUdemy,
    code: "UC-7cc786f3-86ff-4cfc-9773-b6006031e4de",
  },
];

let n = 0;

function change(n, className) {
  certificate.classList.add(className);
  count.innerText = n + 1;
  btnValidate.href = certs[n].baseUrlValidate + certs[n].code;
  setTimeout(() => {
    certificate.src = `img/certificates/${certs[n].title}.webp`;
  }, 250);

  setTimeout(() => {
    certificate.classList.remove(className);
  }, 500);
}

function changeNext() {
  if (n < certs.length - 1) n++;
  else n = 0;
  change(n, "alternate-next");
}

function changePrev() {
  if (n > 1) n--;
  else n = 12;

  change(n, "alternate-prev");
}

prev.addEventListener("click", changePrev);
next.addEventListener("click", changeNext);

window.addEventListener("DOMContentLoaded", () => {
  certificate.src = `/img/certificates/${certs[0].title}.webp`;
  btnValidate.href = certs[0].baseUrlValidate + certs[0].code;
});
