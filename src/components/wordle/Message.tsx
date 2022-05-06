import styles from "../styles/Message.module.scss"

interface IMessageProps {
    mensaje: string,
    messageType: boolean,
    input: string
}

const Message = ({ mensaje, messageType, input }: IMessageProps) => {
    return (
        <div className={`${messageType ? styles.success : styles.error}`}>
            {mensaje}
        </div>


    )
}

export default Message