const startButton = document.getElementById('StartButton');
startButton.addEventListener('click', pressStartGameButton);

let gameStarted = false;

function pressStartGameButton(e) {
  if (gameStarted) {
    console.log("display of container: " + container.style.display.toString());
    if (container.style.display.toString() === 'flex') {
      container.style.display = 'none';
      e.target.innerText = 'Show Board';
    } else {
      container.style.display = 'flex';
    }
  } else {
    let size = parseInt(prompt("Which size do you want your game to be?"));
    if (typeof size === 'number') {
      gameStarted = true;
      console.log("Game started!")
      drawBoard(size);
      container.style.display = 'flex';
      e.target.innerText = 'Hide Board';
    }
  }
}

const container = document.querySelector('.container');

function drawBoard(size) {

  for (let i = 1; i < size; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    for (let col = 1; col < size; col++) {
      const div = document.createElement('div');
      div.classList.add('white');
      //div.textContent = i.toString();
      div.addEventListener('mouseover', changeColor);
      row.appendChild(div);
    }
  }

}

function changeColor(e) {
  if (e.target.classList.toString() === 'white') {
    e.target.classList.remove('white');
    e.target.classList.add('black');
  } else {
    e.target.classList.remove('black');
    e.target.classList.add('white');
  }
}