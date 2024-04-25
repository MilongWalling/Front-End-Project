const navEl = document.querySelector('.nav-container')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navEl.classList.add('navbar-scrolled');
  } else {
    navEl.classList.remove('navbar-scrolled');
  }
})