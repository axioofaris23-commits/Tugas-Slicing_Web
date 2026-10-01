
const menuBtn = document.getElementById('menu-toggle');
const nav = document.querySelector('.navigation');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // menu menutup otomatis setelah salah satu link ditekan
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('active'));
    });
}


const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = 'home';

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top <= window.innerHeight * 0.35) {
            current = section.id;
        }
    });

    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;
    if (atBottom && sections.length) {
        current = sections[sections.length - 1].id;
    }

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
window.addEventListener('load', updateActiveLink);
updateActiveLink();