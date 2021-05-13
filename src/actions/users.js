import {saveQuestionAnswer} from '../utils/api'

export const RECEIVE_USERS ='RECEIVE_USERS'
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER'

export function receiveUsers(users){
    return{
        type:RECEIVE_USERS,
        users,
    }
}

export function receiveUserAnswer({ authedUser, qid, answer }){
    return{
        type:RECEIVE_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleReceiveAnswer({qid, answer }){
    return (dispatch,getState)=>{
        const {authedUser} = getState()
        return saveQuestionAnswer({authedUser,qid,answer}) //{ authedUser, qid, answer }
        .then(()=>{
            dispatch(receiveUserAnswer({authedUser,qid,answer}))
            alert('your answer was saved sucessfully!')
        }).catch((e)=>{
            alert('error occurred. please try again')
        })
    }

    
}