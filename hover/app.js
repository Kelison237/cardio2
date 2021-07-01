const flexBox = document.querySelector(".flex_images").children;


const changeImage = (event) => {
  document.querySelector(".pro_image").src = event.children[0].src;
  for ( i = 0; i < flexBox.length; i++) {
    flexBox[i].classList.remove("active");
  }
  event.classList.add("active");
}
// let altText = () => {
//   let img = document.querySelector("#kelison");
  
// }

let images = document.querySelectorAll("#kelison");
images.forEach(function(image){
  let text = image.getAttribute("alt");
  image.addEventListener("mouseover", function(e){
    let bigImage = document.querySelector("#bigImage img");
    bigImage.setAttribute("alt", text);
    let p = document.querySelector("#pipp");
    p.innerHTML = text;
    })
})


// let altTextd = () => {
//   let img = document.querySelector("#kelison1");
//   let a = img.getAttribute("alt");
//   let p = document.querySelector("#pipp");
//   p.innerHTML = a;
// }
// let altTextd = () => {
//   let img = document.querySelector("#kelison2");
//   let a = img.getAttribute("alt");
//   let p = document.querySelector("#pipp");
//   p.innerHTML = a;
// }

