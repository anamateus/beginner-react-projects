import React from "react"

export default function Option(props) {
    function setOptionColor() {
        if (props.finishedQuiz) {
            if (props.isCorrect) return "#94D7A2"
            if (props.isSelected) return "#F8BCBC"
        }
        return props.isSelected ? "#D6DBF5" : ""
    }

    const styles = {
        backgroundColor: setOptionColor()
    }

    return (
        <button className="option" style={styles} onClick={e => props.finishedQuiz ? e.preventDefault() : props.selectOption()}>
            {props.option}
        </button>
    )
}