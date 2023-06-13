const prefix = "Front-End ";
const words = ["Specialist", "Developer", "Engineer", "Architect", "Specialist", "Artisan", "Builder", "Planner"];
const descriptions = [
  "Desenvolvedor front-end experiente em criar interfaces web intuitivas e responsivas para uma ótima experiência de usuário.",
  /*   "Designer front-end especializado em desenvolver experiências de usuário atrativas e eficazes.",
    "Engenheiro front-end altamente qualificado em construir e otimizar a performance de websites modernos.",
    "Arquiteto front-end dedicado à concepção de estruturas eficientes e escaláveis para aplicações web.",
    "Especialista front-end com uma profunda compreensão dos princípios de design e usabilidade.",
    "Artista front-end, mesclando tecnologia e design para criar experiências de usuário imersivas.",
    "Construtor front-end com habilidades para transformar designs complexos em realidade interativa.",
    "Planejador front-end, habilidoso em estruturar e organizar o fluxo e layout de páginas web." */
];

const typingText = document.getElementById("typing-text");
const portfolioDescription = document.getElementById("portfolio-description");

let wordIndex = 0;
let letterIndex = 0;
let descriptionIndex = 0;
let isDeleting = false;
let isDeletingDescription = false;

function type() {
  if (isDeleting) {
    if (letterIndex > 0) {
      // se estiver apagando e ainda há letras na palavra, apaga a última letra
      typingText.textContent = prefix + words[wordIndex].substring(0, letterIndex - 1);
      letterIndex--;
    } else {
      // se todas as letras foram apagadas, passa para a próxima palavra e começa a digitar
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    if (letterIndex < words[wordIndex].length) {
      // se estiver digitando e ainda há letras na palavra, adiciona a próxima letra
      typingText.textContent = prefix + words[wordIndex].substring(0, letterIndex + 1);
      letterIndex++;
    } else {
      // se todas as letras foram digitadas, começa a digitar a descrição
      if (descriptionIndex < descriptions[wordIndex].length) {
        // se ainda há letras na descrição, adiciona a próxima letra
        portfolioDescription.textContent = descriptions[wordIndex].substring(0, descriptionIndex + 1);
        descriptionIndex++;
      } else {
        // se todas as letras da descrição foram digitadas, começa a apagar após um delay
        isDeleting = true;
        isDeletingDescription = true;
      }
    }
  }

  // tempo antes da próxima chamada da função type()
  let timeout = isDeleting ? 100 : 100; // tempo de espera ao apagar e digitar, respectivamente
  if (!isDeleting && letterIndex === words[wordIndex].length && descriptionIndex === descriptions[wordIndex].length) {
    timeout = 3000; // tempo de espera após a palavra e a descrição serem completamente digitadas
  }

  setTimeout(type, timeout);
}

type(); // começa a sequência
