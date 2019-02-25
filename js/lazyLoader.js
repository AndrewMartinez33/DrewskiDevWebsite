window.addEventListener('scroll', lazyLoader);


function lazyLoader() {
  const elements = document.querySelectorAll('.lazy-load');
  elements.forEach(element => {
    // return object with the height and width of the element, along with its distance from the top, bottom, right, and left.
    const distances = element.getBoundingClientRect();

    //if the element is within the boundaries of the viewport
    if (distances.top >= 0 &&
      distances.left >= 0 &&
      distances.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distances.right <= (window.innerWidth || document.documentElement.clientWidth)) {

      const imageSource = element.getAttribute('data-src');
      element.setAttribute('src', imageSource);
    }
  })
}