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
        setNote("")
        setTimeout(() => setNote(guessNumber.Lower), 100)
    }
    else if (parseInt(input) < randomNumber) {
        setNote("")
        setTimeout(() => setNote(guessNumber.Higher), 100)
    }
    //Yukarıda setTimeOut methodunun kullanılmasının sebebi her tekrardan sonra ekrana gelen geri bildirimin daha dinamik güncellenmesi için.
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