let browser = document.getElementById("body");
//for instructions that are on screen at start
let startWindow = document.getElementById("startWindow");
let header = document.getElementById("header");
header.style.textAlign = "center";
header.style.color = "#443742";
let instructionsPara = document.getElementById("p1");
instructionsPara.append(
  "Hey thanks for playing my game! The point of the game is for you to walk around, and interact with objects around you to find clues! The clues will then help you to find your tomo-mon buddies!"
);
let rulesPara = document.getElementById("p2");
rulesPara.append(
  "Arrow keys to move, left click for things prompting a click, and the m key to turn the music on!"
);
let creditsPara = document.getElementById("p3");
creditsPara.append(
  "Music was made by me! And all the assets I used were either made by me, or are free on itch.io!"
);
let exit = document.createElement("button");
exit.append(
  "click here to start the game, and read the sign next to your house!"
);
startWindow.append(exit);
//function to exit window and play game
function startGame() {
  startWindow.addEventListener("click", () => {
    startWindow.remove();
  });
}
startGame();
//function for images
function newImage(url) {
  let image = document.createElement("img");
  image.src = url;
  image.style.position = "absolute";
  image.style.height = "70px";
  document.body.append(image);
  return image;
}
/*Basically the same functions, with a little altercation because I needed 
to transform some of the images and not all.
*/
function resize(url) {
  let image = document.createElement("img");
  image.src = url;
  image.style.position = "absolute";
  document.body.append(image);
  return image;
}
//for all movement
function movement(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

  function moveWithArrowKeys(left, bottom, callback) {
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + "px";
    element.style.bottom = y + "px";

    function movePlayer() {
      if (direction === "west") {
        x -= 1;
      }
      if (direction === "north") {
        y += 1;
      }
      if (direction === "east") {
        x += 1;
      }
      if (direction === "south") {
        y -= 1;
      }
      element.style.left = x + "px";
      element.style.bottom = y + "px";
    }

    setInterval(movePlayer, 1);

    document.addEventListener("keydown", function (e) {
      if (e.repeat) return;

      if (e.key === "ArrowLeft") {
        direction = "west";
      }
      if (e.key === "ArrowUp") {
        direction = "north";
      }
      if (e.key === "ArrowRight") {
        direction = "east";
      }
      if (e.key === "ArrowDown") {
        direction = "south";
      }
      callback(direction);
    });

    document.addEventListener("keyup", function (e) {
      direction = null;
      callback(direction);
    });
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}
//for character gif movement
function movingPlayer(x, y) {
  const element = newImage("assets/blue-char-idle-fixed.gif");
  element.style.zIndex = 1;

  function directionChange(direction) {
    if (direction === null) {
      element.src = `assets/blue-char-idle-fixed.gif`;
    }
    if (direction === "west") {
      element.src = `assets/blue-char-left.gif`;
    }
    if (direction === "north") {
      element.src = `assets/blue-char-up.gif`;
    }
    if (direction === "east") {
      element.src = `assets/blue-char-right.gif`;
    }
    if (direction === "south") {
      element.src = `assets/blue-char-down-gif.gif`;
    }
  }

  movement(element).withArrowKeys(x, y, directionChange);

  return {
    element: element,
  };
}
const player = movingPlayer(1280, 180);

//for non player images
//bottom bushes
movement(resize("assets/regular-bush-1.png.png")).to(5, 10);
movement(resize("assets/regular-bush-1.png.png")).to(100, 10);
movement(resize("assets/regular-bush-1.png.png")).to(150, 10);
movement(resize("assets/regular-bush-1.png.png")).to(200, 10);
//for square homes
movement(resize("assets/red-square-house-1.png.png")).to(5, 140);
movement(resize("assets/red-square-house-1.png.png")).to(150, 140);
movement(resize("assets/red-square-house-1.png.png")).to(5, 310);
//for forest sign area
movement(resize("assets/treebunch1-1.png.png")).to(85, 600);
movement(resize("assets/red-tree-1.png.png")).to(250, 560);
movement(resize("assets/red-tree-1.png.png")).to(20, 540);
//rest of back forest
movement(resize("assets/treebunch2-1.png.png")).to(1150, 610);
movement(resize("assets/treebunch1-1.png.png")).to(650, 610);
movement(resize("assets/treebunch2-1.png.png")).to(880, 600);
movement(resize("assets/treebunch1-1.png.png")).to(1000, 580);
movement(resize("assets/treebunch1-1.png.png")).to(350, 600);
movement(resize("assets/treebunch2-1.png.png")).to(500, 580);
//purp tree area
movement(resize("assets/red-tree-1.png.png")).to(750, 10);
movement(resize("assets/red-tree-1.png.png")).to(950, 10);
movement(resize("assets/red-tree-1.png.png")).to(1050, 10);
//forest around bucket
movement(resize("assets/treebunch2-1.png.png")).to(1080, 450);
movement(resize("assets/red-tree-1.png.png")).to(1250, 400);
movement(resize("assets/treebunch1-1.png.png")).to(1150, 320);
//for your area
movement(resize("assets/your-house-1.png.png")).to(1250, 170);

//for objects to be picked up
function pickUp(url) {
  let item = newImage(url);
  item.addEventListener("click", () => {
    item.remove();
  });
  return item;
}
//for adding the tomo-mons to the page
function newFriend(url, left, bottom) {
  movement(newImage(url)).to(left, bottom);
}
//function to turn fire on\off
function fireOn(url, replaceUrl) {
  let item = resize(url);
  movement(item).to(1000, 290);
  item.addEventListener("click", () => {
    item.remove();
    let newOne = resize(replaceUrl);
    movement(newOne).to(1000, 290);
    newFriend("assets/Pumplitt-1.png.png", 950, 350);
    objective(
      `Pumplit helped you light the campfire since you found him! For your next clue go to the sign you have NOT already read`
    );
    function fireOff() {
      newOne.addEventListener("dblclick", () => {
        newOne.remove();
        browser.append(item);
        //cannot use resize or newimage function because I have to resize him further
        let cloud = document.createElement("img");
        cloud.src = "assets/clouds.gif";
        cloud.style.position = "absolute";
        cloud.style.height = "130px";
        document.body.append(cloud);
        movement(cloud).to(990, 350);
        objective(
          `Isn't it cool that you found Cloudee in the steam made from the water and fire!!! If I were you I would go to the bushes under the homes and click the odd one out!`
        );
      });
    }
    fireOff();
  });
}
//function for objective box that pops up
function objective(wantedText) {
  let window = document.createElement("div");
  let text = document.createElement("p");
  let windowHead = document.createElement("h3");
  let tip = document.createElement("p");
  window.style.border = "2px solid #443742";
  window.style.width = "20em";
  window.style.height = "12em";
  window.style.backgroundColor = "#D8B7AB";
  window.style.paddingLeft = "1em";
  window.style.paddingBottom = ".5em";
  window.style.justifyContent = "center";
  window.style.position = "absolute";
  window.style.bottom = "550px";
  window.style.left = "990px";
  windowHead.style.fontFamily = "Marker Felt, fantasy";
  text.style.fontFamily = "fantasy";
  tip.style.fontSize = "15px";
  tip.style.fontFamily = "fantasy";
  windowHead.append("Current Objective");
  window.append(windowHead);
  tip.append("Double click me to make me go away!");
  window.append(text);
  window.append(tip);
  text.append(wantedText);
  browser.append(window);
  function goAway() {
    window.addEventListener("dblclick", () => window.remove());
  }
  goAway();
}
//function for clicking elements that need pop up text
function forPopUps(url, wantedText, coordLeft, coordBottom) {
  let item = resize(url);
  movement(item).to(coordLeft, coordBottom);
  item.addEventListener("click", () => {
    objective(wantedText);
  });
}
//function for playing music
function music() {
  let music = new Audio("assets/PixelBGM.mp3");
  document.addEventListener("keypress", function (e) {
    if (e.key === "m") {
      music.play();
      music.loop = true;
    }
  });
}
music();
//function for purple tree

function onionTree() {
  let tree = resize("assets/purpleTree-1.png.png");
  movement(tree).to(850, 10);
  tree.addEventListener("click", () => {
    objective(
      "You found onion!! He said to pick up the watering can in the East forest, and then double click on the campfire!"
    );
    newFriend("assets/onions-1.png.png", 860, 105);
  });
}
onionTree();
//function for green house
function bean() {
  let house = resize("assets/trapped-square-house-1.png (1).png");
  movement(house).to(150, 310);
  house.addEventListener("click", () => {
    objective(
      "CONGRATS!!! You found Bean! He was the last one to find and you wont! Game over! Thank you so much for playing my silly game, hopefully you enjoyed! :)"
    );
    newFriend("assets/bean-snore.gif", 140, 290);
  });
}
bean();
movement(pickUp("assets/water-bucket-1.png.png")).to(1120, 400);
fireOn("assets/campfire-1.png.png", "assets/campfire-active.gif");
forPopUps(
  "assets/home-sign-1.png.png",
  "Your first friend will be found by walking to the campfire, and clicking on it!",
  1220,
  180
);
forPopUps(
  "assets/rock-sign-1.png.png",
  "Good job making it this far! Your next friend can be found by clicking the tree that has different fruit than the rest.",
  105,
  540
);
forPopUps(
  "assets/empty-bush-1.png.png",
  "You're almost at the end! This is your last and trickiest clue! Click on the house different from the rest to find your last friend!",
  50,
  10
);
