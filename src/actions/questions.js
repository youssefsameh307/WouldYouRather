import { saveQuestion } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function recieveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
export function addQuestion(question){
    return{
        type:ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText,optionTwoText){
    return (dispatch,getState)=>{
        const {authedUser} = getState()
        
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author:authedUser
        }).then((question)=>{
            dispatch(addQuestion(question))
            alert("question added succesfully")   
        }).catch((e)=>alert("error occured. Try again"))
    }
}

