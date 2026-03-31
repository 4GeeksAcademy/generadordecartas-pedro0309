import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  // Números
  let numbers = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
  let randomNumber = Math.floor(Math.random() * numbers.length);

  document.getElementById("number").innerHTML = numbers[randomNumber];

  // Iconos
  let icons = ["♦","♥","♠","♣"];
  let randomIcon = Math.floor(Math.random() * icons.length);
  let selectedIcon = icons[randomIcon];

  document.getElementById("icon1").innerHTML = selectedIcon;
  document.getElementById("icon2").innerHTML = selectedIcon;

  
  if (selectedIcon === "♦" || selectedIcon === "♥") {
    document.getElementById("card").style.color = "red";
  } else {
    document.getElementById("card").style.color = "black";
  }

};