//global variables
let browser = document.querySelector("body");
let ruleTab = document.querySelector("#rules");
let gameSpace = document.getElementById("gameWindow");

//code for clicking character and putting it into game
let blueButton = document.getElementById("button1");
let boyButton = document.querySelector("#button2");
let redButton = document.querySelector("#button3");

//will go back and refactor code later
/*
blueButton.addEventListener("click", function () {
  let character = document.createElement("img");
  character.src = "/assets/blue-char-idle.gif";
  character.style.left = "200px";
  character.style.bottom = "500px";
  gameSpace.append(character);
  element.style.zIndex = 1;

  return character;
});
boyButton.addEventListener("click", function () {
  let character = document.createElement("img");
  character.src = "/assets/boy-char-idle.gif";
  character.style.left = "20px";
  character.style.bottom = "20px";
  gameSpace.append(character);
  element.style.zIndex = 1;

  return character;
});
redButton.addEventListener("click", function () {
  let character = document.createElement("img");
  character.src = "/assets/red-char-idle.gif";
  character.style.left = "20px";
  character.style.bottom = "20px";
  gameSpace.append(character);
  element.style.zIndex = 1;

  return character;
});
*/
//code for moving character around map
let player = document.createElement("img");
player.src = "/assets/blue-char-idle.gif";
player.style.left = "200px";
player.style.bottom = "300px";
browser.append(player);
let direction = null;
let x = 0;
let y = 0;

//this is for positioning purposes
if (direction === "east") {
  x = x + 1;
}
if (direction === "north") {
  y = y + 1;
}
if (direction === "south") {
  y = y - 1;
}
if (direction === "west") {
  x = x - 1;
}
//code for reading sign
/*add event listener for clicking sign
  code for a prompt or words to come up telling you what to do next 
  probably last for like 8 seconds*/

//code for clicking fire
/* event listener for f to turn fire on or maybe to click fire
when button append fire gif and pumplit
pumplit will give prompt to go to sign */

//code for reading sign
/*event listener for that sign along 
with new prompt to go to tree */

//code for purple tree
/*you guessed it another event listener 
for purple tree and out comes onion
prompt telling you to get water bucket and go to campfire again */

//code for water bucket
/*event listener for water bucket and prompt saying you have water bucket now
says press button on fire to put it out */

//code for fire out
/*event listener for fire and will take away fire gif and cloudee comes 
out of the smoke
gives you prompt to look in bushes */

//code for bush
/*you click bush and key comes out with even listener and 
a prompt telling you to go to house and open door with key  */

//code for door
/*event listener for clicking door and then add door gif and bean coming out 
prompt that you finished game  */
