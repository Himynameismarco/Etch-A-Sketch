const startButton = document.getElementById('StartButton');
startButton.addEventListener('click', pressCentralButton);

let gameStarted = false;

function pressCentralButton(e) {
  if (gameStarted) {
    console.log("display of container: " + container.style.display.toString());
    toggleDrawBoard(e);
  } else {
    let size = parseInt(prompt("Which size do you want your draw board to be?"));
    if (typeof size === 'number' && size > 0 && size <= 100) {
      gameStarted = true;
      console.log("Game started!");
      drawBoard(size);
      toggleDrawBoard(e);
    } else {
      alert("Invalid input. Please type a value between 1 and 100. ")
    }
  }
}

function toggleDrawBoard(e) {
  if (container.style.display.toString() === 'flex') {
    container.style.display = 'none';
    e.target.innerText = 'Show Board';
  } else {
    container.style.display = 'flex';
    e.target.innerText = 'Hide Board';
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