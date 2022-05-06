import { FormEvent } from "react"
import styles from "../styles/Key.module.scss"

interface IKeyProps {
    character: string,
    width: string,
    height: string,
    input: string,
    setInput: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit?: (e: FormEvent | null) => void
}

const Key = ({ character, width, height, input, setInput, handleSubmit }: IKeyProps) => {

    const selectLetter = () => {
        if (character === "ENVIAR") {
            handleSubmit?.(null)
            return
        }
        if (character === "DELETE") {
            setInput(input.slice(0, -1))
            return
        }
        setInput(input.concat(character))
    }

    return (
        <div className={styles.keyContainer} style={{ width: `${width}px`, height: `${height}px` }} onClick={selectLetter}>{character}</div>
    )
}

export default Key