
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;
const UP = 4;

const squareArray = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
/*const squareArray = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o'],
    ['p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y']
];*/
const newArray = [];


function unroll(squareArray) {
    let firstCol = firstRow = col = row = 0;
    let lastCol = squareArray[0].length - 1;
    let lastRow = squareArray.length - 1;
    let moreNums = true;
    let direction = RIGHT;

    while (moreNums)
    {
        switch (direction)
        {
            case RIGHT:
                for (col = firstCol, row = firstRow; col <= lastCol; col++)
                {
                    newArray.push(squareArray[row][col]);
                }
                direction = DOWN;
                firstRow ++;
                break;
            case DOWN:
                for (row = firstRow, col = lastCol; row <= lastRow; row++)
                {
                    newArray.push(squareArray[row][col]); 
                }
                direction = LEFT;
                lastCol --;
                break;
            case LEFT:
                for (col = lastCol, row = lastRow; col >= firstCol; col --)
                {
                    newArray.push(squareArray[row][col]);
                }
                direction = UP;
                lastRow --;
                break;
            case UP:
                for (col = firstCol, row = lastRow; row >= firstRow; row --)
                {
                    newArray.push(squareArray[row][col]);
                }
                direction = RIGHT;
                firstCol++;
                break;
        }
       
        if (firstCol > lastCol || firstRow > lastRow)
        {
            moreNums = false;
        }
    }



}

module.exports = unroll;
