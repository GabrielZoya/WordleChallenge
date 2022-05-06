import { useState } from 'react'

import Line from './Line'

import styles from "../styles/Wordle.module.scss"


interface IWordleProps {
    lines: Array<string>
    answer: Array<string>
}

const Wordle = ({ lines, answer }: IWordleProps) => {

    const [mensajeCheck, setMensajeCheck] = useState("");

    return (
        <div className={styles.wordleContainer}>
            {lines.map((line) => (
                <Line key={line} answer={answer} word={line} />
            ))}
        </div>
    )
}

export default Wordle