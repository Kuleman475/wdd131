document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector("button");
    const menuList = document.querySelector("ul");

    menu.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });
});