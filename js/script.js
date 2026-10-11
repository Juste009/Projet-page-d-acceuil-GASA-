const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const header = document.getElementById('header');
const toTop = document.getElementById('toTop');

// Menu mobile : ouverture / fermeture
burger.addEventListener('click', () => {
    const ouvert = nav.classList.toggle('nav--open');
    burger.classList.toggle('burger--open', ouvert);
    burger.setAttribute('aria-expanded', ouvert);
});

// Fermeture du menu après un clic sur un lien
nav.querySelectorAll('a').forEach(lien => {
    lien.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        burger.classList.remove('burger--open');
        burger.setAttribute('aria-expanded', false);
    });
});

// Header réduit et bouton retour en haut au défilement
window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 40);
    toTop.classList.toggle('to-top--visible', window.scrollY > 500);
});

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Apparition légère des éléments au défilement
const observer = new IntersectionObserver(entrees => {
    entrees.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('reveal--visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
