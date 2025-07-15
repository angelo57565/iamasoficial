// Traduções para os textos do site
const translations = {
  pt: {
    titulo_pagina: "IAMAS - Home",
    menu_home: "Home",
    menu_iamas: "IAMAS",
    menu_trabalho: "Nosso Trabalho",
    menu_doacao: "Doação",
    titulo_home: "Bem-vindo ao Instituto Amazônia Sustentável",
    subtitulo_home: "Conheça nossos projetos e ações para preservar a Amazônia.",
    titulo_noticias_home: "Últimas Notícias",
    noticia1_titulo: "Projeto Saúde na Comunidade",
    noticia1_resumo: "Implantação de postos de atendimento médico e ações preventivas nas comunidades ribeirinhas.",
    noticia2_titulo: "Educação para o Futuro",
    noticia2_resumo: "Oficinas de educação ambiental com foco na preservação da floresta e conscientização dos jovens.",
    noticia3_titulo: "Esporte e Cidadania",
    noticia3_resumo: "Projetos esportivos para inclusão social e promoção da saúde entre crianças e adolescentes.",
    noticia4_titulo: "Projeto de Sustentabilidade",
    noticia4_resumo: "Incentivo à agricultura familiar sustentável e uso consciente dos recursos naturais.",
    noticia5_titulo: "Cultura e Tradição",
    noticia5_resumo: "Valorização das culturas indígenas e ribeirinhas através de eventos e oficinas culturais.",
    noticia6_titulo: "Preservação Ambiental",
    noticia6_resumo: "Ações de reflorestamento e combate ao desmatamento ilegal na Amazônia.",
    botao_saiba_mais: "Saiba Mais",
    titulo_resumo_instituicao: "Sobre o Instituto",
    texto_resumo_instituicao: "O Instituto Amazônia Sustentável trabalha para preservar o meio ambiente e promover o desenvolvimento social das comunidades ribeirinhas e indígenas da Amazônia, por meio de projetos educacionais, culturais e ambientais.",
    titulo_pagina_doacao: "IAMAS - Doação",
    titulo_doacao: "Faça uma Doação",
    texto_doacao: "Sua contribuição ajuda a manter nossos projetos e transformar vidas na Amazônia.",
    botao_paypal: "Doar com PayPal",
  },
  en: {
    titulo_pagina: "IAMAS - Home",
    menu_home: "Home",
    menu_iamas: "IAMAS",
    menu_trabalho: "Our Work",
    menu_doacao: "Donation",
    titulo_home: "Welcome to the Amazon Sustainability Institute",
    subtitulo_home: "Learn about our projects and actions to preserve the Amazon.",
    titulo_noticias_home: "Latest News",
    noticia1_titulo: "Community Health Project",
    noticia1_resumo: "Implementation of medical care posts and preventive actions in riverine communities.",
    noticia2_titulo: "Education for the Future",
    noticia2_resumo: "Environmental education workshops focusing on forest preservation and youth awareness.",
    noticia3_titulo: "Sports and Citizenship",
    noticia3_resumo: "Sports projects for social inclusion and health promotion among children and adolescents.",
    noticia4_titulo: "Sustainability Project",
    noticia4_resumo: "Encouraging sustainable family farming and conscious use of natural resources.",
    noticia5_titulo: "Culture and Tradition",
    noticia5_resumo: "Valuing indigenous and riverine cultures through events and cultural workshops.",
    noticia6_titulo: "Environmental Preservation",
    noticia6_resumo: "Reforestation and combatting illegal deforestation in the Amazon.",
    botao_saiba_mais: "Learn More",
    titulo_resumo_instituicao: "About the Institute",
    texto_resumo_instituicao: "The Amazon Sustainability Institute works to preserve the environment and promote the social development of riverine and indigenous communities in the Amazon, through educational, cultural, and environmental projects.",
    titulo_pagina_doacao: "IAMAS - Donation",
    titulo_doacao: "Make a Donation",
    texto_doacao: "Your contribution helps maintain our projects and transform lives in the Amazon.",
    botao_paypal: "Donate with PayPal",
  },
  es: {
    titulo_pagina: "IAMAS - Inicio",
    menu_home: "Inicio",
    menu_iamas: "IAMAS",
    menu_trabalho: "Nuestro Trabajo",
    menu_doacao: "Donación",
    titulo_home: "Bienvenido al Instituto Amazonía Sostenible",
    subtitulo_home: "Conozca nuestros proyectos y acciones para preservar la Amazonía.",
    titulo_noticias_home: "Últimas Noticias",
    noticia1_titulo: "Proyecto Salud en la Comunidad",
    noticia1_resumo: "Implementación de puestos de atención médica y acciones preventivas en las comunidades ribereñas.",
    noticia2_titulo: "Educación para el Futuro",
    noticia2_resumo: "Talleres de educación ambiental con enfoque en la preservación del bosque y concienciación de los jóvenes.",
    noticia3_titulo: "Deporte y Ciudadanía",
    noticia3_resumo: "Proyectos deportivos para la inclusión social y la promoción de la salud entre niños y adolescentes.",
    noticia4_titulo: "Proyecto de Sostenibilidad",
    noticia4_resumo: "Fomento a la agricultura familiar sostenible y uso consciente de los recursos naturales.",
    noticia5_titulo: "Cultura y Tradición",
    noticia5_resumo: "Valoración de las culturas indígenas y ribereñas a través de eventos y talleres culturales.",
    noticia6_titulo: "Preservación Ambiental",
    noticia6_resumo: "Acciones de reforestación y combate a la deforestación ilegal en la Amazonía.",
    botao_saiba_mais: "Saber Más",
    titulo_resumo_instituicao: "Sobre el Instituto",
    texto_resumo_instituicao: "El Instituto Amazonía Sostenible trabaja para preservar el medio ambiente y promover el desarrollo social de las comunidades ribereñas e indígenas de la Amazonía, a través de proyectos educativos, culturales y ambientales.",
    titulo_pagina_doacao: "IAMAS - Donación",
    titulo_doacao: "Haga una Donación",
    texto_doacao: "Su contribución ayuda a mantener nuestros proyectos y transformar vidas en la Amazonía.",
    botao_paypal: "Donar con PayPal",
  }
};

const languageSelector = document.getElementById("language-selector");
const menuToggle = document.getElementById("menu-toggle");
const navUl = document.querySelector("nav ul");

// Função para trocar o idioma dos elementos que têm o atributo data-key
function translatePage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Troca o atributo lang da tag <html> para ajudar acessibilidade e SEO
  document.documentElement.lang = lang;
}

// Evento para o menu hamburguer abrir e fechar
menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

// Evento para trocar idioma ao selecionar no select
languageSelector.addEventListener("change", (e) => {
  translatePage(e.target.value);
});

// Traduzir a página automaticamente com o idioma padrão no carregamento
window.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.slice(0, 2);
  const defaultLang = ["pt", "en", "es"].includes(userLang) ? userLang : "pt";
  languageSelector.value = defaultLang;
  translatePage(defaultLang);
});