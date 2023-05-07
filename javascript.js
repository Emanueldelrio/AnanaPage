window.onload = function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const imgs = carouselContainer.querySelectorAll('img');
    const prevBtn = carouselContainer.querySelector('.prev-btn');
    const nextBtn = carouselContainer.querySelector('.next-btn');
    let counter = 0;
  
    // create interval of time onload the page
    const interval = setInterval(() => {
      counter++;
      if (counter >= imgs.length) {
        counter = 0;
      }
      setCarouselPosition();
    }, 2000);
  
    // stop the interval on button click
    prevBtn.addEventListener('click', () => {
      clearInterval(interval);
      counter--;
      if (counter < 0) {
        counter = imgs.length - 1;
      }
      setCarouselPosition();
    });
  
    nextBtn.addEventListener('click', () => {
      clearInterval(interval);
      counter++;
      if (counter >= imgs.length) {
        counter = 0;
      }
      setCarouselPosition();
    });
  
    function setCarouselPosition() {
      imgs.forEach((img) => img.classList.remove('active'));
      imgs[counter].classList.add('active');
    }
  };

//creation of dinamic sidebar
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function() {
  sidebar.classList.toggle('active');
});



