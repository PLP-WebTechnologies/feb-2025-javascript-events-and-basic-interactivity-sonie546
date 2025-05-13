// 1. Event Handling
document.getElementById('colorBtn').addEventListener('click', function() {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    this.textContent = "Color Changed!";
});

document.getElementById('hoverDiv').addEventListener('mouseover', function() {
    this.textContent = "Mouse is over me!";
});
document.getElementById('hoverDiv').addEventListener('mouseout', function() {
    this.textContent = "Hover Over Me";
});

document.addEventListener('keypress', function(e) {
    document.getElementById('keyOutput').textContent = `You pressed: ${e.key} (Key code: ${e.keyCode})`;
});

document.getElementById('secretDiv').addEventListener('dblclick', function() {
    this.textContent = "🎉 You found the secret!";
    this.style.backgroundColor = "gold";
});

// 2. Interactive Elements
// Image Gallery
let currentImage = 0;
const images = document.querySelectorAll('.gallery img');

document.getElementById('nextBtn').addEventListener('click', function() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
});

document.getElementById('prevBtn').addEventListener('click', function() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage - 1 + images.length) % images.length;
    images[currentImage].classList.add('active');
});

// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        this.textContent = this.textContent.includes('▼') 
            ? this.textContent.replace('▼', '▲') 
            : this.textContent.replace('▲', '▼');
    });
});

// 3. Form Validation
document.getElementById('password').addEventListener('input', function(e) {
    const feedback = document.getElementById('formFeedback');
    if (e.target.value.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters';
        feedback.className = 'error';
    } else {
        feedback.textContent = 'Password is valid!';
        feedback.className = 'success';
    }
});

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }
    alert('Form submitted successfully!');
});