let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
};

// Fecha o menu ao clicar em um link e volta o ícone para "menu"
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = (e) => {
        // Scroll suave
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
        navbar.classList.remove('active');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
    };
});

// Configuração global do ScrollReveal
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 1200,
    delay: 200
});

// Efeito de apresentação inicial para o header e home
ScrollReveal().reveal('.header', { origin: 'top', duration: 1000, distance: '40px', delay: 100 });
ScrollReveal().reveal('.home-content, .home-img', { origin: 'left', interval: 200, duration: 1200 });

// Efeito de rolagem para cada seção principal
ScrollReveal().reveal('.sobre', { origin: 'right', duration: 1200 });
ScrollReveal().reveal('.services', { origin: 'bottom', duration: 1200 });
ScrollReveal().reveal('.Educação', { origin: 'left', duration: 1200 });
ScrollReveal().reveal('.portfolio', { origin: 'top', duration: 1200 });
ScrollReveal().reveal('.contacto', { origin: 'bottom', duration: 1200 });
ScrollReveal().reveal('.footer', { origin: 'bottom', duration: 1000 });

// Efeitos especiais para conteúdos de cada seção
ScrollReveal().reveal('.services-box', {
    origin: 'left',
    interval: 150,
    distance: '40px',
    duration: 1000
});

ScrollReveal().reveal('.col .box', {
    origin: 'right',
    interval: 150,
    distance: '40px',
    duration: 1000
});

ScrollReveal().reveal('.portfolio-box', {
    origin: 'top',
    interval: 120,
    distance: '50px',
    duration: 1200
});

// Efeito de fade-in global na abertura do site
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 200);
});

// HOME
ScrollReveal().reveal('.home-content', { origin: 'bottom', distance: '60px', duration: 1200, delay: 200 });
ScrollReveal().reveal('.home-img', { origin: 'top', distance: '60px', duration: 1200, delay: 400 });

// SOBRE
ScrollReveal().reveal('.sobre-img', { origin: 'left', distance: '60px', duration: 1200, delay: 200 });
ScrollReveal().reveal('.sobre-content', { origin: 'right', distance: '60px', duration: 1200, delay: 400 });

// SERVIÇOS
ScrollReveal().reveal('.services-box', { origin: 'bottom', distance: '40px', duration: 1000, interval: 200 });

// EDUCAÇÃO/RESUMO (cards alternados)
ScrollReveal().reveal('.timeline-row.left', {
    origin: 'left', distance: '80px', opacity: 0, duration: 1200, delay: 200, interval: 200
});
ScrollReveal().reveal('.timeline-row.right', {
    origin: 'right', distance: '80px', opacity: 0, duration: 1200, delay: 200, interval: 200
});

// PORTFOLIO
ScrollReveal().reveal('.portfolio-box', {
    origin: 'top', distance: '50px', duration: 1200, interval: 150, scale: 0.95
});

// CONTACTO
ScrollReveal().reveal('.contacto h2', { origin: 'bottom', distance: '40px', duration: 1000, delay: 100 });
ScrollReveal().reveal('.contacto form .input-box', { origin: 'bottom', distance: '40px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.contacto form textarea', { origin: 'bottom', distance: '40px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.contacto form .btn', { origin: 'bottom', distance: '40px', duration: 1000, delay: 700 });

// TypeIt - animação de escrita automática
new TypeIt("#typeit", {
    strings: [
        "Designer gráfico",
        "T. Informático"
    ],
    speed: 80,
    breakLines: false,
    deleteSpeed: 50,
    nextStringDelay: 1200,
    loop: true,
    waitUntilVisible: true
}).go();

// Formulário de contato
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');
if (form) {
    form.onsubmit = function(e) {
        message.textContent = 'Enviando...';
        setTimeout(() => {
            message.textContent = 'Mensagem enviada com sucesso!';
            form.reset();
        }, 1500);
        e.preventDefault();
    };
}

// Lightbox do portfólio
document.querySelectorAll('.portfolio-box img').forEach(img => {
    img.style.cursor = 'pointer';
    img.onclick = () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = 9999;
        const bigImg = document.createElement('img');
        bigImg.src = img.src;
        bigImg.style.maxWidth = '90vw';
        bigImg.style.maxHeight = '90vh';
        overlay.appendChild(bigImg);
        overlay.onclick = () => document.body.removeChild(overlay);
        document.body.appendChild(overlay);
    };
});

// Tabs Resumo (Formação Académica / Experiência Profissional)
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.dataset.tab).classList.add('active');
    });
});
