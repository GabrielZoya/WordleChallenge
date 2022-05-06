import React from 'react'
import styles from "../styles/Modal.module.scss"

interface IModalProps {
    modalMsg: string,
    showModal: boolean
}

const Modal = ({ modalMsg, showModal }: IModalProps) => {
    return (
        <div className={`${styles.modalContainer} ${showModal && styles.open}`}>
            <div className={styles.modalBackground}>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        {modalMsg}
                        <button className={styles.playButton} onClick={() => window.location.reload()}>Jugar de nuevo</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal