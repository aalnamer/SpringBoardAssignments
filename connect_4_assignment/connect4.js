/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const width = 7;
const height = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  for (let y = 0; y < height; y++) {
    board.push(Array.from({ length: width }));
  }
}
// TODO: set "board" to empty height x width matrix array

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  let board = document.getElementById("board");
  // TODO: get "htmlBoard" letiable from the item in HTML w/ID of "board"

  // Answer
  // I replaced the var with let, and added a get elementById with "board" to grab this element from the HTML code.

  // TODO: add comment for this code

  //Answer

  // the top variable is used for the top row where the circles would come down from. When a top element is clicked, a circle should fill in the square below.

  // defines the variable that creates the top row
  let top = document.createElement("tr");
  // sets the top columns unique id
  top.setAttribute("id", "column-top");
  // adds and event listener that is triggered off a click of the top row and runs the function handleClick
  top.addEventListener("click", handleClick);

  // itterates over the width of the array
  for (let x = 0; x < width; x++) {
    // defines the variable for the td
    let headCell = document.createElement("td");
    // sets the unique id for x
    headCell.setAttribute("id", x);
    // appends that to the top variable for each element
    top.append(headCell);
  }
  // appends top to the board, creating the game board
  board.append(top);

  // TODO: add comment for this code

  // Answer

  //

  // This code will determine where a circle will be filled in on the board. I also removed the HTML portion of "htmlBoard", so it is just "board", as that is the constants name. This allowed the code to actually run as "htmlBoard" was returning an error.

  // itterates n number of times where n = height
  for (let y = 0; y < height; y++) {
    // creates a row
    const row = document.createElement("tr");
    //itterates n number of times where n = width
    for (let x = 0; x < width; x++) {
      // creates a cell
      const cell = document.createElement("td");
      // adds a unique id to each cell, which indicates its x,y position in the grid.
      cell.setAttribute("id", `${y}-${x}`);
      // appends the cell to the row
      row.append(cell);
    }
    // appends the row to the board
    board.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

// creates a function for where the color should go
function findSpotForCol(x) {
  // as the board fills up, this for loop will check the column to see where to put the color
  for (let y = height - 1; y >= 0; y--) {
    // if there is no board with those parameters, it is a valid spot
    if (!board[y][x]) {
      // y would equal a valid spot,
      return y;
    }
  }
  // if that column is full, nothing should happen so null is returned
  return null;
}

// TODO: write the real version of this, rather than always returning 0

/** placeInTable: update DOM to place piece into HTML table of board */

// this function will place the actual color
function placeInTable(y, x) {
  // creates a div for the game piece that can be styelized in css
  const piece = document.createElement("div");
  // section class is added to keep track of that column
  piece.classList.add("piece");
  // this determines whose piece this belongs depending on which player is going at this time.
  piece.classList.add(`p${currPlayer}`);
  piece.style.top = -50 * (y + 2);

  const spot = document.getElementById(`${y}-${x}`);
  spot.append(piece);
  // TODO: make a div and insert into correct table cell
}

/** endGame: announce game end */

function endGame(msg) {
  alert(msg);
  // TODO: pop up alert message
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)

  // this function will return null if the column is full
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board

  // board is used here to set the color of the player going
  board[y][x] = currPlayer;
  // placeInTable is set here to place the actual color.
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }
  // checks for tie
  if (board.every((row) => row.every((cell) => cell))) {
    return endGame("Tie!");
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame

  // switch players

  // if currenty player is equato 1, player 1 goes if it is equal to 2, player 2 goes.

  currPlayer = currPlayer === 1 ? 2 : 1;
  // TODO: switch currPlayer 1 <-> 2
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < height &&
        x >= 0 &&
        x < width &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  // iterates over the height and width arrays to see if they are all equal to the same player.

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let horiz = [
        [y, x],
        [y, x + 1],
        [y, x + 2],
        [y, x + 3],
      ];
      let vert = [
        [y, x],
        [y + 1, x],
        [y + 2, x],
        [y + 3, x],
      ];
      let diagDR = [
        [y, x],
        [y + 1, x + 1],
        [y + 2, x + 2],
        [y + 3, x + 3],
      ];
      let diagDL = [
        [y, x],
        [y + 1, x - 1],
        [y + 2, x - 2],
        [y + 3, x - 3],
      ];
      //
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
