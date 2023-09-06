// Header toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});
// JavaScript code for the "Download CV" button
document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.querySelector('.cv-button');
    downloadButton.addEventListener('click', function () {
        // Add your download logic here
        // For example, you can redirect the user to the CV file URL
        window.location.href = 'your-cv-file.pdf';
    });
});

// JavaScript code for the "Download CV" button
document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.querySelector('.cv-button');
    
    downloadButton.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (i.e., navigating to the file)
        event.preventDefault();

        // Replace 'your-cv-file.pdf' with the actual file path or URL of your CV file
        const cvFileURL = 'your-cv-file.pdf';

        // Create an anchor element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = cvFileURL;
        downloadLink.download = 'your-cv-file.pdf'; // Specify the default file name for download

        // Trigger a click event on the anchor element to initiate the download
        downloadLink.click();
    });
});
//Typing effect
let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
}); 

// Active link state on Scroll

// Get All Links and Sections
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

// Helper function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to update active navigation link
function updateActiveLink() {
    sections.forEach((section, index) => {
        if (isElementInViewport(section)) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', updateActiveLink);

// Initial call to set active link on page load
updateActiveLink();