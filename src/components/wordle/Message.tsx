import React from 'react'

interface IMessageProps {
    mensaje: string
}

const Message = ({ mensaje }: IMessageProps) => {
    return (
        <div>{mensaje}</div>
    )
}

export default Message