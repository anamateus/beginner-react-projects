import React from "react"
import Option from "./Option"

export default function Question(props) {
    const [options, setOptions] = React.useState(props.options)

    function selectOption(id) {
        setOptions(oldOptions => oldOptions.map(option => {
            return option.id === id ?
            {...option, isSelected: !option.isSelected} :
            {...option, isSelected: false}
        }))
    }

    React.useEffect(() => {
        props.setQuestions(oldQuestions => {
            let newArray = []
            for (let i = 0; i < oldQuestions.length; i++) {
                const oldQuestion = oldQuestions[i]
                if (oldQuestion.id === props.id) {
                    newArray.push({...oldQuestion, options: options})
                } else {
                    newArray.push(oldQuestion)
                }
            }
            return newArray
        })
    }, [options])
    
    const optionElements = options.map(option => 
    <Option 
        key={option.id} 
        option={option.option} 
        isCorrect={option.isCorrect} 
        isSelected={option.isSelected} 
        selectOption={() => selectOption(option.id)}
        finishedQuiz={props.finishedQuiz}
    />)
    
    return (
        <div className="question">
            <h4>{props.question}</h4>
            {optionElements}
            <hr/>
        </div>
    )
}