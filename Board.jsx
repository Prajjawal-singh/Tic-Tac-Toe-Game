import React,{useState} from "react";

import Square from "./Square";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [isXturn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerlogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        
        for(let logic of winnerlogic){
            const [a,b,c] = logic;
            if(state[a]===state[b] && state[a] === state[c] && state[a]!== null){
                return state[a];
            }
        }

        return false;
    };

    const isWinner = checkWinner();


    const handleclick = (index) => {
        if(state[index] !== null){
            return;
        }
        const copystate = [...state];
        copystate[index] = isXturn ? "X" : "O";
        setState(copystate);
        setIsXTurn(!isXturn);
    };

    const handleReset = () => {
        setState(Array(9).fill(null));
    };

    return (
        <div className="board-container">
            {isWinner ? (
                <>{isWinner} won the game <button onClick={handleReset}> Play Again</button>
                </>
            ):(
            <>
            <h4>Player {isXturn ? "X" : "O" } please move</h4>
            <div className="board-row">
                <Square onClick={() => handleclick(0)} value={state[0]} />
                <Square onClick={() => handleclick(1)} value={state[1]} />
                <Square onClick={() => handleclick(2)} value={state[2]} />
            </div>
            <div className="board-row">
                <Square onClick={() => handleclick(3)} value={state[3]} />
                <Square onClick={() => handleclick(4)} value={state[4]} />
                <Square onClick={() => handleclick(5)} value={state[5]} />
            </div>
            <div className="board-row">
                <Square onClick={() => handleclick(6)} value={state[6]} />
                <Square onClick={() => handleclick(7)} value={state[7]} />
                <Square onClick={() => handleclick(8)} value={state[8]} />
            </div>
            </>
            )}
        </div>
    );
};

export default Board;