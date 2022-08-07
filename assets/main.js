let banner = document.querySelector('#banner');
let newElement = document.createElement("div");

newElement.setAttribute('id', 'caption');
newElement.innerHTML = '<p>Mari pelajari tentang planet-planet yang ada di tata surya</p>';

banner.appendChild(newElement);

const navSlide = () => {
    const hamburger = document.querySelector('#hamburger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');

    hamburger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });

        hamburger.classList.toggle('toggle');
    });
}

navSlide();