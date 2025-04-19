const typewriter = document.querySelector('.typewriter');

if (typewriter) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typewriter.classList.add('animate');
        observer.unobserve(typewriter); // Optional: trigger only once
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(typewriter);
}


