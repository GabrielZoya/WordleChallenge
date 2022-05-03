import React from 'react'
import Line from './Line'
import styles from "../styles/Wordle.module.scss"

interface IWordleProps {
    lines: Array<string>
    answer: Array<string>
}

const Wordle = ({ lines, answer }: IWordleProps) => {
    return (
        <div className={styles.wordleContainer}>
            {lines.map((line) => (
                <Line answer={answer} word={line} multiLine={null} />
            ))}
        </div>
    )
}

export default Wordle