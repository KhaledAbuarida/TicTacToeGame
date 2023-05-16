let currentTurn = 'X'
let turnBoard = document.getElementById('instruction')
let boardArray = [
    '0','1','2',
    '3','4','5',
    '6','7','8'
]

function updateState(id, element)
{
    boardArray[id] = element.innerHTML
}

function newGame()
{
    for(let i=0 ; i < 9 ; i++)
    {
        let square = document.getElementById(i);
        square.innerHTML = '';
    }   
}
newGame();

function game(id)
{
    let square = document.getElementById(`${id}`)
    if(currentTurn === 'X' && square.innerHTML == '' )
    {
        square.innerHTML = currentTurn;
        updateState(id,square)
        changeTurn();        
        turnBoard.innerHTML = `${currentTurn} turn`;
    }
    else if (currentTurn === 'O' && square.innerHTML == '')
    {
        square.innerHTML = currentTurn;
        updateState(id,square)
        changeTurn();
        turnBoard.innerHTML = `${currentTurn} turn`;
    }
    checkWinner();


}

function changeTurn()
{
    if(currentTurn === 'X')
        currentTurn = 'O'
    else
        currentTurn = 'X'
}
function checkWinner()
{
    if(boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2])
    {
        turnBoard.innerHTML = `${boardArray[0]} is won`;
        document.getElementById(0).style.background = '#d2bb80'
        document.getElementById(1).style.background = '#d2bb80'
        document.getElementById(2).style.background = '#d2bb80'

        setInterval(() => {
            turnBoard.innerHTML += '.'
        }, 2000);

        setTimeout(() => {
            location.reload()
        }, 4000);
    }
    else if(boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5])
    {
        turnBoard.innerHTML = `${boardArray[3]} is won`;
        document.getElementById(3).style.background = '#d2bb80'
        document.getElementById(4).style.background = '#d2bb80'
        document.getElementById(5).style.background = '#d2bb80'

        setInterval(() => {
            turnBoard.innerHTML += '.'
        }, 2000);

        setTimeout(() => {
            location.reload()
        }, 4000);
    } 
    else if(boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8])
    {
        turnBoard.innerHTML = `${boardArray[6]} is won`;
        document.getElementById(6).style.background = '#d2bb80'
        document.getElementById(7).style.background = '#d2bb80'
        document.getElementById(8).style.background = '#d2bb80'

        setInterval(() => {
            turnBoard.innerHTML += '.'
        }, 2000);

        setTimeout(() => {
            location.reload()
        }, 4000);
    }
    else if(boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6])
    {
        turnBoard.innerHTML = `${boardArray[0]} is won`;
        document.getElementById(0).style.background = '#d2bb80'
        document.getElementById(3).style.background = '#d2bb80'
        document.getElementById(6).style.background = '#d2bb80'

        setInterval(() => {
            turnBoard.innerHTML += '..'
        }, 1000);

        setTimeout(() => {
            location.reload()
        }, 4000);
    }
    else if(boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7])
    {
        turnBoard.innerHTML = `${boardArray[1]} is won`;
        document.getElementById(1).style.background = '#d2bb80'
        document.getElementById(4).style.background = '#d2bb80'
        document.getElementById(7).style.background = '#d2bb80'

        setInterval(() => {
            turnBoard.innerHTML += '.'
        }, 2000);

        setTimeout(() => {
            location.reload()
        }, 4000);
    }
    else if(boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8])
    {
        turnBoard.innerHTML = `${boardArray[2]} is won`;
        document.getElementById(0).style.background = '#d2bb80'
        document.getElementById(5).style.background = '#d2bb80'
        document.getElementById(8).style.background = '#d2bb80'

        setInterval(() => {
            turnBoard.innerHTML += '.'
        }, 2000);

        setTimeout(() => {
            location.reload()
        }, 4000);
    }
    else if(boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8])
    {
        turnBoard.innerHTML = `${boardArray[0]} is won`;
        document.getElementById(0).style.background = '#d2bb80'
        document.getElementById(4).style.background = '#d2bb80'
        document.getElementById(8).style.background = '#d2bb80'

        setInterval(() => {
            turnBoard.innerHTML += '.'
        }, 2000);

        setTimeout(() => {
            location.reload()
        }, 4000);
    }
    else if(boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6])
    {
        turnBoard.innerHTML = `${boardArray[2]} is won`;
        document.getElementById(2).style.background = '#d2bb80'
        document.getElementById(4).style.background = '#d2bb80'
        document.getElementById(6).style.background = '#d2bb80'

        setInterval(() => {
            turnBoard.innerHTML += '.'
        }, 2000);

        setTimeout(() => {
            location.reload()
        }, 4000);
    }


}

