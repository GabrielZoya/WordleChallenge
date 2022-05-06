import { useState, useEffect } from "react";

import styles from "../styles/Box.module.scss";

interface IBoxProps {
    letter: string;
    answer: Array<string>;
    index: number;

}

const Box = ({ letter, answer, index, }: IBoxProps) => {

    const [correctPlacement, setCorrectPlacement] = useState(false);
    const [correctLetter, setCorrectLetter] = useState(false);

    useEffect(() => {
        answer.forEach((item, i) => {
            if (item === letter) {
                setCorrectLetter(true);
                if (i === index) {
                    setCorrectPlacement(true);
                }
            }
        });
    }, []);

    return (
        <div
            className={`${styles.boxContainer} ${correctLetter && styles.yellow} ${correctPlacement && styles.correct
                }`}
        >
            {letter}
        </div>
    );
};

export default Box;
