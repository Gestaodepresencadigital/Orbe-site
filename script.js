const WHATSAPP_NUMBER = "558586997179"; // DDI + DDD + número, somente dígitos.

function whatsappUrl(type) {
  const messages = {
    diagnostico: "Olá, vim do site da Orbe e quero saber mais sobre o diagnóstico gratuito da minha empresa.",
    "fotos-arquivos": "Olá, vim do site da Orbe e quero saber mais sobre o serviço de Organização de Fotos e Arquivos.",
    "whatsapp-business": "Olá, vim do site da Orbe e quero saber mais sobre a Otimização do WhatsApp Business.",
    "google-maps": "Olá, vim do site da Orbe e quero saber mais sobre a Organização do Google / Google Maps.",
    instagram: "Olá, vim do site da Orbe e quero saber mais sobre a Organização do Instagram.",
    "links-canais": "Olá, vim do site da Orbe e quero saber mais sobre a Organização de Links e Canais.",
    "catalogo-whatsapp": "Olá, vim do site da Orbe e quero saber mais sobre a Organização de Catálogo no WhatsApp.",
    "combo-whatsapp-google": "Olá, vim do site da Orbe e quero saber mais sobre o Combo WhatsApp Business + Google.",
    "pacote-express": "Olá, vim do site da Orbe e quero saber mais sobre o Pacote Express.",
    "plano-essencial": "Olá, vim do site da Orbe e quero saber mais sobre o Plano Essencial.",
    "plano-profissional": "Olá, vim do site da Orbe e quero saber mais sobre o Plano Profissional.",
    "plano-estrategico": "Olá, vim do site da Orbe e quero saber mais sobre o Plano Estratégico.",
    "plano-express": "Olá, vim do site da Orbe e quero saber mais sobre os serviços pontuais do Plano Express."
  };

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[type] || messages.diagnostico)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    window.open(whatsappUrl(link.dataset.whatsapp), "_blank");
  });
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});
