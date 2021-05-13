import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { recieveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'


export function handleInitialData(id) {
  return (dispatch) => {

    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(recieveQuestions(questions))
        dispatch(setAuthedUser(id))
      })
  }
}
export function handleSetUser(id){
  return(dispatch)=>{
    return dispatch(setAuthedUser(id))
  }
}