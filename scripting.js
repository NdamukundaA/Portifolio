// Simple script to demonstrate JavaScript functionality
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is linked successfully!");
  
    // Add smooth scroll for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });
  