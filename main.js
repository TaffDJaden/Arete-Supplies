
function changeContent(imageSrc, textContent) {
  // Change the image source to the selected product image
  const imageElement = document.getElementById('default-img');
  imageElement.src = imageSrc;

  // Change the paragraph text to the selected product information
  const paragraphElement = document.querySelector('.text-container .torque');
  paragraphElement.textContent = textContent;
}


const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


let element = document.getElementsByClassName("headingThree")[0];
if (element){
  element.style.color="white";
  element.style.backgroundColor="#CA9434";
  element.style.borderRadius="10px";
  element.style.margin="10px";
}








