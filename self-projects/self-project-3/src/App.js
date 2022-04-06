import React from "react"
import MainPage from "./MainPage"
import Quiz from "./Quiz"

export default function App() {
  const [start, setStart] = React.useState(false)

  function startNewQuiz() {
    setStart(!start)
  }

  return (
    <main>
      <img className="yellow-blob" src={require("./images/blob-yellow.png")} alt=""/>
      <img className="blue-blob" src={require("./images/blob-blue.png")} alt=""/>
      
      {!start && <MainPage startNewQuiz={startNewQuiz}/>}
      {start && <Quiz startNewQuiz={startNewQuiz}/>}
    </main>
  )
}