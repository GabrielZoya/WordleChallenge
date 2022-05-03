import React from 'react'
import styles from "../styles/Box.module.scss"

interface IBoxProps {
    letter: string,
    status?: {
        correctPlacement: boolean,
        correctLetter: boolean
    },
    answer: Array<string>
}

const Box = ({ letter, status, answer }: IBoxProps) => {


    return (

        <div className={`${styles.boxContainer} ${status?.correctLetter && styles.yellow} ${status?.correctPlacement && styles.correct}`}>
            {letter}
        </div>


    )
}

export default Box