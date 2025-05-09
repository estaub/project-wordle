import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {GuessInput} from "./GuessInput";
import {GuessGrid} from "./GuessGrid";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function GuessList({guesses}) {
  return (
      <div className="guess-results">
        { guesses.map((guess,index)=>
            <p className="guess" key={index}>{guess}</p>
        )}
      </div>
  )
}

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const [gameState, setGameState] = React.useState('play')

  function onGuess(guess) {
    const nextGuesses= [...guesses, guess]
    setGuesses(nextGuesses)
    if (answer === guess) setGameState('win')
    else if (nextGuesses.length===6) setGameState('lose')
  }
  return <>
    <GuessGrid guesses={guesses} answer={answer}/>
    {(gameState==='play')&&(<GuessInput onGuess={onGuess}/>)}
    {(gameState==='lose')&&(
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )}
    {(gameState==='win')&&(
      <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
          </p>
      </div>
    )}

  </>;
}

export default Game;
