import React, { useState } from 'react'
import styles from "../styles/Line.module.scss"
import Box from './Box'

interface ILineProps {
    word: string,
    answer: Array<string>
}

const Line = ({ word, answer }: ILineProps) => {
    const [guess, setGuess] = useState("");

    return (
        <div>
            <div>
                <div className={styles.word}>{word.split("").map((letter, i) => (
                    <Box index={i} answer={answer} letter={letter} />
                ))}
                </div>
                <div className={styles.output} />
            </div>
        </div>
    )
}

export default Line