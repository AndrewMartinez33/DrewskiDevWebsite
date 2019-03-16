window.addEventListener('load', setFooterHeaderHeight);
window.addEventListener('resize', setFooterHeaderHeight);

function setHeightBasedOnElement(referenceElement, targetElement) {
  console.log(referenceElement, targetElement);
  let rHeight = document.querySelector(`${referenceElement}`).getBoundingClientRect().height;
  let tElement = document.querySelector(`${targetElement}`);

  tElement.style.height = `${rHeight}px`;
}


function setFooterHeaderHeight() {
  setHeightBasedOnElement('.callToAction-img', '.callToAction-container');
  setHeightBasedOnElement('.callToAction-img', '.callToAction-text-container');
}