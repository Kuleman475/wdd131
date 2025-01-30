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
        // create a variable to hold the element that was clicked on from event.target
    
        // get the src attribute from that element and 'split' it on the "-"
    
        // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    
        // insert the viewerTemplate into the top of the body element
        // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    
        // add a listener to the close button (X) that calls a function called closeViewer when clicked
    
    if (e.target.tagName === 'IMG') { 
        const pic = e.target.src;
        const alt = e.target.alt;

        // // Remove any existing viewer before adding a new one
        // document.querySelector('.viewer')?.remove();

        // Add viewer to the body
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(pic, alt));

        // Close viewer on button click
        document.querySelector('.close-viewer').addEventListener('click', () => {
            document.querySelector('.viewer').remove();
        });
    }
});


document.querySelector('.close-viewer').addEventListener('click', () => {
    console.log("hide");
    document.querySelector(".viewer").remove();
} )