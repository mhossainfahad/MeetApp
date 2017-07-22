var slideCount = 0;
displaySlide();

function displaySlide() {
    
    var i;
    var slides = document.getElementsByClassName("slider"); 
    
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    
    slideCount++; 
    
    if (slideCount> slides.length) {
        slideCount = 1;
    }
    slides[slideCount-1].style.display = "block";  
    setTimeout(displaySlide, 2000); 
}