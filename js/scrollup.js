// Scroll Up Function ---------------------------------------------
window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.scroll-up-popup');
    const triggerSection = document.querySelector('#about');
  
    if (!triggerSection || !scrollUp) return;
  
    const triggerTop = triggerSection.offsetTop;
  
    if (window.scrollY > triggerTop - 200) {
      scrollUp.classList.add('visible');
    } else {
      scrollUp.classList.remove('visible');
    }
  });
  