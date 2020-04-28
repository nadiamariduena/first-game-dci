//   X for horizontal - left-right
//  Y for vertical - up_Down
//
// _1_step
let standPointX = 0;
let standPointY = 0;

//
//
//
//
// _6_step , here i will make the character move  *****
function goRight() {
  standPointX += 10;
  mini.style.left = standPointX + "px";
}
function goLeft() {
  standPointX -= 10;
  mini.style.left = standPointX + "px";
}
function goUp() {
  standPointY -= 10;
  mini.style.top = standPointY + "px";
}
function goDown() {
  standPointY += 10;
  mini.style.top = standPointY + "px";
}

//
// if (e.code == "KeyS") goRight();
//   if (e.code == "KeyA") goLeft();
//   if (e.code == "KeyW") goUp();
//   if (e.code == "KeyZ") goDown();
//
//
// _2_step
let mini = document.querySelector(".mini");
let body = document.querySelector("body");
body.addEventListener("keypress", move);
//
//
//
// _4_step *****
function move(e) {
  //
  // test it by clicking something in the keyboard
  console.log(e);
  //

  //
  //
  //
  // _5_step within the function *****
  // DONT forget to write Key with K capitalize
  //   With the Key , i am calling all the functions
  if (e.code == "KeyS") goRight();
  if (e.code == "KeyA") goLeft();
  if (e.code == "KeyW") goUp();
  if (e.code == "KeyZ") goDown();
  //   After you add this , go to the top to create the functions linked to the axes/movements below:
  //
  //
  //
  // _7_  Here you want to launch an ALERT when the character reaches a stand point, a specific place *****
  if (
    standPointX >= window.innerWidth ||
    standPointY >= window.innerHeight / 1.4
    // original:  if (hStandPoint >= window.innerWidth && vStandPoint >= window.innerHeight / 2)
  )
    alert("CAREFUL!!!!!");
}
// console.log(window.innerWidth);
// console.log(window.innerHeight);
//
//
//
