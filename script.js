// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

//-----------------------------------------------------------------------

// //Solution 1

// // Réduire la navbar

// let navScroll = 0;

// window.addEventListener("scroll", () => {
//   if (window.scrollY < navScroll) {
//     navbar.style.height = "90px";
//   } else {
//     navbar.style.height = "45px";
//   }
//   navScroll = window.scrollY;
// });

// // Faire apparaitre l'image

// window.addEventListener("scroll", () => {
//   if (window.scrollY < 100) {
//     imgImprovise.style.opacity = "1";
//     imgImprovise.style.transform = "translateX(-40px)";
//   }
// });

// // Faire apparaitre la popup

// console.log(scrollY);

// const popUp = document.querySelector(".pop-up");

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 1000) {
//     popUp.style.opacity = "1";
//     popUp.style.transform = "translateX(0px)";
//   }
// });

// // Fermeture popup au click

// closeBtn.addEventListener("click", () => {
//   popUp.style.opacity = "0";
// });

//-----------------------------------------------------------------------

// //Solution 2

let playOne = true;

window.addEventListener("scroll", () => {
  //navbar effect
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  //img effect
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "none";
  }

  // Popup effect
  if (scrollValue > 0.85 && playOne) {
    popup.style.opacity = "1";
    popup.style.transform = "none";
    playOne = false;
  }

  closeBtn.addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.transform = "500px";
  });
});
