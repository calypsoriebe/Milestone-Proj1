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

//I redid the function above because I needed to be able to scale my images that were not the player
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
const player = movingPlayer(1160, 180);

//for non player images
//bottom bushes
movement(resize("assets/regular-bush-1.png.png")).to(5, 10);
movement(resize("assets/empty-bush-1.png.png")).to(50, 10);
movement(resize("assets/regular-bush-1.png.png")).to(100, 10);
movement(resize("assets/regular-bush-1.png.png")).to(150, 10);
movement(resize("assets/regular-bush-1.png.png")).to(200, 10);
//for square homes
movement(resize("assets/red-square-house-1.png.png")).to(5, 80);
movement(resize("assets/red-square-house-1.png.png")).to(150, 80);
movement(resize("assets/red-square-house-1.png.png")).to(5, 250);
movement(resize("assets/trapped-square-house-1.png (1).png")).to(150, 250);
//for forest sign area
movement(resize("assets/treebunch1-1.png.png")).to(85, 550);
movement(resize("assets/red-tree-1.png.png")).to(250, 500);
movement(resize("assets/red-tree-1.png.png")).to(20, 480);
movement(resize("assets/rock-sign-1.png.png")).to(105, 480);
//rest of back forest
movement(resize("assets/treebunch2-1.png.png")).to(1150, 560);
movement(resize("assets/treebunch1-1.png.png")).to(650, 560);
movement(resize("assets/treebunch2-1.png.png")).to(880, 550);
movement(resize("assets/treebunch1-1.png.png")).to(1000, 530);
movement(resize("assets/treebunch1-1.png.png")).to(350, 550);
movement(resize("assets/treebunch2-1.png.png")).to(500, 530);
//for your area
movement(resize("assets/your-house-1.png.png")).to(1150, 200);
movement(resize("assets/campfire-1.png.png")).to(1000, 300);
movement(resize("assets/home-sign-1.png.png")).to(1100, 230);
//purp tree
movement(resize("assets/purpleTree-1.png.png")).to(150, 80);
movement(resize("assets/red-tree-1.png.png")).to(150, 80);
movement(resize("assets/red-tree-1.png.png")).to(150, 80);
movement(resize("assets/red-tree-1.png.png")).to(150, 80);
