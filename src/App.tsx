import { FormEvent, useEffect, useState } from "react";

import Wordle from "./components/wordle";
import Message from "./components/wordle/Message";
import Modal from "./components/wordle/Modal";
import Keyboard from "./components/wordle/Keyboard";

import styles from "./components/styles/Home.module.scss"

const message = {
  match: "La cantidad de letras es la correcta",
  more: "La palabra ingresada es mayor a la palabra oculta",
  less: "La palabra ingresada es menor a la palabra oculta"
}

const finishMsg = {
  win: "Adivinaste la palabra!",
  lose: "Lo siento, no has adivinado la palabra"
}

function App() {

  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  const [answer, setAnswer] = useState([]);
  const [lifes, setLifes] = useState(0);
  const [messageCheck, setMessageCheck] = useState("")
  const [messageType, setMessageType] = useState(false)
  const [finishText, setFinishText] = useState("")
  const [showModal, setShowModal] = useState(false)



  const getWord = async () => {
    const response = await fetch("https://clientes.api.greenborn.com.ar/public-random-word");
    const result = await response.json()
    const newLifes = await result[0].length + 1
    setLifes(newLifes);
    setAnswer(await result[0].toUpperCase().split(""))
  }

  const handleSubmit = (e: FormEvent | null) => {
    if (e) {
      e.preventDefault();
    }
    setLines(lines.concat(input))
    setInput("")
    if (input === answer.join("")) {
      setShowModal(true)
      setFinishText(finishMsg.win)
    }
    setLifes(lifes - 1)
    if (input.length === answer.length) {
      setMessageCheck(message.match)
      setMessageType(true)
      return
    }
    if (lifes === 1)
      setShowModal(true)
    setFinishText(finishMsg.lose)
    if (input.length > answer.length) {
      setMessageCheck(message.less)
      return
    }
    setMessageCheck(message.more)
  }

  useEffect(() => {
    getWord()
  }, [])

  return (
    <div >
      <Modal showModal={showModal} modalMsg={finishText} />
      <div className={styles.wordleContainer} >
        <div className={styles.tittle}>TIENDA DOLAR CHALLENGE</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <span>
              <input className={styles.slideUp} value={input} type="text" placeholder="Ingresa una palabra" onChange={(e) => setInput(e.target.value.toUpperCase())} /><label>Adivina</label>
            </span>
          </div>
          <input type="submit" hidden />
        </form>
        {lines.length !== 0 &&
          <div className={`${styles.messageContainer} ${messageType ? styles.succes : styles.error}`}>
            <Message input={input} messageType={messageType} mensaje={messageCheck} />
          </div>}
        <Wordle lines={lines} answer={answer} />
        <Keyboard input={input} setInput={setInput} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
