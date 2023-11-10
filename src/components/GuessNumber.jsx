import React, { useState } from 'react'
import { VscDebugRestart } from 'react-icons/vsc';
import { compare, handleRestart, isButtonDisabled, upperLimit } from '../methods/methods';

export const GuessNumber = () => {

    //#region states
    const [guess, setGuess] = useState(null);
    const [input, setInput] = useState('');
    const [note, setNote] = useState("Enter a number and click to guess!");
    const [count, setCount] = useState(1);
    const [result, setResult] = useState("");
    const [gameWon, setGameWon] = useState(false);
    //#endregion

    return (

        <div className="container">
            <h2>I am thinking of a number between 1-{upperLimit}.</h2>
            <h2>Can you guess it?</h2>
            <input
                type="text"
                value={input}
                className="numberBox"
                style={{ display: "block" }}
                onChange={(e) => { setInput(e.target.value) }} />
            <button
                disabled={isButtonDisabled(input, note)}
                type="button"
                className="button"
                onClick={() => {
                    setCount(count + 1);
                    compare(guess, setGuess, input, setNote, count, setResult, setGameWon);
                }}>
                Guess
            </button>

            {gameWon && (
                <div>
                    <button onClick={() => {
                        handleRestart(setNote, setInput, setResult, setCount, setGameWon);
                        setGuess(null);
                    }}
                        type='button'
                        className='btn btn-danger'><VscDebugRestart fontSize={"25px"} />
                    </button>
                </div>)}
            <div className='note'>{note}</div>
            <div className='count'>
                <span id="result">{result}</span>
            </div>
        </div>
    )
}

