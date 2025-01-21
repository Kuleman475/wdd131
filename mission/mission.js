const themeSelector = document.querySelector("#theme");
function changeTheme() {

    if(themeSelector.value == "dark"){
        document.body.classList.add("dark");
        let image = document.querySelector(".logo");
        image.src = "byui-logo_white.png";
        image.alt = "dark logo";
    }
    else{
        document.body.classList.remove("dark");
        let image = document.querySelector(".logo");
        image.src = "byui-logo_blue.webp";
        image.alt = "blue logo";
    }
}

themeSelector.addEventListener('change', changeTheme);
