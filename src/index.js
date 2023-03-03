const left = document.querySelector('#left');
const right = document.querySelector('#right');

const carousel = document.querySelector('#carousel');

let count = 0;

left.addEventListener('click', () => {
    if(count === 0) {
        carousel.scrollTo(1500,0);
        count = 1500;
        return;
    }
    if(count === 1500) {
        carousel.scrollTo(900,0);
        count = 900;
        return;
    }
    if(count === 900) {
        carousel.scrollTo(600,0);
        count = 600;
        return;
    }
    if(count === 600) {
        carousel.scrollTo(300,0);
        count = 300;
        return;
    }
    if(count === 300) {
        carousel.scrollTo(0,0);
        count = 0;
        return;
    }
});

right.addEventListener('click', () => {
    if(count === 0) {
        carousel.scrollTo(300,0);
        count = 300;
        return;
    }
    if(count === 300) {
        carousel.scrollTo(600,0);
        count = 600;
        return;
    }
    if(count === 600) {
        carousel.scrollTo(900,0);
        count = 900;
        return;
    }
    if(count === 900) {
        carousel.scrollTo(1500,0);
        count = 1500;
        return;
    }
    if(count === 1500) {
        carousel.scrollTo(0,0);
        count = 0;
        return;
    }
});

const leftDepoiments = document.querySelector('#leftDepoiments');
const rightDepoiments = document.querySelector('#rightDepoiments');

const carouselDepoiments = document.querySelector('#carouselDepoiments');

let count2 = 0;

leftDepoiments.addEventListener('click', () => {
    if(window.screen.width <= 425 ) {
        if(count2 === 0) {
            carouselDepoiments.scrollTo(1300,0);
            count2 = 1800;
            return;
        }
        if(count2 === 1800) {
            carouselDepoiments.scrollTo(1000,0);
            count2 = 1400;
            return;
        }
        if(count2 === 1400) {
            carouselDepoiments.scrollTo(700,0);
            count2 = 800;
            return;
        }
        if(count2 === 800) {
            carouselDepoiments.scrollTo(300,0);
            count2 = 400;
            return;
        }
        if(count2 === 400) {
            carouselDepoiments.scrollTo(0,0);
            count2 = 0;
            return;
        }
        return;
    }
    if(count2 === 0) {
        carouselDepoiments.scrollTo(1800,0);
        count2 = 1800;
        return;
    }
    if(count2 === 1800) {
        carouselDepoiments.scrollTo(1400,0);
        count2 = 1400;
        return;
    }
    if(count2 === 1400) {
        carouselDepoiments.scrollTo(800,0);
        count2 = 800;
        return;
    }
    if(count2 === 800) {
        carouselDepoiments.scrollTo(400,0);
        count2 = 400;
        return;
    }
    if(count2 === 400) {
        carouselDepoiments.scrollTo(0,0);
        count2 = 0;
        return;
    }
});

rightDepoiments.addEventListener('click', () => {
    if(window.screen.width <= 425 ) {
        if(count2 === 0) {
            carouselDepoiments.scrollTo(300,0);
            count2 = 1800;
            return;
        }
        if(count2 === 1800) {
            carouselDepoiments.scrollTo(700,0);
            count2 = 1400;
            return;
        }
        if(count2 === 1400) {
            carouselDepoiments.scrollTo(1000,0);
            count2 = 800;
            return;
        }
        if(count2 === 800) {
            carouselDepoiments.scrollTo(1300,0);
            count2 = 400;
            return;
        }
        if(count2 === 400) {
            carouselDepoiments.scrollTo(0,0);
            count2 = 0;
            return;
        }
        return;
    }
    if(count2 === 0) {
        carouselDepoiments.scrollTo(400,0);
        count2 = 400;
        return;
    }
    if(count2 === 400) {
        carouselDepoiments.scrollTo(800,0);
        count2 = 800;
        return;
    }
    if(count2 === 800) {
        carouselDepoiments.scrollTo(1400,0);
        count2 = 1400;
        return;
    }
    if(count2 === 1400) {
        carouselDepoiments.scrollTo(1800,0);
        count2 = 1800;
        return;
    }
    if(count2 === 1800) {
        carouselDepoiments.scrollTo(0,0);
        count2 = 0;
        return;
    }
});

const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');

const isVisible = (el) => {
    const position = el.getBoundingClientRect();
    const start = position.top;
    const end = position.bottom;

    let visible = false;

    if((start >=0) && (end<= window.innerHeight)) {
        visible = true;
    }

    return visible
}

document.addEventListener('scroll', () => {
    if(isVisible(card1)) {
        card1.classList.add('animate-fadeInUp1');
        card1.classList.remove('opacity-0');
        card2.classList.add('animate-fadeInUp2');
        card2.classList.remove('opacity-0');
        card3.classList.add('animate-fadeInUp3');
        card3.classList.remove('opacity-0');
    }
});