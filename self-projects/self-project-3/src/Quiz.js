import React from "react"
import Question from "./Question"
import {nanoid} from "nanoid"
import he from "he"

export default function Quiz(props) {
    const [questions, setQuestions] = React.useState([])
    const [finishedQuiz, setFinishedQuiz] = React.useState(false)
   
    React.useEffect(() => {
        async function getQuestions() {
            const res = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
            const data = await res.json()
            setQuestions(createQuestions(data.results))
        }
        getQuestions()
    }, [])

    function newOption(option, isCorrect) {
        return {
            id: nanoid(),
            option: he.decode(option),
            isCorrect: isCorrect,
            isSelected: false
        }
    }

    function createOptions(question) {
        let options = []
        options.push(newOption(question.correct_answer, true))
        for (let i = 0; i < question.incorrect_answers.length; i++) {
            let option = newOption(question.incorrect_answers[i], false)
            options.push(option)
        }
        options.sort(() => {return 0.5 - Math.random()})
        return options
    }
    
    function createQuestions(data) {
        let questions = []
        for (let i = 0; i < data.length; i++) {
            questions.push({
                id: nanoid(),
                question: he.decode(data[i].question),
                options: createOptions(data[i])
            })
        }
        return questions
    }
    
    function rightAnswers() {
        let rightAnswers = 0
        for (let i = 0; i < questions.length; i++) {
            for (let j = 0; j < questions[i].options.length; j++) {
                let option = questions[i].options[j]
                if (option.isCorrect && option.isSelected) {
                    rightAnswers++
                }
            }
        }
        return rightAnswers
    }

    const questionElements = questions.map(q => {
        return <Question 
        key={q.id}
        question={q.question}
        options={q.options}
        finishedQuiz={finishedQuiz}
        setQuestions={setQuestions}
        id={q.id}
        />
    })

    return (
        <>
            {questionElements}
            <div className="quiz-footer">
                {finishedQuiz && <h4>You scored {rightAnswers()}/{questions.length} correct answers</h4>}
                <button 
                    className="button" 
                    onClick={
                        finishedQuiz ? 
                        props.startNewQuiz :
                        () => setFinishedQuiz(true) /* Finish current quiz and check answers */
                    }
                >
                {finishedQuiz ? "Play again" : "Check answers"}
                </button>
            </div>
        </>
    )
}