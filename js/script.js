window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        document.getElementById('navbar').style.opacity = 0.9;
    } else {
        document.getElementById('navbar').style.opacity = 1;  
    }
})