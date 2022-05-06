import React, { useState } from 'react'
import styles from "../styles/Line.module.scss"
import Box from './Box'

interface ILineProps {
    word: string,
    answer: Array<string>
}

const Line = ({ word, answer }: ILineProps) => {

    return (
        <div>
            <div>
                <div className={styles.word}>{word.split("").map((letter, i) => (
                    <Box key={letter + i} index={i} answer={answer} letter={letter} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Line