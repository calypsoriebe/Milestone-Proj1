//for images
let browser = document.getElementById("body");

function newImage(url) {
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
  const element = newImage("assets/blue-char-idle.gif");
  element.style.zIndex = 1;

  function directionChange(direction) {
    if (direction === null) {
      element.src = `assets/blue-char-idle.gif`;
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

/*I want to note that I did all this code, and I knew how to do it BUT I had to look at past activities 
for some help a few times,because there were a few components I was messing up to have my code not work. 
 */
const player = movingPlayer(100, 110);

//for non player images

movement(newImage("assets/bush-set-1-1.png.png")).to(100, 200);
movement(newImage("assets/bush-set-2-1.png.png")).to(200, 300);
newImage("assets/camp-fire-1.png.png");
newImage("assets/empty-bush-1.png.png");
newImage("assets/green-house-1.png.png");
newImage("assets/home-sign-1.png.png");
newImage("assets/purpleTree-1.png.png");
newImage("assets/red-home-1.png.png");
newImage("assets/red-tree-1.png.png");
newImage("assets/red-tree-1.png.png");
newImage("assets/red-tree-1.png.png");
newImage("assets/red-tree-1.png.png");
newImage("assets/red-tree-1.png.png");
newImage("assets/rock-sign-1.png.png");
newImage("assets/trap-house-1.png.png");
newImage("assets/treebunch1-1.png.png");
newImage("assets/treebunch1-1.png.png");
newImage("assets/treebunch2-1.png.png");
newImage("assets/treebunch2-1.png.png");
newImage("assets/your-house-1.png.png");
