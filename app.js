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
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const Img = document.querySelectorAll(" .inner-modal-img img");
// console.log(lastImg);
// console.log(firstImg);
console.log(Img);
let firstImg = Img[0];
let lastImg = Img[1];

console.log(lastImg);
console.log(firstImg);

let status = false;

function prevBtnHandler() {
 status = true;
 if (status == true) {
  firstImg.classList.add("first-updt");
  firstImg.classList.remove("first");

  lastImg.classList.add("last-updt");
  lastImg.classList.remove("last");
  state = false;
 } else {
  firstImg.classList.remove("first-updt");
  firstImg.classList.add("first");

  lastImg.classList.remove("last-updt");
  lastImg.classList.add("last");
  state = true;
 }
 //   firstImg.classList.add("last");
 //  firstImg.classList.add("last");

 //  firstImg.classList.remove("first");
}
function nextBtnHandler() {
 lastImg.classList.add("first");
 firstImg.classList.add("last");

 lastImg.classList.remove("last");
 firstImg.classList.remove("first");
}
leftBtn.addEventListener("click", () => {
 prevBtnHandler();
});
// rightBtn.addEventListener("click", nextBtnHandler);
