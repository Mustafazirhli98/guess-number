import guessNumber from "../enums/guessNumber";

export const upperLimit = 100;

//#region functions
export const compare = (guess, setGuess, input, setNote, count, setResult, setGameWon, setCount) => {

    const randomNumber = guess !== null ? guess : Math.floor((Math.random() * upperLimit) + 1)
    setGuess(randomNumber)
    if (parseInt(input) === randomNumber) {
        setNote(guessNumber.YouWon);
        setResult(count + " times you tried!");
        setGameWon(true)
        setCount(count + 1);
    } else if (parseInt(input) > randomNumber) {
        setCount(count + 1);
        setNote("")
        setTimeout(() => setNote(guessNumber.Lower), 100)
    }
    else if (parseInt(input) < randomNumber) {
        setCount(count + 1);
        setNote("")
        setTimeout(() => setNote(guessNumber.Higher), 100)
    }
    //Yukarıda setTimeOut methodunun kullanılmasının sebebi her tahminden sonra ekrana gelen geri bildirimin daha dinamik güncellenmesi için.
};

export const isButtonDisabled = (input, note) =>
    !(parseInt(input)) || note === guessNumber.YouWon;


export const handleRestart = (setNote, setInput, setResult, setCount, setGameWon, setGuess) => {
    setNote("Enter a number and click to guess!");
    setResult("");
    setInput('');
    setCount(1);
    setGameWon(false);
    setGuess(null);

}
//#endregion