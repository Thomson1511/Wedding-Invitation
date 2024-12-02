var countDownDate = new Date("Aug 09, 2025 14:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;

        // Számolja ki az eltelt időt az eredeti időpont és a jelenlegi idő között
        var elapsedTime = now - countDownDate;
        
        var elapsedDays = Math.floor(Math.abs(elapsedTime) / (1000 * 60 * 60 * 24));
        var elapsedHours = Math.floor((Math.abs(elapsedTime) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var elapsedMinutes = Math.floor((Math.abs(elapsedTime) % (1000 * 60 * 60)) / (1000 * 60));
        var elapsedSeconds = Math.floor((Math.abs(elapsedTime) % (1000 * 60)) / 1000);

        // Kiírja az eltelt időt
        document.getElementById("days").innerHTML = elapsedDays;
        document.getElementById("hours").innerHTML = elapsedHours;
        document.getElementById("minutes").innerHTML = elapsedMinutes;
        document.getElementById("seconds").innerHTML = elapsedSeconds;
    }

}, 1000);

document.addEventListener('DOMContentLoaded', function () {
var hamburgerButton = document.getElementById('hamburgerButton');
var navLinks = document.querySelector('.nav-container .links');
var linkClose1 = document.getElementById('linkClose1');
var linkClose2 = document.getElementById('linkClose2');
var linkClose3 = document.getElementById('linkClose3');
var linkClose4 = document.getElementById('linkClose4');

hamburgerButton.addEventListener('click', function () {
    // Toggle the visibility of the navigation links with animation
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
        navLinks.style.animation = 'slideDown 0.5s ease-in-out';
        navLinks.style.display = 'flex';
        //ide kerül a kinézete
        navLinks.style.height = '34vh';
        navLinks.style.position = 'fixed';
        navLinks.style.top = '0';
        navLinks.style.right = '0';
        navLinks.style.left = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.justifyContent = 'center';
        navLinks.style.alignItems = 'center';
        navLinks.style.backgroundImage = 'linear-gradient(rgba(251, 197, 184, 1), rgba(251, 197, 184, 0))';
        //
        hamburgerButton.style.display = 'none';
    } else {
        navLinks.style.animation = 'slideUp 0.5s ease-in-out';
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 500);
    }
});

linkClose1.addEventListener('click', function () {
    // Close the menu with animation
    var isMobileDevice = window.matchMedia("(max-width: 1023px)").matches;
    if (isMobileDevice){
    navLinks.style.animation = 'slideUp 0.5s ease-in-out';
    hamburgerButton.style.display = 'inline';
    setTimeout(() => {
        navLinks.style.display = 'none';
    }, 500);}
});

linkClose2.addEventListener('click', function () {
    // Close the menu with animation
    var isMobileDevice = window.matchMedia("(max-width: 1023px)").matches;
    if (isMobileDevice){
    navLinks.style.animation = 'slideUp 0.5s ease-in-out';
    hamburgerButton.style.display = 'inline';
    setTimeout(() => {
        navLinks.style.display = 'none';
    }, 500);}
});

linkClose3.addEventListener('click', function () {
    // Close the menu with animation
    var isMobileDevice = window.matchMedia("(max-width: 1023px)").matches;
    if (isMobileDevice){
    navLinks.style.animation = 'slideUp 0.5s ease-in-out';
    hamburgerButton.style.display = 'inline';
    setTimeout(() => {
        navLinks.style.display = 'none';
    }, 500);}
});

linkClose4.addEventListener('click', function () {
    // Close the menu with animation
    var isMobileDevice = window.matchMedia("(max-width: 1023px)").matches;
    if (isMobileDevice){
    navLinks.style.animation = 'slideUp 0.5s ease-in-out';
    hamburgerButton.style.display = 'inline';
    setTimeout(() => {
        navLinks.style.display = 'none';
    }, 500);}
});

document.addEventListener('click', function (event) {
var isClickInside = navLinks.contains(event.target) || hamburgerButton.contains(event.target);
// Checking if the device is a mobile device
var isMobileDevice = window.matchMedia("(max-width: 767px)").matches;
if (!isClickInside && isMobileDevice) {
    navLinks.style.animation = 'slideUp 0.5s ease-in-out';
    hamburgerButton.style.display = 'inline';
    setTimeout(() => {
        navLinks.style.display = 'none';
    }, 500);
}
});

});

//slider javascript valami

const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
let autoSlideInterval;

// Funkció a következő képre váltáshoz
function showNextSlide() {
    console.log(slides[currentIndex]);
    slides[currentIndex].classList.remove('active');
    console.log(slides);
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

// Funkció az előző képre váltáshoz
function showPrevSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

// Automatikus képváltás elindítása
function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 5000);
}

// Automatikus képváltás leállítása
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Eseményfigyelők a gombokhoz
nextButton.addEventListener('click', () => {
    stopAutoSlide();
    showNextSlide();
    startAutoSlide();
});

prevButton.addEventListener('click', () => {
    stopAutoSlide();
    showPrevSlide();
    startAutoSlide();
});

// Automatikus indítás
startAutoSlide();

//Kezdetek:

document.addEventListener('DOMContentLoaded', () => {
    const rightBubbleContainer = document.querySelector('.bubble-container.right-bubbles');
    const leftBubbleContainer = document.querySelector('.bubble-container.left-bubbles');

    const rightBubbles = [
        { id: 1, size: 120, img: 'assets/images/AboutUs/1.jpg', top: 20, left: 20 },
        { id: 2, size: 150, img: 'assets/images/AboutUs/2.jpg', top: 90, left: 120 },
        { id: 3, size: 80, img: 'assets/images/AboutUs/3.jpg', top: 10, left: 200 },
    ];

    const leftBubbles = [
        { id: 4, size: 100, img: 'assets/images/AboutUs/1.jpg', top: 30, left: 50 },
        { id: 5, size: 130, img: 'assets/images/AboutUs/2.jpg', top: 70, left: 150 },
        { id: 6, size: 90, img: 'assets/images/AboutUs/3.jpg', top: 40, left: 250 },
    ];

    const createBubbles = (container, bubbles) => {
        bubbles.forEach((bubble) => {
            const bubbleElement = document.createElement('div');
            bubbleElement.classList.add('bubble');
            bubbleElement.style.width = `${bubble.size}px`;
            bubbleElement.style.height = `${bubble.size}px`;
            bubbleElement.style.background = `url(${bubble.img}) no-repeat center/cover`;
            bubbleElement.style.top = `${bubble.top}px`;
            bubbleElement.style.left = `${bubble.left}px`;
            bubbleElement.style.position = 'absolute';

            container.appendChild(bubbleElement);
        });
    };

    createBubbles(rightBubbleContainer, rightBubbles);
    createBubbles(leftBubbleContainer, leftBubbles);

    const getCenterPosition = (container, side) => {
        const rect = container.getBoundingClientRect();
        return {
            x: side === 'right' ? rect.width : 0,
            y: rect.height / 2,
        };
    };

    const highlightBubble = (bubble, centerPosition, containerSide) => {
        // Animált mozgás a középpontba
        bubble.style.transition = 'all 1s ease-in-out';
    
        if (containerSide === 'left') {
            bubble.style.left = `${centerPosition.x - bubble.offsetWidth}px`;
        } else if (containerSide === 'right') {
            bubble.style.left = `${centerPosition.x}px`;
        }
    
        bubble.style.top = `${centerPosition.y - bubble.offsetHeight / 2}px`;
    
        // Buborék nagyítása és z-index előrehozása
        bubble.style.width = '400px';
        bubble.style.height = '400px';
        bubble.style.zIndex = 10;
    };

    const resetBubble = (bubble, originalSize) => {
        bubble.style.transition = ''; // Animáció eltávolítása
        bubble.style.width = `${originalSize}px`;
        bubble.style.height = `${originalSize}px`;
        bubble.style.zIndex = 1;
    };

    let currentIndexRight = 0;
    let currentIndexLeft = 0;

    setInterval(() => {
    const allRightBubbles = document.querySelectorAll('.bubble-container.right-bubbles .bubble');
    const allLeftBubbles = document.querySelectorAll('.bubble-container.left-bubbles .bubble');

    const rightCenter = getCenterPosition(rightBubbleContainer, 'left');
    const leftCenter = getCenterPosition(leftBubbleContainer, 'right');

    // Reset previous bubbles
    if (currentIndexRight > 0) resetBubble(allRightBubbles[currentIndexRight - 1], rightBubbles[currentIndexRight - 1].size);
    if (currentIndexLeft > 0) resetBubble(allLeftBubbles[currentIndexLeft - 1], leftBubbles[currentIndexLeft - 1].size);

    // Highlight current bubbles
    highlightBubble(allRightBubbles[currentIndexRight], rightCenter, 'right');
    highlightBubble(allLeftBubbles[currentIndexLeft], leftCenter, 'left');

    // Update indices
    currentIndexRight = (currentIndexRight + 1) % allRightBubbles.length;
    currentIndexLeft = (currentIndexLeft + 1) % allLeftBubbles.length;
}, 3000);

});
