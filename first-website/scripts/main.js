const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pekoch.jpg") {
    myImage.setAttribute("src", "images/pekoch_gauche.jpg");
  } else {
    myImage.setAttribute("src", "images/pekoch.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bienvenue sur le Lead, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Bienvue sur le Lead, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});