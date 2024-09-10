// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let actionPoints = 100;

function onReady() {
  console.log("Ready to go!");

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}

function attack(att) {
  switch (att) {
    case 0:
      updateHP(14);
      updateAP(12);
      break;
    case 1:
      updateHP(9);
      updateAP(23);
      break;
    case 2:
      updateHP(47);
      updateAP(38);
      break;
    case 3:
      updateHP(25);
      updateAP(33);
      break;
  }
}

function updateHP(damage) {
  fungusHP -= damage;
  if (fungusHP < 0) fungusHP = 0;
  let fungusHPDiv = document.getElementById("hp");
  let fungusHPBar = document.getElementById("hp-meter");
  fungusHPDiv.innerText = `${fungusHP} HP`;
  fungusHPBar.vale = fungusHP;
  if (fungusHP <= 0) {
    let fungusDiv = document.getElementById("fungi");
    fungusDiv.classList.remove("walk");
    fungusDiv.classList.add("dead");
  }
}

function updateAP(cost) {
  actionPoints -= cost;
  if (actionPoints < 0) actionPoints = 0;
  let apText = document.getElementById("ap-text");
  apText.innerText = `${actionPoints} AP`;
  if (actionPoints <= 0) {
    let fungus = document.getElementById("fungi");
    fungus.classList.remove("walk");
    fungus.classList.add("jump");
    let attacks = document.getElementsByClassName("attack-btn");
    for (let attack of attacks) {
      attack.disabled = true;
    }
  }
}

onReady();
