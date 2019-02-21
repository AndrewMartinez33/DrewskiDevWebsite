// on hamburger click make menu appear
let hamburger = document.querySelector('#nav-hamburger');
let navLeft = document.querySelector('#nav-left');
let navLeftItems = document.querySelectorAll('.navigation-item');


hamburger.addEventListener('click', ResponsiveMenu);
window.addEventListener('resize', ResetNav);

function ResponsiveMenu() {
  navLeftItems.forEach((item) => {
    if (item.classList.contains('responsive-nav-items')) {
      item.classList.remove('responsive-nav-items');
      navLeft.classList.remove('responsive-nav-items-container');
    } else {
      item.classList.add('responsive-nav-items');
      navLeft.classList.add('responsive-nav-items-container');
    }
  })
};

function ResetNav() {
  if (window.innerWidth >= 768) {
    navLeftItems.forEach(item => {
      item.classList.remove('responsive-nav-items');
    })
  }
}