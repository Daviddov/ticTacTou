import Cell from "./Cell";
import React from 'react';
import { useState } from "react";
function BoardOnePlayer() {

    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
    const [curuntPlayer, setCuruntPlayer] = useState('X')
    const [stepCounter, setStepCounter] = useState(0)
    const [winText, setWinText] = useState('')
    const [activeGame, setActiveGame] = useState(true)

    const AllRews = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ]
    let corner = [0, 2, 6, 8]
    let adge = [1, 3, 5, 7]
    let myBoard = board
    function fill(i) {
        if (activeGame) {

            // let myBoard = board
            if (board[i] == '') {
                myBoard[i] = 'X'
                setBoard(myBoard)


                checkWin()
                // curuntPlayer == 'X' ? setCuruntPlayer('O')  : setCuruntPlayer('X')
                setStepCounter(stepCounter + 1)
                console.log(board);
                if (board.includes('')) {
                    cumputerTurn()
                }

            }
        }
    }
    function fillBox(num) {
        // let myBoard = board
        myBoard[num] = 'O'
        setBoard(myBoard)
    }
    function stepTow() {

    }

    function cumputerTurn() {
        if (stepCounter <= 1 && board[4] == '') {
            fillBox(4)
        } else {
            // let myBoard = board
            let rowWithTowO = AllRews.find(rew => rew.filter(box => myBoard[box] == 'O').length == 2 && rew.filter(box => myBoard[box] == '').length == 1)

            console.log('rowWithTowO', rowWithTowO);
            if (rowWithTowO) {
                let emptyBox = rowWithTowO.find(box => myBoard[box] == '')
                console.log(emptyBox);
                fillBox(emptyBox)

            } else {
                // let myBoard = board
                let rowWithTowX = AllRews.find(rew => rew.filter(box => myBoard[box] == 'X').length == 2 && rew.filter(box => myBoard[box] == '').length == 1)

                console.log('rowWithTowX', rowWithTowX);
                if (rowWithTowX) {
                    let emptyBox = rowWithTowX.find(box => myBoard[box] == '')
                    console.log(emptyBox);
                    fillBox(emptyBox)

                } else {
                    let rowWithTowOAndX = AllRews.filter(rew => rew.filter(box => myBoard[box] == 'O').length == 2 && rew.filter(box => myBoard[box] == 'X').length == 1)
                    console.log('rowWithTowOAndX', rowWithTowOAndX);
                    let rowWithOutX = AllRews.find(rew => rew.filter(box => myBoard[box] != 'X').length == 3)
                    console.log('rowWithOutX', rowWithOutX);
                    if (rowWithOutX) {
                        let emptyBox = rowWithOutX.find(box => myBoard[box] == '')
                        console.log(emptyBox);
                        fillBox(emptyBox)
                    } else if (
                        stepCounter == 3 && board[4] == 'O' && board[1] != '' && board[7] != '' ||
                        stepCounter == 3 && board[4] == 'O' && board[3] != '' && board[5] != '' ||
                        stepCounter == 3 && board[4] == 'O' && board[0] != '' && board[8] != '' ||
                        stepCounter == 3 && board[4] == 'O' && board[2] != '' && board[6] != '' 
                    ) {
                        // fill corner
                        let emptyBox = corner.find(box => myBoard[box] == '')
                        fillBox(emptyBox)
                        console.log('fill corner');
                    }
                }

                //  //random
                // else {
                //     let randomNum = Math.floor(Math.random() * 9) - 1
                //     if (board[randomNum] == '') {
                //         fillBox(randomNum)
                //     } else {
                //         cumputerTurn()
                //     }
                // }
            }
        }

        checkWin()
        curuntPlayer == 'X' ? setCuruntPlayer('O') : setCuruntPlayer('X')

    }

    function checkWin() {
        if (
            board[0] == board[1] && board[0] == board[2] && board[0] == curuntPlayer ||
            board[3] == board[4] && board[3] == board[5] && board[4] == curuntPlayer ||
            board[6] == board[7] && board[6] == board[8] && board[6] == curuntPlayer ||

            board[0] == board[4] && board[0] == board[8] && board[4] == curuntPlayer ||
            board[2] == board[4] && board[2] == board[6] && board[6] == curuntPlayer ||

            board[0] == board[3] && board[0] == board[6] && board[6] == curuntPlayer ||
            board[1] == board[4] && board[1] == board[7] && board[4] == curuntPlayer ||
            board[2] == board[5] && board[2] == board[8] && board[2] == curuntPlayer
        ) {
            setWinText(curuntPlayer + ' win')
            setActiveGame(false)
            console.log('win');
        }
    }

    function reset() {
        setActiveGame(true)
        setBoard(['', '', '', '', '', '', '', '', ''])
        setCuruntPlayer('X')
        setStepCounter(0)
        setWinText('')
        setActiveGame(true)
    }

    return (
        <React.Fragment>
            {board.map((data, i) => <Cell key={i} onClick={() => fill(i)} id={i} value={data} />)}
            <hr />
            <button onClick={reset}>Reset</button>
            <h1>{curuntPlayer}</h1>
            <h1>{winText}</h1>


        </React.Fragment>
    )

}

export default BoardOnePlayer;