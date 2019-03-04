const menuItems = document.querySelector('.tools-menu').children;

for (let item of menuItems) {
  item.addEventListener('click', activeMenuItem);
  let menuID = item.id;
  console.log(menuID);
  if (menuID === 'color-chart') {
    document.querySelector(`#container-${menuID}`).classList.add('page-active');
  } else {
    document.querySelector(`#container-${menuID}`).classList.add('page-not-active');
  }
}


function activeMenuItem() {
  const target = document.querySelector(`#${event.target.id}`);
  const allSiblings = target.parentNode.children;
  for (let item of allSiblings) {
    if (item.id === target.id) {
      item.classList.add('tools-active');
      document.querySelector(`#container-${item.id}`).classList.remove('page-not-active');
      document.querySelector(`#container-${item.id}`).classList.add('page-active');
    } else {
      item.classList.remove('tools-active');
      document.querySelector(`#container-${item.id}`).classList.add('page-not-active');
      document.querySelector(`#container-${item.id}`).classList.add('page-active');
    }
  }

}