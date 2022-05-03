import { useEffect, useState } from "react";
import Wordle from "./components/wordle";


function App() {

  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  const [answer, setAnswer] = useState(["L", "U", "C", "A", "S"]);

  const getWord = async () => {
    const response = await fetch("https://palabras-aleatorias-public-api.herokuapp.com/random");
    const result = await response.json()
    setAnswer(result.body.Word.toUpperCase().split(""))

  }


  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLines(lines.concat(input))
    setInput("")
  }

  // useEffect(()=>{
  //   getWord()
  // },[])

  return (

    <div >
      <div>
        <form onSubmit={handleSubmit}>
          <input value={input} placeholder="Ingresa una palabra" onChange={(e) => setInput(e.target.value.toUpperCase())} />
          <input type="submit" hidden />
        </form>
        <Wordle lines={lines} answer={answer} />
      </div>
    </div>
  );
}

export default App;
