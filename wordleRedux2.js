import React from "react";

const answer = "moody";
const guesses = ["might", "flood", "stray"];

function getResultRow(guess, answer) {
  const result = [];
  const answerArr = answer.split("");
  const guessArr = guess.split("");
  const letterCount = {};

  answerArr.forEach(letter => {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });

  const flags = guessArr.map((letter, i) => {
    if (letter === answerArr[i]) {
      letterCount[letter]--;
      return "correct";
    }
    return null;
  });

  guessArr.forEach((letter, i) => {
    let className = "wrong";  //if the letter is not in the answer
});
    if (flags[i] === "correct") {  //if the letter is in the same place as in the guess word
      className = "correct";
    } else if (answerArr.includes(letter) && letterCount[letter] > 0) {
      className = "misplaced"; //if the letter is in the answer but in a different place than in your guess word
      letterCount[letter]--;
    }
    result.push(
      <span className={className} key={i}>
        {letter.toUpperCase()}
      </span>
    );
  });

  return <div className="guess-row">{result}</div>;
}

function WordleBoard() {
  const board = guesses.map((guess, idx) => getResultRow(guess, answer));

  // board length of 6
  while (board.length < 6) {
    board.push(
      <div className="guess-row" key={`empty-${board.length}`}>
        {[...Array(5)].map((_, i) => (
          <span key={i}> </span>
        ))}
      </div>
    );
  }

  return <div className="wordle-board">{board}</div>;
}

// keyboard function
function Keyboard() {
  const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  return (
    <div className="keyboard">
      {keys.map((letter, i) => (
        <div className="key" key={i}>
          {letter}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="game-container">
      <h1>Wordle Game</h1>
      <WordleBoard />
      <h2>Keyboard</h2>
      <Keyboard />
    </div>
  );
}
