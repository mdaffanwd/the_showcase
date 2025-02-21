document.addEventListener('DOMContentLoaded', () => {
  const navBar = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li');

  const openBtn = document.querySelector('.open-icon');
  const closeBtn = document.querySelector('.close-icon');
  // console.log(openBtn)

  // Logics

  openBtn.addEventListener('click', () => navBar.classList.toggle('active'))

  closeBtn.addEventListener('click', () => navBar.classList.remove('active'))

  navLinks.forEach(link => link.addEventListener('click', () => navBar.classList.remove('active')))

  // close navbar when it's clicked outside of it.
  document.addEventListener('click', (e) => {
    // If click happened outside the navBar and toggle button, close it
    if (!navBar.contains(e.target) && !openBtn.contains(e.target)) {
      navBar.classList.remove('active');
    }
  });

})