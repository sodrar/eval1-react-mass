import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {

  // exo 1
  console.log("Hello World !!")

  // exo 2
  const [count, setCount] = useState(0)

  const incrCount = () => {
    setCount(count + 1)
  }

  // exo 3
  const [input, setInput] = useState("changer moi !")

  const handleCHange = e => {
    setInput(e.target.value)
  }

  return (
    <>
      <h1>Eval React (Sofian BOUDRAA)</h1>
      <h2>Hello World</h2>
      <p>Consigne: Faire une hello world dans la console = fait dans la console</p>
      <h2>Clicker</h2>
      <p>Faire un bouton clickable qui va incrémenter le contenu d"une balise:</p>
      <div>
        <button onClick={incrCount} >Incrémenter le nombre</button>
        <p>Le nombre: <span>{count}</span></p>
      </div>
      <h3>Input Modifier</h3>
      <div>
        <label htmlFor="monInput">Rentrez du texte pour voir le span changer de contenu textuel ☺☻</label>
        <br />
        <input onChange={handleCHange} type="text" id="monInput" name="monInput" value={input} />
        <p>{input}</p>
      </div>
    </>
  )
}

export default App
