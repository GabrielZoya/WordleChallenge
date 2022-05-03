import React from 'react'
import styles from "../styles/Line.module.scss"
import Box from './Box'

interface ILineProps {
    multiLine: boolean | null,
    word: string,
    answer: Array<string>
}

const Line = ({ multiLine, word, answer }: ILineProps) => {



    return (
        <div>
            {multiLine === true ? <div /> :
                <div>
                    <div className={styles.word}>{word.split("").map((letter) => (
                        <Box answer={answer} letter={letter} />
                    )

                    )}</div>
                    <div className={`${styles.output} ${multiLine === false && styles.incorrect}`} />
                </div>}
        </div>
    )
}

export default Line