document.addEventListener('DOMContentLoaded', function () {
  var menuTrigger = document.querySelector('#nav ul li:first-child a');
  var overlayMenu = document.getElementById('overlay-menu');
  if (!menuTrigger || !overlayMenu) return;
  menuTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('menu-open');
  });
  document.addEventListener('click', function (e) {
    if (!document.body.classList.contains('menu-open')) return;
    if (!overlayMenu.contains(e.target) && e.target !== menuTrigger) {
      document.body.classList.remove('menu-open');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') document.body.classList.remove('menu-open');
  });
});
