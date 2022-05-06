import { Dispatch, FormEvent, SetStateAction } from 'react';

import Key from './Key'

import styles from "../styles/Keyboard.module.scss"


interface IKeyboardProps {
    input: string,
    setInput: Dispatch<SetStateAction<string>>,
    handleSubmit: (e: FormEvent | null) => void
}

const keys1 = ["Á", "É", "Í", "Ó", "Ú"];
const keys2 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys3 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keys4 = ["Z", "X", "C", "V", "B", "N", "M"];


const Keyboard = ({ input, setInput, handleSubmit }: IKeyboardProps) => {
    return (
        <div className={styles.keyboardContainer}>
            <div className={`${styles.keyLine} ${styles.lineOne}`}>
                {keys1.map((key) => {
                    return <Key key={key} input={input} setInput={setInput} width="85" height='35' character={key} />
                })}</div>
            <div className={`${styles.keyLine} ${styles.lineTwo}`}>
                {keys2.map((key) => {
                    return <Key key={key} input={input} setInput={setInput} width="40" height='45' character={key} />
                })}
            </div>
            <div className={`${styles.keyLine} ${styles.lineThree}`}>
                {keys3.map((key) => {
                    return <Key key={key} input={input} setInput={setInput} width="40" height='45' character={key} />
                })}
            </div>
            <div className={`${styles.keyLine} ${styles.lineFour}`}>
                <Key handleSubmit={handleSubmit} input={input} setInput={setInput} width="80" height='45' character='ENVIAR' />
                {keys4.map((key) => {
                    return <Key key={key} input={input} setInput={setInput} width="40" height='45' character={key} />
                })}
                <Key input={input} setInput={setInput} width="80" height='45' character="DELETE" />
            </div>
        </div>
    )
}

export default Keyboard