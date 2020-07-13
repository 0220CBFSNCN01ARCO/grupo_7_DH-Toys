window.addEventListener('load', () => {

  let menuSidebar = document.querySelector('.sidebar-right');
  let menuSidebarNav = document.querySelector('#sidebar_toggle_btn');
  let menuSidebarClose = document.querySelector('#sidebar_close_icon');
  let menuSidebarOverlay = document.querySelector('.sidebar_overlay');
  let overlay = document.querySelector('.sidebar_overlay');

  menuSidebarNav.addEventListener('click', function(e){
    e.preventDefault();
    menuSidebarNav.classList.toggle('active');
    menuSidebar.classList.toggle('sidebar-open');
    menuSidebarOverlay.classList.toggle('sidebar_overlay_active');
  })

  menuSidebarClose.addEventListener('click', function(e){
    menuSidebarNav.classList.remove('active');
    menuSidebar.classList.remove('sidebar-open');
    menuSidebarOverlay.classList.remove('sidebar_overlay_active');
  })

  overlay.addEventListener('click', function(e){
    menuSidebarNav.classList.toggle('active');
    menuSidebar.classList.toggle('sidebar-open');
    menuSidebarOverlay.classList.toggle('sidebar_overlay_active');
  })
  /*
  document.querySelector('#sidebar_toggle_btn').addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('#sidebar-right').classList.toggle('sidebar-open')
    document.querySelector("#sidebar-right").classList.toggle('hide')
    document.querySelector(".sidebar_overlay").classList.toggle('hide')
  })

  document.querySelector(".close-icon-black").addEventListener('click', function (e) {
    document.querySelector("#sidebar-right").classList.toggle('hide')
    document.querySelector(".sidebar_overlay").classList.toggle('hide')
  })

  document.querySelector(".sidebar_overlay").addEventListener('click', function (e) {
    document.querySelector("#sidebar-right").classList.toggle('hide')
    document.querySelector(".sidebar_overlay").classList.toggle('hide')
  })*/
})