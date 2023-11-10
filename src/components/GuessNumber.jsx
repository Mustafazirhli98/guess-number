import React, { useState } from 'react'
import { VscDebugRestart } from 'react-icons/vsc';
import guessNumber from '../enums/guessNumber';

export const GuessNumber = () => {

    //#region states
    const [guess, setGuess] = useState(null);
    const [input, setInput] = useState('');
    const [note, setNote] = useState("Enter a number and click to guess!");
    const [count, setCount] = useState(1);
    const [result, setResult] = useState("");
    const [gameWon, setGameWon] = useState(false);
    //#endregion

    const upperLimit = 100;



    //#region functions
    const compare = () => {

        const randomNumber = guess !== null ? guess : Math.floor((Math.random() * upperLimit) + 1)
        setGuess(randomNumber)
        if (parseInt(input) === randomNumber) {
            setNote(guessNumber.YouWon);
            setResult(count + " times you tried!");
            setGameWon(true)
        } else if (parseInt(input) > randomNumber) {
            setNote(guessNumber.Lower);
        }
        else if (parseInt(input) < randomNumber) {
            setNote(guessNumber.Higher)
        }
    };

    const isButtonDisabled = () =>
        !(parseInt(input)) || note === guessNumber.YouWon;


    const handleRestart = () => {
        setNote("Enter a number and click to guess!");
        setResult("");
        setInput('');
        setCount(1);
        setGameWon(false);

    }
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
                disabled={isButtonDisabled()}
                type="button"
                className="button"
                onClick={() => {
                    setCount(count + 1);
                    compare();
                }}>
                Guess
            </button>

            {gameWon && (
                <div>
                    <button onClick={() => {
                        handleRestart();
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

