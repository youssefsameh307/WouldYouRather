import React,{Component} from 'react'
import { connect } from 'react-redux'
import Question from './question'
class QuestionL extends Component{
    state={
        answered:false
    }
    answered=(e)=>{
        e.preventDefault()
        this.setState({
            answered:true
        })
    }
    unAnswered=(e)=>{
        e.preventDefault()
        this.setState({
            answered:false
        })
    }
    render(){
        const {answeredQuestions,unAnsweredQuestions,questions} = this.props
        const AQKeys= Object.keys(answeredQuestions)
        let AQ = []
        let UQs=unAnsweredQuestions
        let UQ = UQs.map((q)=>{return{"time":questions[q].timestamp,question:q,"answer":null}})
        for(const x in AQKeys){
            AQ.push({
                "time":questions[AQKeys[x]].timestamp,
                "question":AQKeys[x],
            "answer":answeredQuestions[AQKeys[x]]
            })
        }
        const NAQ=AQ.sort((a,b)=>b.time-a.time)
        const NUQ=UQ.sort((a,b)=>b.time-a.time)
        return(
            <div>
                <form>
                    <div>
                        <div className="center">
                            <div>
                                <button onClick={(e)=>this.unAnswered(e)} className="h-1/2 m-2 border-black border-2 items-center justify-center bg-blue-300 text-lg text-white">
                                UnAnswered questions
                            </button>
                            <button className="h-1/2  justify-center border-black border-2  m-2 bg-blue-300 text-lg text-white" onClick={(e)=>this.answered(e)}>
                                Answered questions
                            </button>
                            </div>
                        
                        </div>
                        <div>
                        <div className="center text-xl font-semibold ">{this.state.answered?"answered Questions":"unanswered questions"}</div>
                        </div>
                        <ul>
                            {this.state.answered&&NAQ.length>0&&NAQ.map((q)=>(
                                <li key={q.question} >
                                        <Question id={q.question} answer={q.answer} display={true} />
                                </li>
                            ))}

                        </ul>
                        <ul>
                            {!(this.state.answered)&&NUQ.length>0&&NUQ.map((q)=>(
                                <li key={q.question} >
                                        <Question id={q.question} answer={q.answer} display={true} />
                                </li>
                            ))}
                        </ul>
                        </div>

                </form>
                
            </div>
        )
    }
}

function mapStateToProps({authedUser,users,questions}){
    return{
        questions,
        loggedInUser:users[authedUser],
        answeredQuestions:users[authedUser].answers,
        unAnsweredQuestions:Object.keys(questions).filter((x)=>!Object.keys(users[authedUser].answers).includes(x))
    }
  }
  
export default connect(mapStateToProps)(QuestionL)