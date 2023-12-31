(() => {
  const refs = {
    openMobileMenu: document.querySelectorAll('[data-mobile-menu-open]'),
    closeMobileMenu: document.querySelector('[data-mobile-menu-close]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    closeMenuLink: document.querySelectorAll('.mobile-modal-nav-link'),
  };
  refs.openMobileMenu.forEach((element) => {
    element.addEventListener('click', toggleMobileMenu);
  });
  refs.closeMobileMenu.addEventListener('click', toggleMobileMenu);
  refs.closeMenuLink.forEach(item => item.addEventListener('click', toggleMobileMenu));
  //* Закривання по кліку на кнопку мобільного меню
  refs.mobileMenu.addEventListener('click', removeMobileMenu);
  function removeMobileMenu(e) {
    if (e.target === e.currentTarget) {
      refs.mobileMenu.classList.add('is-hidden');
    }
  }
  function toggleMobileMenu() {
    refs.mobileMenu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();