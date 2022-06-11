let browser = document.getElementById("body");
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
const trapHouse = movement(
  resize("assets/trapped-square-house-1.png (1).png")
).to(150, 310);
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
//purp tree
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
//function to turn fire on\off
function fireOn(url, replaceUrl) {
  let item = resize(url);
  movement(item).to(1000, 290);

  item.addEventListener("click", () => {
    item.remove();
    let newOne = resize(replaceUrl);
    browser.append(newOne);
    movement(newOne).to(1000, 290);
    function fireOff() {
      newOne.addEventListener("dblclick", () => {
        newOne.remove();
        browser.append(item);
      });
    }
    fireOff();
  });
}
//function for clicking elements that need pop up text
function forPopUps(url, wantedText, coordLeft, coordBottom) {
  let item = resize(url);
  movement(item).to(coordLeft, coordBottom);
  item.addEventListener("click", () => {
    let window = document.createElement("div");
    let text = document.createElement("p");
    text.append(wantedText);
    window.append(text);
    browser.append(window);
  });
}

movement(pickUp("assets/water-bucket-1.png.png")).to(1120, 400);
fireOn("assets/campfire-1.png.png", "assets/campfire-active.gif");
forPopUps("assets/home-sign-1.png.png", "this is a test", 1220, 180);
forPopUps("assets/rock-sign-1.png.png", "once again a test", 105, 540);
forPopUps("assets/purpleTree-1.png.png", "purp tree", 850, 10);
forPopUps("assets/empty-bush-1.png.png", "bush", 50, 10);
