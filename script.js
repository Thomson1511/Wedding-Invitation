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
    const bubbleContainer = document.querySelector('.bubble-container');

    // Buborékok adatai: méret, kép URL, pozíció és ID
    const bubbles = [
        { id: 1, size: 120, img: 'assets/images/AboutUs/1.jpg', top: 20, left: 20 },
        { id: 2, size: 150, img: 'assets/images/AboutUs/2.jpg', top: 90, left: 120 },
        { id: 3, size: 80, img: 'assets/images/AboutUs/3.jpg', top: 10, left: 200 },
        { id: 4, size: 120, img: 'assets/images/AboutUs/4.jpg', top: 55, left: 270 },
        { id: 5, size: 90, img: 'assets/images/AboutUs/5.jpg', top: 5, left: 380 },
        //{ id: 6, size: 120, img: 'https://via.placeholder.com/120', top: 20, left: 20 },
    ];

    // Buborékok létrehozása pozíciókkal
    bubbles.forEach((bubble) => {
        const bubbleElement = document.createElement('div');
        bubbleElement.classList.add('bubble');
        bubbleElement.style.width = `${bubble.size}px`;
        bubbleElement.style.height = `${bubble.size}px`;
        bubbleElement.style.background = `url(${bubble.img}) no-repeat center/cover`;
        bubbleElement.setAttribute('data-id', bubble.id);

        // Pozíciók beállítása
        bubbleElement.style.top = `${bubble.top}px`;
        bubbleElement.style.left = `${bubble.left}px`;

        bubbleContainer.appendChild(bubbleElement);
    });

    // Nagyítás vezérlése
    const allBubbles = document.querySelectorAll('.bubble');
    let currentIndex = 0;

    function highlightBubble() {
        // Minden buborék visszaállítása eredeti méretére
        allBubbles.forEach((bubble) => {
            const bubbleData = bubbles[bubble.dataset.id - 1];
            bubble.style.width = `${bubbleData.size}px`;
            bubble.style.height = `${bubbleData.size}px`;
            bubble.style.zIndex = 1; // Alacsonyabb réteg
        });

        // Aktuális buborék nagyítása
       
        setTimeout(() => {
            const currentBubble = allBubbles[currentIndex];
            currentBubble.style.width = '400px';
            currentBubble.style.height = '400px';
            currentBubble.style.zIndex = 10;
          }, "1000");

        

        // Következő buborék indexe
        currentIndex = (currentIndex + 1) % allBubbles.length; // Körbeforgás
    }

    // 3 másodpercenként nagyítás futtatása
    setInterval(highlightBubble, 3000);

    // Az első buborék kiemelése induláskor
    highlightBubble();
});
