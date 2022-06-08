let browser = document.querySelector("body");
let ruleTab = document.querySelector("#rules");
let gameSpace = document.getElementById("gameWindow");

let player = document.createElement("img");
player.src = "/assets/blue-char-idle.gif";
player.style.left = "200px";
player.style.bottom = "300px";
browser.append(player);
