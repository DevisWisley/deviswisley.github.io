/*==================== SEO Meta Tag ====================*/
document.addEventListener('DOMContentLoaded', function() {
    document.title = "Devis Wisley Situmorang - Portofolio";

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Portofolio Devis Wisley Situmorang, menampilkan karya-karya terbaik dalam pengembangan web dan teknologi informasi.';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Portofolio, Devis Wisley Situmorang, Pengembangan Web, Teknologi Informasi';
    document.head.appendChild(metaKeywords);

    const metaOgTitle = document.createElement('meta');
    metaOgTitle.property = 'og:title';
    metaOgTitle.content = 'Portofolio Devis Wisley Situmorang';
    document.head.appendChild(metaOgTitle);

    const metaOgDescription = document.createElement('meta');
    metaOgDescription.property = 'og:description';
    metaOgDescription.content = 'Portofolio Devis Wisley Situmorang, menampilkan karya-karya terbaik dalam pengembangan web dan teknologi informasi.';
    document.head.appendChild(metaOgDescription);

    const metaOgUrl = document.createElement('meta');
    metaOgUrl.property = 'og:url';
    metaOgUrl.content = 'https://deviswisley.github.io/';
    document.head.appendChild(metaOgUrl);
});

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}   
navLink.forEach(n => n.addEventListener("click", linkAction))

/*==================== TYPING TEXT ====================*/
const typed = new Typed('.multiple-text',  {
    strings: ['Android Developer', 'Design Engineer', 'Game Developer', 'Network Engineer', 'Reverse Engineer', 'Software Development', 'Web Development'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content')
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        })
        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
        })
        tab.classList.add("qualification__active");
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalCloses) => {
    modalCloses.addEventListener('click', () =>{
        modalViews.forEach((modalViews) =>{
            modalViews.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/*==================== DIALOG CONTACT METHOD ====================*/
document.getElementById('contact-button').addEventListener('click', function() {
    document.getElementById('contact-dialog').style.display = 'block';
});

document.querySelector('.contact-dialog-close').addEventListener('click', function() {
    document.getElementById('contact-dialog').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('contact-dialog')) {
        document.getElementById('contact-dialog').style.display = 'none';
    }
});

document.querySelectorAll('.contact-dialog-option').forEach(function(option) {
    option.addEventListener('click', function() {
        const method = this.querySelector('span').textContent;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        if (method === 'Gmail') {
            window.location.href = `mailto:deviswisley27@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\nMessage: ' + message)}`;
        } else if (method === 'SMS') {
            window.location.href = `sms:6282274107967?body=${encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\nMessage: ' + message)}`;
        } else if (method === 'Telegram') {
            const telegramMessage = `Nama: ${name}%0AEmail: ${email}%0ASubjek: ${subject}%0APesan: ${message}`;
            const telegramUrl = `https://t.me/deviswisley?text=${telegramMessage}`;
            window.open(telegramUrl, '_blank');
        } else if (method === 'WhatsApp') {
            const whatsappMessage = `Nama: ${name}%0AEmail: ${email}%0ASubjek: ${subject}%0APesan: ${message}`;
            const whatsappUrl = `https://wa.me/6282274107967?text=${whatsappMessage}`;
            window.open(whatsappUrl, '_blank');
        }
        document.getElementById('contact-dialog').style.display = 'none';
    });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80)
    nav.classList.add("scroll-header");
    else
    nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560)
    scrollUp.classList.add("show-scroll");
    else
    scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);

/*==================== ANTI INSPECTION ====================*/
document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
        e.keyCode === 86 || 
        e.keyCode === 85 || 
        e.keyCode === 117)) { 
        alert('Tidak diizinkan untuk menggunakan fungsi ini.');
        return false;
    } else {
        return true;
    }
};