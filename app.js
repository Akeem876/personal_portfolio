// modal data
const modalOpener = document.querySelector(".port");
const modal = document.querySelector(".port-modal");
// console.log(modalOpener);
// console.log(modal);
modalOpener.addEventListener("click", () => {
 if (!modal.classList.contains("open")) {
  modal.classList.add("open");
 } else {
  modal.classList.remove("open");
 }
});
const outerModal = document.querySelector(".port-modal-outer");
outerModal.addEventListener(
 "click",
 (e) => {
  if (e.target === outerModal) {
   //    console.log(e.target);
   modal.classList.remove("open");
  }
 },
 true
);

// modal button data
const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");
const img = document.querySelector(".inner-modal-img").children;
const length = img.length;
let index = 0;
const btnHandler = (direction) => {
 //  console.log(index);

 if (direction === "next") {
  index++;
  for (i = 0; i < length; i++) {
   img[i].classList.remove("active");
   img[i].classList.add("last");
  }
  if (index === length) {
   index = 0;
  }
  img[index].classList.remove("last");
  img[index].classList.add("active");
 } else {
  index--;
  for (i = 0; i < length; i++) {
   img[i].classList.remove("active");
   img[i].classList.add("last");
  }
  if (index < 0) {
   index = length - 1;
  }
  img[index].classList.remove("last");
  img[index].classList.add("active");
 }
};
prevBtn.addEventListener("click", () => {
 btnHandler("prev");
});
nextBtn.addEventListener("click", () => {
 btnHandler("next");
});
