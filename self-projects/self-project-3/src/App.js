import React from "react"

export default function App() {
  return (
    <main>
      <img className="yellow-blob" src={require("./images/blob-yellow.png")}/>
      <img className="blue-blob" src={require("./images/blob-blue.png")}/>
      <h1 className="title">Quizzical</h1>
      <h4 className="description">Some description if needed</h4>
      <button className="start-button">Start quiz</button>
    </main>
  )
}