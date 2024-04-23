// Image Lists
let images = [
    [
        "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    ],
    [
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
    ],
    [
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/460px-Flask_logo.svg.png"
    ]
];

let currentIndex = 0; // Start Point
let time = 3000; // Time Between Switch
let sliders = document.querySelectorAll('.slider');

// Change Image
function changeImg() {
    sliders.forEach((slider, index) => {
        slider.src = images[index][currentIndex];
    });

    // Increment index
    currentIndex = (currentIndex + 1) % images[0].length;

    // Run function every x seconds
    setTimeout(changeImg, time);
}

// Run function when page loads
window.onload = changeImg;