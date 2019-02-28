window.addEventListener('load', setContactHeaderHeight);
window.addEventListener('resize', setContactHeaderHeight);

function setHeightBasedOnElement(referenceElement, targetElement) {
  let rHeight = document.querySelector(`${referenceElement}`).getBoundingClientRect().height;
  let tElement = document.querySelector(`${targetElement}`);

  tElement.style.height = `${rHeight}px`;
}


function setContactHeaderHeight() {
  setHeightBasedOnElement('#contact-bg', '.contact-title-container');
  setHeightBasedOnElement('#contact-bg', '#contact-container');
}



