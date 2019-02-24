window.addEventListener('scroll', zoomElement);


function zoomElement() {
  const elements = document.querySelectorAll('.hidden');
  elements.forEach(element => {
    const distances = element.getBoundingClientRect();
    if (distances.top <= (0 - distances.height)) {
      if (element.classList.contains('zoom')) {
        element.classList.remove('zoom');
      }
    }

    if (distances.top > ((window.innerHeight || document.documentElement.clientHeight))) {
      if (element.classList.contains('zoom')) {
        element.classList.remove('zoom');
      }
    }

    if (distances.top >= 0 &&
      distances.left >= 0 &&
      distances.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distances.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      element.classList.add('zoom');
    }
  })
}