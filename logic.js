
let title = document.getElementById('instruction')
let resetBtn = document.getElementsByClassName('.btn')
let myBoard = ['','','','','','','','','']
let helperWinningMatrix = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


let winner = ''
let turn = 'X'
let isRunning = true
function game(id)
{
    if(isRunning)
    {
        if(myBoard[id] == '')
        {
            myBoard[id] = turn
            print(id)
            nextPlayer()
            titleBoard()
        }
        checkWinner()
        titleBoard()
    }

}

function print(id)
{
    let square = document.getElementById(id);
    square.textContent = myBoard[id];
}
function nextPlayer()
{
    if(turn == 'X')
        turn = 'O'
    else
        turn = 'X'
}
function titleBoard()
{
    if(winner != '')
    {
        nextPlayer()
        title.textContent = `${turn}'s Won` 
        isRunning = false
        setInterval(() => {
            title.textContent += '.'
        }, 1000);
        setTimeout(() => {
            location.reload()
        }, 4000);
        return
    }
    title.textContent = turn + ' turn';
}

function checkWinner()
{
    helperWinningMatrix.forEach(element => {
        let boxA = element[0]
        let boxB = element[1]
        let boxC = element[2]
        if(myBoard[boxA] == myBoard[boxB] && myBoard[boxB] == myBoard[boxC] && myBoard[boxA] != '')
        {
            winner = myBoard[boxA];
            let FrontA = document.getElementById(boxA).style.background = "#d2bb80"
            let FrontB = document.getElementById(boxB).style.background = "#d2bb80"
            let FrontC = document.getElementById(boxC).style.background = "#d2bb80"
            if(myBoard[boxA] == 'X')
                winner = 'X'
            else
                winner = 'O'
            return
        }
    });
    if(!myBoard.includes(''))
        winner = 'tie'
}

function reset()
{
    location.reload()
}