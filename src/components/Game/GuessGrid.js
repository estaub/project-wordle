export function GuessGrid({guesses, answer}) {
    function getGridLetter(row,col) {
        return (row < guesses.length)
            ? guesses[row][col]
            : ' '
    }
    function getLetterClass(row,col) {
        const letter = getGridLetter(row, col)
        if (letter===' ') return ''
        if (!answer.includes(letter)) return 'incorrect'
        return ( letter === answer[col] ) ? 'correct' : 'misplaced'
    }
    return (
        <div className="guess-results">
            {[0,1,2,3,4,5].map(row=> (
                <p key={row} className="guess">
                    {[0,1,2,3,4].map(col => {
                        const letter = getGridLetter(row, col)
                        const letterClass = getLetterClass(row, col)
                        return <span key={col} className={`cell ${letterClass}`}>{letter}</span>
                    })}
                </p>
            ))}
        </div>
    )
}