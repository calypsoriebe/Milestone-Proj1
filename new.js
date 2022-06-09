/*I want to note that I did all this code, and I knew how to do it BUT I had to look at past activities 
for some help a few times,because there were a few components I was messing up to have my code not work. 
 */
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
const player = movingPlayer(100, 110);

//for non player images
//bottom bushes
movement(resize("assets/empty-bush-1.png.png")).to(5, 12);
movement(resize("assets/regular-bush-1.png.png")).to(150, 20);
movement(resize("assets/regular-bush-1.png.png")).to(100, 20);
movement(resize("assets/regular-bush-1.png.png")).to(100, 20);
movement(resize("assets/regular-bush-1.png.png")).to(100, 20);
//for square homes
movement(resize("assets/red-square-house-1.png.png")).to(5, 80);
movement(resize("assets/red-square-house-1.png.png")).to(150, 80);
movement(resize("assets/red-square-house-1.png.png")).to(5, 280);
movement(resize("assets/trapped-square-house-1.png (1).png")).to(150, 280);
//for forrest
movement(resize("assets/red-tree-1.png.png"));
movement(resize("assets/red-tree-1.png.png"));
movement(resize("assets/rock-sign-1.png.png"));
movement(resize("assets/treebunch1-1.png.png"));
movement(resize("assets/treebunch1-1.png.png"));
movement(resize("assets/treebunch2-1.png.png"));
movement(resize("assets/treebunch2-1.png.png"));
//for your area
movement(resize("assets/your-house-1.png.png"));
movement(resize("assets/campfire-1.png.png"));
movement(resize("assets/home-sign-1.png.png"));
//purp tree
movement(resize("assets/purpleTree-1.png.png"));
movement(resize("assets/red-tree-1.png.png"));
movement(resize("assets/red-tree-1.png.png"));
movement(resize("assets/red-tree-1.png.png"));
