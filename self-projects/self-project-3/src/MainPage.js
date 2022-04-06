import React from "react"

export default function MainPage(props) {
    return (
        <>
            <h1 className="title">Quizzical</h1>
            <h4 className="description">
                Ready to test your general knowledge? <br/>
                Take the quiz!
            </h4>
            <button className="button" onClick={props.startNewQuiz}>Start quiz</button>
        </>
    )
}