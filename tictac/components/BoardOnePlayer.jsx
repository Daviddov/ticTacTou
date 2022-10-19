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
    let myCounter = stepCounter
let active = activeGame
    function fill(i) {
        console.time('a')
        if (active) {

            if (board[i] == '') {
                myBoard[i] = 'X'
                setBoard(myBoard)

                checkWin()
                // curuntPlayer == 'X' ? setCuruntPlayer('O')  : setCuruntPlayer('X')
                console.log('stepCounter', myCounter);
                myCounter++
                setStepCounter(myCounter)
                console.log('myCounter', myCounter);
                console.log(board);
                if (board.includes('') && activeGame) {
                    cumputerTurn()
                }

            }
        }
        console.timeEnd('a');
    }
    function fillBox(num) {


        myBoard[num] = 'O'
        setBoard(myBoard)
        console.log('myCounter', myCounter);
        myCounter++
        setStepCounter(myCounter)
        console.log('myCounter', myCounter);
    }


    function cumputerTurn() {
        console.time('b')
        // fill the middel
        console.log('condition 1');
        if (myCounter <= 1 && board[4] == '') {
            fillBox(4)
        } else {
            // try to win
            console.log('condition 2');
            let rowWithTowO = AllRews.find(rew => rew.filter(box => myBoard[box] == 'O').length == 2 && rew.filter(box => myBoard[box] == '').length == 1)

            if (rowWithTowO != undefined) {
                console.log('rowWithTowO', rowWithTowO);
                let emptyBox = rowWithTowO.find(box => myBoard[box] == '')
                console.log(emptyBox);
                fillBox(emptyBox)

            } else {
                console.log('condition 3');
                // try to block
                let rowWithTowX = AllRews.find(rew => rew.filter(box => myBoard[box] == 'X').length == 2 && rew.filter(box => myBoard[box] == '').length == 1)
                if (rowWithTowX != undefined) {
                    console.log('rowWithTowX', rowWithTowX);
                    let emptyBox = rowWithTowX.find(box => myBoard[box] == '')
                    console.log(emptyBox);
                    fillBox(emptyBox)

                } else {
                    // RowWithTowOAndX
                    let rowWithTowOAndX = AllRews.filter(rew => rew.filter(box => myBoard[box] == 'O').length == 2 && rew.filter(box => myBoard[box] == 'X').length == 1)
                    console.log('condition 4');
                    if (rowWithTowOAndX.length > 0) {
                        console.log('rowWithTowOAndX', rowWithTowOAndX);
                        let rowWithOutX = AllRews.find(rew => rew.filter(box => myBoard[box] != 'X').length == 3)
                        console.log('rowWithOutX', rowWithOutX);
                        // rowWithOutX
                        console.log('condition 5');
                        if (rowWithOutX) {
                            let emptyBox = rowWithOutX.find(box => myBoard[box] == '')
                            console.log(emptyBox);
                            fillBox(emptyBox)
                        }

                    } else if (
                        // step 3
                        // fill corner between
                        myCounter == 3 && board[4] == 'O' && board[0] != '' && board[8] != '' ||
                        myCounter == 3 && board[4] == 'O' && board[2] != '' && board[6] != '' ||
                        myCounter == 3 && board[4] == 'O' && board[1] != '' && board[7] != '' ||
                        myCounter == 3 && board[4] == 'O' && board[3] != '' && board[5] != ''
                    ) {
                        console.log('condition 6');
                        let emptyBox = corner.find(box => myBoard[box] == '')
                        fillBox(emptyBox)

                    }
                    // fill corner
                    else if (myCounter == 3 && board[4] == 'O' && board[1] != '' && board[5] != '') {
                        console.log('fill corner');
                        console.log('condition 7');
                        fillBox(2)
                    } else if (myCounter == 3 && board[4] == 'O' && board[1] != '' && board[3] != '') {
                        console.log('condition 7');
                        console.log('fill corner');
                        fillBox(0)
                    } else if (myCounter == 3 && board[4] == 'O' && board[5] != '' && board[7] != '') {
                        console.log('condition 7');
                        console.log('fill corner');
                        fillBox(8)
                    } else if (myCounter == 3 && board[4] == 'O' && board[3] != '' && board[7] != '') {
                        console.log('condition 7');
                        console.log('fill corner');
                        fillBox(6)
                    }

                    //fill corner with tow empaty rows
                    else if (AllRews[0].filter(box => myBoard[box] == '').length == 3 &&
                        AllRews[3].filter(box => myBoard[box] == '').length == 3) {
                        console.log('condition 8');
                        fillBox(0)
                    } else if (AllRews[0].filter(box => myBoard[box] == '').length == 3 &&
                        AllRews[5].filter(box => myBoard[box] == '').length == 3) {
                        fillBox(2)
                    } else if (AllRews[2].filter(box => myBoard[box] == '').length == 3 &&
                        AllRews[3].filter(box => myBoard[box] == '').length == 3) {
                        fillBox(6)
                    } else if (AllRews[2].filter(box => myBoard[box] == '').length == 3 &&
                        AllRews[5].filter(box => myBoard[box] == '').length == 3) {
                        fillBox(8)
                    }
                    //  cornerWithTowX !!!!
                    else if (AllRews[0].filter(box => myBoard[box] == 'X').length == 1 &&
                        AllRews[0].filter(box => myBoard[box] == '').length == 2 &&
                        AllRews[3].filter(box => myBoard[box] == 'X').length == 1 &&
                        AllRews[3].filter(box => myBoard[box] == '').length == 2 && board[0] == '') {
                        console.log('condition 9 a');

                        fillBox(0)

                    } else if (AllRews[0].filter(box => myBoard[box] == 'X').length == 1 &&
                        AllRews[0].filter(box => myBoard[box] == '').length == 2 &&
                        AllRews[5].filter(box => myBoard[box] == 'X').length == 1 &&
                        AllRews[5].filter(box => myBoard[box] == '').length == 2 && board[2] == '') {
                        console.log('condition 9 b');
                        fillBox(2)

                    } else if (AllRews[2].filter(box => myBoard[box] == 'X').length == 1 &&
                        AllRews[2].filter(box => myBoard[box] == '').length == 2 &&
                        AllRews[3].filter(box => myBoard[box] == 'X').length == 1 &&
                        AllRews[3].filter(box => myBoard[box] == '').length == 2 && board[6] == '') {
                        console.log('condition 9 c');

                        fillBox(6)

                    } else if (AllRews[2].filter(box => myBoard[box] == 'X').length == 1 &&
                        AllRews[2].filter(box => myBoard[box] == '').length == 2 &&
                        AllRews[5].filter(box => myBoard[box] == 'X').length == 1 &&
                        AllRews[5].filter(box => myBoard[box] == '').length == 2 && board[8] == '') {
                        console.log('condition 9 d');
                        console.log(board[8] == '');

                        fillBox(8)


                    } else {
                        // fill empaty Corner
                        console.log(AllRews[2].filter(box => myBoard[box] == 'X').length == 1,
                            AllRews[2].filter(box => myBoard[box] == '').length == 2,
                            AllRews[5].filter(box => myBoard[box] == 'X').length == 1,
                            AllRews[5].filter(box => myBoard[box] == '').length == 2);
                        let empatyCorner = corner.find(box => myBoard[box] == '')
                        console.log('condition 10');
                        console.log('empatyCorner', empatyCorner);
                        if (empatyCorner != undefined) {
                            fillBox(empatyCorner)
                        } //  //random
                        else {
                            console.log('random');
                            // let randomNum = Math.floor(Math.random() * 9) - 1
                            // if (board[randomNum] == '') {
                            //     fillBox(randomNum)
                            // } else {
                            //     cumputerTurn()
                            // }
                        }
                    }
                   
                }
            }
        }

        checkWin()
        curuntPlayer == 'X' ? setCuruntPlayer('O') : setCuruntPlayer('X')
        console.timeEnd('b')
    }

    function checkWin() {
        let win = AllRews.find(rew => rew.filter(box => myBoard[box] == curuntPlayer).length == 3)
        if (win != undefined) {
            console.log('winnnnn');
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
            <div style={{ width: '30%' }}>

                {board.map((data, i) => <Cell key={i} onClick={() => fill(i)} id={i} value={data} />)}
            </div>
            <hr />
            <button onClick={reset}>Reset</button>
            <h1>{stepCounter }</h1>
            <h1>{winText}</h1>
           


        </React.Fragment>
    )

}

export default BoardOnePlayer;