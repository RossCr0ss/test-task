const images = ["image", "BitmapWithMask", "image"];
const oval1 = document.querySelector("button.oval1");
const oval2 = document.querySelector("button.oval2");
const oval3 = document.querySelector("button.oval3");

let i = 1;
const header = document.querySelector("header.header");

function pageLeft() {
  i -= 1;
  if (i < 0) {
    i = images.length - 1;
  }
  let urlString = "url(./img/" + images[i] + ".png)";

  header.style.backgroundImage = urlString;
}

function pageRight() {
  i += 1;
  if (i > images.length - 1) {
    i = 0;
  }
  let urlString = "url(./img/" + images[i] + ".png)";

  header.style.backgroundImage = urlString;
}

function checkOval() {
  switch ((this.i = 0)) {
    case oval1.style.img:
      break;

    default:
      break;
  }
}
