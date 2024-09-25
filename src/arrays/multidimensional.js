let matrix = [];
let numRows = 3;
let numCols = 3;

// Initialization
for (let row = 0; row < numRows; row++) {
  matrix[row] = [];
  for (let col = 0; col < numCols; col++) {
    matrix[row][col] = row + col;
  }
}

// Total Rows
for (let row = 0; row < numRows; row++) {
  let rowSum = 0;
  let printRow = `row-${row} ->`;
  for (let col = 0; col < numCols; col++) {
    rowSum += matrix[row][col];
    printRow += `	${matrix[row][col]}	`;
  }
  console.log((printRow += ` ${rowSum}`));
}

// Total Cols
let totalSum = `Total ->`;
let grandTotal = 0;
for (let col = 0; col < numCols; col++) {
  let colSum = 0;
  for (let row = 0; row < numRows; row++) {
    colSum += matrix[row][col];
  }
  grandTotal += colSum;
  totalSum += `	${colSum}	`;
}
console.log((totalSum += ` ${grandTotal}`));
