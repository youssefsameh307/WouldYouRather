import {RECEIVE_QUESTIONS,ADD_QUESTION} from '../actions/questions'
import {RECEIVE_ANSWER} from '../actions/users'

export default function questions(state={},action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case RECEIVE_ANSWER:
            return{
                ...state,
                [action.qid]:{
                    ...state[action.qid],
                    [action.answer]:{
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                    
                }
            }
        case ADD_QUESTION:
            return{
                ...state,
                [action.question.id]:action.question
            }
        default:
            return state
    }
}