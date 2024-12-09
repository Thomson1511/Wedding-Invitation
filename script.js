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
        { id: 1, size: 120, img: 'assets/images/AboutUs/Tomi/1.jpg', top: 20, left: 20, focusX: 20, focusY: 20 },
        { id: 2, size: 85, img: 'assets/images/AboutUs/Tomi/13.jpg', top: 5, left: 140, focusX: 40, focusY: 60  },
        { id: 3, size: 150, img: 'assets/images/AboutUs/Tomi/2.jpg', top: 95, left: 120, focusX: 40, focusY: 40 },
        { id: 4, size: 80, img: 'assets/images/AboutUs/Tomi/3.jpg', top: 10, left: 230, focusX: 0, focusY: 20  },
        { id: 5, size: 170, img: 'assets/images/AboutUs/Tomi/4.jpg', top: 65, left: 270, focusX: 40, focusY: 60  },
        { id: 6, size: 100, img: 'assets/images/AboutUs/Tomi/5.jpg', top: 8, left: 440, focusX: 60, focusY: 60  },
        { id: 7, size: 70, img: 'assets/images/AboutUs/Tomi/6.jpg', top: 120, left: 445, focusX: 60, focusY: 0  },
        { id: 8, size: 200, img: 'assets/images/AboutUs/Tomi/7.jpg', top: 40, left: 535, focusX: 60, focusY: 60  },
        { id: 9, size: 140, img: 'assets/images/AboutUs/Tomi/8.jpg', top: 190, left: 5, focusX: 60, focusY: 0  },
        { id: 10, size: 80, img: 'assets/images/AboutUs/Tomi/9.jpg', top: 250, left: 150, focusX: 60, focusY: 30  },
        { id: 11, size: 170, img: 'assets/images/AboutUs/Tomi/10.jpg', top: 235, left: 235, focusX: 60, focusY: 60  },
        { id: 12, size: 90, img: 'assets/images/AboutUs/Tomi/11.jpg', top: 200, left: 405, focusX: 60, focusY: 20  },
        { id: 13, size: 100, img: 'assets/images/AboutUs/Tomi/12.jpg', top: 295, left: 410, focusX: 40, focusY: 60  },
        { id: 13, size: 110, img: 'assets/images/AboutUs/Tomi/13.jpg', top: 230, left: 500, focusX: 40, focusY: 60  },
        
    ];

    const leftBubbles = [
        { id: 4, size: 100, img: 'assets/images/AboutUs/Viki/1.jpg', top: 30, left: 50, focusX: 60, focusY: 60 },
        { id: 5, size: 130, img: 'assets/images/AboutUs/Viki/2.jpg', top: 70, left: 150, focusX: 60, focusY: 60 },
        { id: 6, size: 90, img: 'assets/images/AboutUs/Viki/3.jpg', top: 90, left: 290, focusX: 60, focusY: 60 },
    ];

    const getScreenMultiplier = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1920) return 1;
        else if (screenWidth >= 1820 && screenWidth < 1920) return 0.98;
        else if (screenWidth >= 1720 && screenWidth < 1820) return 0.93;
        else if (screenWidth >= 1620 && screenWidth < 1720) return 0.88;
        else if (screenWidth >= 1520 && screenWidth < 1620) return 0.83;
        return 0.81; // Default for smaller screens
    };

    const leftHeader = document.getElementById("leftHead");
    const rightHeader = document.getElementById("rightHead");

    const multiplier = getScreenMultiplier();

    leftHeader.style.left = 315 * multiplier;
    leftHeader.style.fontSize = 40 * multiplier;
    rightHeader.style.left = 315 * multiplier;
    rightHeader.style.fontSize = 40 * multiplier;

    const createBubbles = (container, bubbles) => {
        const multiplier = getScreenMultiplier();
        bubbles.forEach((bubble) => {
            const bubbleElement = document.createElement('div');
            bubbleElement.classList.add('bubble');
            bubbleElement.style.width = `${bubble.size * multiplier}px`;
            bubbleElement.style.height = `${bubble.size * multiplier}px`;
            bubbleElement.style.background = `url(${bubble.img}) no-repeat center/cover`;
            bubbleElement.style.backgroundPosition = `${bubble.focusX}% ${bubble.focusY}%`;
            bubbleElement.style.top = `${bubble.top * multiplier}px`;
            bubbleElement.style.left = `${bubble.left * multiplier}px`;
            bubbleElement.style.position = 'absolute';

            container.appendChild(bubbleElement);
        });
    };

    createBubbles(rightBubbleContainer, rightBubbles);
    createBubbles(leftBubbleContainer, leftBubbles);

    // Define fixed center positions
    const usSection = document.querySelector('#us');
    const usSectionHeight = usSection.offsetHeight;
    const verticalCenter = (usSectionHeight / 2) - 160;

    const rightCenter = { x: 0, y: verticalCenter };
    const leftContainerWidth = leftBubbleContainer.offsetWidth;
    const leftCenter = { x: leftContainerWidth - 400, y: verticalCenter }; // Updated to align the bubble's right edge with the container's right edge

    const highlightBubble = (bubble, centerPosition) => {
        bubble.style.transition = 'all 1s ease-in-out';
        bubble.style.left = `${centerPosition.x}px`;
        bubble.style.top = `${centerPosition.y - bubble.offsetHeight / 2}px`;
        bubble.style.width = '400px';
        bubble.style.height = '400px';
        bubble.style.zIndex = 10;
    };

    const resetBubble = (bubble, originalBubbleData) => {
        const multiplier = getScreenMultiplier();
        bubble.style.transition = ''; // Remove animation
        bubble.style.width = `${originalBubbleData.size * multiplier}px`;
        bubble.style.height = `${originalBubbleData.size * multiplier}px`;
        bubble.style.zIndex = 1;
        bubble.style.top = `${originalBubbleData.top * multiplier}px`;
        bubble.style.left = `${originalBubbleData.left * multiplier}px`;
    };

    let currentIndexRight = 0;
    let currentIndexLeft = 0;
    let previousIndexRight = null;
    let previousIndexLeft = null;

    setInterval(() => {
        const allRightBubbles = document.querySelectorAll('.bubble-container.right-bubbles .bubble');
        const allLeftBubbles = document.querySelectorAll('.bubble-container.left-bubbles .bubble');

        // Reset previous bubbles
        if (previousIndexRight !== null) {
            resetBubble(allRightBubbles[previousIndexRight], rightBubbles[previousIndexRight]);
        }
        if (previousIndexLeft !== null) {
            resetBubble(allLeftBubbles[previousIndexLeft], leftBubbles[previousIndexLeft]);
        }

        // Highlight current bubbles
        highlightBubble(allRightBubbles[currentIndexRight], rightCenter);
        highlightBubble(allLeftBubbles[currentIndexLeft], leftCenter);

        // Update previous indices
        previousIndexRight = currentIndexRight;
        previousIndexLeft = currentIndexLeft;

        // Update current indices
        currentIndexRight = (currentIndexRight + 1) % allRightBubbles.length;
        currentIndexLeft = (currentIndexLeft + 1) % allLeftBubbles.length;
    }, 3000);
});


