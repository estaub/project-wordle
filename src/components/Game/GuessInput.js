import React from 'react'

export function GuessInput({onGuess}) {
    const [guess, setGuess] = React.useState('')

    return (
        <form className="guess-input-wrapper"
              action={fd=>{
                  onGuess(guess)
                  console.log({guess})
                    setGuess('')
              }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input  id="guess-input" name="guess-input" type="text"
                    minLength={5} maxLength={5}
                    pattern="[A-Z]{5}" title='5 letters'
                    value={guess}
                    onChange={(ev)=>
                        setGuess(ev.target.value.toUpperCase())}
            />
        </form>)
}