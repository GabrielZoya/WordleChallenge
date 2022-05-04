import React from 'react'
import Line from './Line'
import styles from "../styles/Wordle.module.scss"
import Message from './Message'


interface IWordleProps {
    lines: Array<string>
    answer: Array<string>
}

const Wordle = ({ lines, answer }: IWordleProps) => {


    return (
        <>
            <><Message mensaje="hola" /></>
            <div className={styles.wordleContainer}>
                {lines.map((line) => (
                    <Line answer={answer} word={line} />
                ))}
            </div>

        </>

    )
}

export default Wordle