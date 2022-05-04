import { useEffect, useState } from "react";
import Wordle from "./components/wordle";
import styles from "./components/styles/Home.module.scss"
import Message from "./components/wordle/Message";

const message = {
  match: "La cantidad de letras es la correcta",
  more: "La cantidad de letras de la palabra ingresada es mayor a la palabra oculta",
  less: "La cantidad de letras de la palabra ingresada es menor a la palabra oculta"
}

function App() {

  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  const [answer, setAnswer] = useState([]);
  const [lifes, setLifes] = useState(0);
  const [messageCheck, setMessageCheck] = useState("")
  const [messageType, setMessageType] = useState(false)


  const getWord = async () => {
    const response = await fetch("https://palabras-aleatorias-public-api.herokuapp.com/random");
    const result = await response.json()
    const newLifes = await result.body.Word.length + 1
    setLifes(newLifes);
    console.log(newLifes);
    setAnswer(await result.body.Word.toUpperCase().split(""))
  }


  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLines(lines.concat(input))
    setInput("")
    if (input == answer.join("")) {
      alert("ganaste")
    }
    setLifes(lifes - 1)
    if (input.length === answer.length) {
      setMessageCheck(message.match)
      setMessageType(true)
      return
    }
    if (lifes === 1)
      alert("perdiste")

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
      <div className={styles.wordleContainer} >
        <div className={styles.tittle}>Tienda Dolar Challenge</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <span>
              <input className={styles.slideUp} value={input} type="text" placeholder="Ingresa una palabra" onChange={(e) => setInput(e.target.value.toUpperCase())} /><label>Guess</label>
            </span>
          </div>
          <input type="submit" hidden />
        </form>
        <div className={`${styles.messageContainer} ${messageType ? styles.succes : styles.error}`}>
          <Message input={input} messageType={messageType} mensaje={messageCheck} />
        </div>
        <Wordle lines={lines} answer={answer} />
      </div>
    </div>
  );
}

export default App;
