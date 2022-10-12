import Helper from "./helper";

class Header {
    constructor() {
        this.body = document.querySelector('body');
        this.header = document.querySelector('.header');
        this.headerBurger = document.querySelector('.burger-menu');
        this.menuItems = document.querySelectorAll('.header-menu__item-with-children');
        this.headerSubmenuItems = document.querySelectorAll('.header-submenu__item-with-children');
        this.submenu = document.querySelector('.submenu');
        this.submenuItems = document.querySelectorAll('.submenu__item');
        this.mainMenu = document.querySelector('.submenu__main-menu');
        this.openClass = "open";
        this.activeClass = "active";
        this.activeItemIndex = null;
        this.activeSubItemIndex = null;
        this.openMenu = this.openMenu.bind(this);
        this.backToMainMenu = this.backToMainMenu.bind(this);
        this.openSubmenu = this.openSubmenu.bind(this);
        this.bindAction = this.bindAction.bind(this);
        this.resizeWindow = this.resizeWindow.bind(this);
        this.init();
    }

    openMenu() {
        this.headerBurger.addEventListener("click", (e) => {
            if (this.header.classList.contains(this.openClass)) {
                this.header.classList.remove(this.openClass)
                this.body.style.overflow = "auto"
            } else {
                this.header.classList.add(this.openClass)
                this.body.style.overflow = "hidden";
            }
        });
    }


    openSubmenu(item, index) {
        item.addEventListener("click", (e) => {
            this.submenu.classList.add(this.openClass);
            this.activeSubItemIndex = index;
            this.submenuItems[this.activeSubItemIndex].classList.add(this.activeClass)
        });
    }

    backToMainMenu() {
        this.mainMenu.addEventListener('click', (e) => {
            this.submenu.classList.remove(this.openClass);
            this.submenuItems[this.activeSubItemIndex].classList.remove(this.activeClass)
            this.activeSubItemIndex = null;
        })
    }

    bindAction(item, index) {
        item.addEventListener("click", (e) => {
            if (this.header.classList.contains(this.openClass)
                && (e.target.classList.contains('header-menu__item-with-children')
                    || e.target.classList.contains('header-menu__title'))) {
                if (this.activeItemIndex === index) {
                    this.menuItems[this.activeItemIndex].classList.remove(
                        this.activeClass
                    );
                    this.activeItemIndex = null;
                } else {
                    if (this.activeItemIndex !== null) {
                        this.menuItems[this.activeItemIndex].classList.remove(
                            this.activeClass
                        );
                    }
                    this.activeItemIndex = index;
                    this.menuItems[this.activeItemIndex].classList.add(
                        this.activeClass
                    );
                }
            }
        });
    }

    resizeWindow() {
        window.addEventListener("resize", (e) => {
            let windowSize = Helper.getWindowSize();
            if ((this.header.classList.contains(this.openClass) || this.submenu.classList.contains(this.openClass))  && windowSize.width >= 992) {
                this.header.classList.remove(this.openClass)
                this.submenu.classList.remove(this.openClass)
                this.body.style.overflow = "auto"
                this.menuItems[this.activeItemIndex].classList.remove(
                    this.activeClass
                );
            }
        });
    }

    init() {
        this.resizeWindow()
        this.openMenu();
        this.backToMainMenu();
        this.menuItems.forEach(this.bindAction);
        this.headerSubmenuItems.forEach(this.openSubmenu);
    }
}

export default Header;