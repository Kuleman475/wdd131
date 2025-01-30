document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector("button");
    const menuList = document.querySelector("ul");

    menu.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });
});
console.log(document.querySelector('.close-viewer')); 

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }
document.querySelector('.gallery').addEventListener('click', (e) => {
        
    let pic = e.target.src;
    const alt = e.target.alt;

    let parts = pic.split("-");
    let newImg = parts[0] + "-full.jpeg";
    pic = newImg;
    console.log(parts);
    console.log(pic);

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(pic, alt));

    document.querySelector('.close-viewer').addEventListener('click', () => {
        document.querySelector('.viewer').remove();
    });
});


document.querySelector('.close-viewer').addEventListener('click', () => {
    console.log("hide");
    document.querySelector(".viewer").remove();
});