import React, { useState } from 'react';
import Square from './Square';
import '../App.css';
import india from './india.png'

const Board = () => {
    let [state, setState] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const checkWinner = () => {
        const winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let line of winnerLines) {
            const [a, b, c] = line;
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        const newState = [...state];
        if (newState[index] || checkWinner()) {
            return;
        }
        newState[index] = xIsNext ? "X" : "O";
        setState(newState);
        setXIsNext(!xIsNext);
    }

    const winner = checkWinner();

    const Reset = () => {
        setState(Array(9).fill(null));
        setXIsNext(true);
    }

    return (
        <div className='container'>
            {winner ? (
                <div className='Result'>
                <div className='result-text'>{winner}-Team Won The game</div>
                <button onClick={Reset} className='btn-reset'>Reset Game</button>
                </div>
            ) : (
                <>
                    <div className='board-row'>
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className='board-row'>
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className='board-row'>
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                    <button onClick={Reset} className='btn-reset'>Reset Game</button>
                </>
            )}
        </div>
    );
}

export default Board;
