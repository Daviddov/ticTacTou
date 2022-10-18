import Cell from "./Cell";
import React from 'react';
import { useState } from "react";
function Board() {

const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
const [curuntPlayer, setCuruntPlayer ] = useState( 'X')
const [stepCounter, setStepCounter ] = useState( 0)
const [winText, setWinText ] = useState( '')
const [activeGame, setActiveGame ] = useState( true)
 

    function fill(i) {
        if (activeGame) {
            
            let myBoard = board
            if (board[i] == ''){
                myBoard[i] = curuntPlayer
                setBoard(myBoard)
                
                
                checkWin()
                curuntPlayer == 'X' ? setCuruntPlayer('O')  : setCuruntPlayer('X')
                setStepCounter(stepCounter +1)
                console.log(board);
                if (!board.includes('')) {
                    setActiveGame(false)
                }
                
            }
        }
    }

    function checkWin() {
        if (
            board[0] == board[1] && board[0] == board[2] && board[0] == curuntPlayer||
            board[3] == board[4] && board[3] == board[5] && board[4] == curuntPlayer||
            board[6] == board[7] && board[6] == board[8] && board[6] == curuntPlayer||

            board[0] == board[4] && board[0] == board[8] && board[4] == curuntPlayer||
            board[2] == board[4] && board[2] == board[6] && board[6] == curuntPlayer||
            
            board[0] == board[3] && board[0] == board[6] && board[6] == curuntPlayer||
            board[1] == board[4] && board[1] == board[7] && board[4] == curuntPlayer||
            board[2] == board[5] && board[2] == board[8] && board[2] == curuntPlayer
            ) {
                setWinText( curuntPlayer + ' win')
                setActiveGame(false)
                console.log('win');
        }
    }

function reset(){
    setActiveGame(true)
    setBoard(['', '', '', '', '', '', '', '', ''])
    
}
   
    return (
        <React.Fragment>
{board.map((data, i)=> <Cell key={i} onClick={()=> fill(i)} id={i} value={data}/>)}
<hr />
<button onClick={reset}>Reset</button>
           <h1>{ curuntPlayer }</h1>
      <h1>{winText}</h1>


        </React.Fragment>
    )

}

export default Board;