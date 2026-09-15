const WHATSAPP_NUMBER = "5585974017539"; // TROQUE pelo número da empresa, com DDI + DDD, somente números.

function whatsappUrl(type){
  const messages = {
    diagnostico: "Olá! Vim pelo site da ORBE e gostaria de solicitar o diagnóstico gratuito da minha empresa.",
    "plano-essencial": "Olá! Vim pelo site da ORBE e gostaria de saber mais sobre o plano ORBE Essencial.",
    "plano-performance": "Olá! Vim pelo site da ORBE e gostaria de saber mais sobre o plano ORBE Performance.",
    "plano-estrategico": "Olá! Vim pelo site da ORBE e gostaria de saber mais sobre o plano ORBE Estratégico."
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
