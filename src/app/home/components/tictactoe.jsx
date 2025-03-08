import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [player, setPlayer] = useState("X");
  const [score, setScore] = useState({ X: 0, O: 0, Draw: 0 });
  const [gameOver, setGameOver] = useState(false);

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : "Draw";
  };

  const getBotMove = (board) => {
    // Check if bot can win
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        let testBoard = [...board];
        testBoard[i] = "O";
        if (checkWinner(testBoard) === "O") return i;
      }
    }
    
    // Check if bot needs to block player
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        let testBoard = [...board];
        testBoard[i] = "X";
        if (checkWinner(testBoard) === "X") return i;
      }
    }
    
    // Take center if available
    if (board[4] === null) return 4;
    
    // Take a random available move
    let availableMoves = board.map((val, index) => val === null ? index : null).filter(val => val !== null);
    return availableMoves.length > 0 ? availableMoves[Math.floor(Math.random() * availableMoves.length)] : null;
  };

  const handleClick = (index) => {
    if (board[index] || gameOver) return;
    
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    
    const winner = checkWinner(newBoard);
    if (winner) {
      setScore(prev => ({ ...prev, [winner]: prev[winner] + 1 }));
      setGameOver(true);
      return;
    }

    setPlayer("O");
    setTimeout(() => {
      const botMove = getBotMove(newBoard);
      if (botMove !== null) {
        newBoard[botMove] = "O";
        setBoard(newBoard);
        const botWinner = checkWinner(newBoard);
        if (botWinner) {
          setScore(prev => ({ ...prev, [botWinner]: prev[botWinner] + 1 }));
          setGameOver(true);
          return;
        }
      }
      setPlayer("X");
    }, 500);
  };

  useEffect(() => {
    if (gameOver) {
      setTimeout(() => {
        setBoard(emptyBoard);
        setGameOver(false);
        setPlayer("X");
      }, 1000);
    }
  }, [gameOver]);

  return (
    <div className="box-shadow bg-white flex flex-col items-center rounded-lg py-2">
        <div className="flex w-full justify-evenly">
        <p className="font-bold">Player X: {score.X}</p>
        <p className="font-bold">Bot O: {score.O}</p>
        <p className="font-bold">Draws: {score.Draw}</p>
      </div>
      <div className="grid 
            grid-cols-3
            grid-rows-3
            p-2 w-[250px] h-[250px]
        ">
        {board.map((val, index) => (
          <button key={index} onClick={() => handleClick(index)} 
          className=" full h-full text-xl flex justify-center items-center 
            nth-[1]:border-b nth-[1]:border-r 
            nth-[2]:border-b nth-[2]:border-l nth-[2]:border-r
            nth-[3]:border-b nth-[3]:border-l 
            nth-[4]:border-b nth-[4]:border-r nth-[4]:border-t
            nth-[5]:border
            nth-[6]:border-l nth-[6]:border-t nth-[6]:border-b
            nth-[7]:border-t nth-[7]:border-r 
            nth-[8]:border-t nth-[8]:border-l nth-[8]:border-r
            nth-[9]:border-t nth-[9]:border-l 
          border-gray-300">
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
