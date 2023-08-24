let aForYou = document.querySelector(".hero-top-foryou");
let aFollowing = document.querySelector(".hero-top-following");

aForYou.addEventListener("click", () => {
  aForYou.classList.toggle("border-bottom-color")  
})

aFollowing.addEventListener("click", () => {
  aFollowing.classList.toggle("border-bottom-color")  
})