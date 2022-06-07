const board = document.getElementById("board");
const score_display = document.getElementById("score");
const restart_btn = document.getElementById("restart-btn");

restart_btn.addEventListener('click', restart);

let rows = 4;
let cols = 4; 
let score = 0;

function restart(){
    board.classList.add("shake");
    setTimeout(() => {
      board.classList.remove("shake");
    rows = 4;
    cols = 4;
    score = 0;
    score_display.innerHTML= score;
    createBoard(rows,cols);
    
    },500);
    
}

function evaluateAnswer(e){
  
  const cell = e.target;
  
  if(cell.dataset.oddCell){
    rows++;
    cols++;
    score++;
    // console.log(score_display);
    score_display.innerHTML= score;
    
    createBoard(rows,cols);
  }
  else
    restart();  
}

function emptyBoard(){
  while (board.hasChildNodes()) {
  board.removeChild(board.firstChild);
  }
}

function createBoard(rows, cols){
  
  emptyBoard();
  const odd_row = Math.floor(Math.random() * rows);
  const odd_col = Math.floor(Math.random() * cols);
  
  console.log(odd_row, odd_col);
  
  const red = Math.round(Math.random() * 256);
  const green = Math.round(Math.random() * 256);
  const blue = Math.round(Math.random() * 256);
  
  const color = "rgb(" + red + "," + green + "," + blue + ")";
  
  for(let i=1; i<=rows; i++){
    const row = document.createElement("tr");
    
    for(let j=1; j<=cols; j++){
      const cell = document.createElement("td");
      cell.style.backgroundColor = color;
      cell.addEventListener('click', evaluateAnswer);
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
  
  const odd_cell = board.children[odd_row].children[odd_col];
  console.log(odd_cell);
  odd_cell.style.backgroundColor = "rgb(" + (red-12) + "," + (green-12) + "," + (blue-12) + ")";
  odd_cell.dataset.oddCell = true;
  
}

createBoard(rows,cols);