const WHATSAPP_NUMBER = "5585974017539"; // TROQUE pelo número da empresa, com DDI + DDD, somente números.

function whatsappUrl(type){
  const messages = {
    diagnostico: "Olá! Vim pelo site da ORBE e gostaria de solicitar o diagnóstico gratuito da minha empresa.",
    "fotos-arquivos": "Olá! Vim pelo site da ORBE e tenho interesse no serviço de Organização de Fotos e Arquivos.",
    "whatsapp-business": "Olá! Vim pelo site da ORBE e tenho interesse na Otimização do WhatsApp Business.",
    "google-maps": "Olá! Vim pelo site da ORBE e tenho interesse na Organização do Google / Google Maps.",
    instagram: "Olá! Vim pelo site da ORBE e tenho interesse na Organização do Instagram.",
    "links-canais": "Olá! Vim pelo site da ORBE e tenho interesse na Organização de Links e Canais.",
    "catalogo-whatsapp": "Olá! Vim pelo site da ORBE e tenho interesse na Organização de Catálogo WhatsApp.",
    "combo-whatsapp-google": "Olá! Vim pelo site da ORBE e tenho interesse no Combo WhatsApp Business + Google.",
    "pacote-express": "Olá! Vim pelo site da ORBE e tenho interesse no Pacote Express.",
    "plano-essencial": "Olá! Vim pelo site da ORBE e gostaria de saber mais sobre o Plano Essencial.",
    "plano-estrategico": "Olá! Vim pelo site da ORBE e gostaria de saber mais sobre o Plano Estratégico."
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
