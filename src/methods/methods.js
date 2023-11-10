import guessNumber from "../enums/guessNumber";

export const upperLimit = 100;

//#region functions
export const compare = (guess, setGuess, input, setNote, count, setResult, setGameWon) => {

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

export const isButtonDisabled = (input, note) =>
    !(parseInt(input)) || note === guessNumber.YouWon;


export const handleRestart = (setNote, setInput, setResult, setCount, setGameWon) => {
    setNote("Enter a number and click to guess!");
    setResult("");
    setInput('');
    setCount(1);
    setGameWon(false);

}
//#endregion