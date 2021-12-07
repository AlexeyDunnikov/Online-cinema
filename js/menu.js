const openMenu = (nav, activeClass) => {
  nav.classList.add(activeClass);
};

const closeMenu = (nav, activeClass) => {
  nav.classList.remove(activeClass);
};

const slideMenu = ({ menu, classActiveMenu, openBtn, closeTrigger } = {}) => {
  const navBtnOpen = document.querySelector(openBtn);
  const navCloseTriggers = document.querySelectorAll(closeTrigger.join(", "));
  const navMenu = document.querySelector(menu);

  navBtnOpen.addEventListener("click", (evt) => {
    openMenu(navMenu, classActiveMenu);
  });

  navCloseTriggers.forEach((item) => {
    item.addEventListener("click", (evt) => {
      closeMenu(navMenu, classActiveMenu);
    });
  });
};

export default slideMenu;
