const images = ["image", "BitmapWithMask", "image"];
const ovals = ["Oval", "Oval-Active"];
let i = 1;
const header = document.querySelector("header.header");

const firstOval = document.querySelector("button.firstOval");
const secondOval = document.querySelector("button.secondOval");
const thirdOval = document.querySelector("button.thirdOval");
const arrOval = [firstOval, secondOval, thirdOval];

function pageLeft() {
  i -= 1;
  if (i < 0) {
    i = images.length - 1;
  }
  let urlString = "url(./img/" + images[i] + ".png)";

  header.style.backgroundImage = urlString;

  arrOval.forEach(oval => {
    oval.style.backgroundImage = urlString;
  });
}

function pageRight() {
  i += 1;
  if (i > images.length - 1) {
    i = 0;
  }
  let urlString = "url(./img/" + images[i] + ".png)";

  header.style.backgroundImage = urlString;
}

function checkOval() {}
