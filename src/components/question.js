import React,{Component} from 'react'
import { connect } from 'react-redux'
import {handleReceiveAnswer} from '../actions/users'
import {Link} from 'react-router-dom'
class Question extends Component{


    submitAnswer =(e,answer)=>{
      e.preventDefault()
      const {question,dispatch} = this.props
      dispatch(handleReceiveAnswer({
        qid:question.id,
        answer,
      }))
    }
    render(){
      console.log(this.props)
        const {display,question,users,authedUser,answered,votesone,votestwo} = this.props
        const author = users[question.author]
        const answer = authedUser["answers"]
        const percent1 =((votesone+votestwo===0)?0:((votesone/(votesone+votestwo))*100)).toFixed(2)
        const percent2 = (votesone+votestwo===0?0:100-percent1).toFixed(2)

        return(
            <Link to={`/WouldYouRather/questions/${question.id}`}>
            
            <div className="tweet">
              <div className="flex-none w-40 relative grid grid-flow-col grid-rows-3 grid-cols-1 gap-4">
                <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className="row-start-1 row-span-2 rounded-full inset-0 object-cover border border-black shadow-offset-lime" />
                <div className="row-start-3">posted by: {author.name}</div>
              </div>
              <div className="flex-auto pl-6">
                <div className="flex flex-wrap items-baseline pl-52 -mt-6 -mr-6 -ml-52 py-6 pr-6 bg-black text-white">
                  <h1 className="w-full flex-none text-2xl leading-7 mb-2 font-bold">
                    Would you rather ?
                  </h1>
                        </div>
                        <div className="flex items-baseline py-8">
                        <div className="space-x-3.5 flex text-center text-sm leading-none font-bold text-gray-500">
                        
                        </div>
                        </div>
                      <div className="flex space-x-3 text-sm font-bold uppercase">

                        {answered===null?(
                          <div className={`${!display?"w-1/2":"w-full"} flex flex-col space-y-3 h-40 `}>  
                            {display&&(<button className=" h-1/2 flex items-center justify-center rounded-md bg-red-600 text-lg text-white" >{question.optionOne.text}</button>)}
                            {!display&&(<><button className=" h-1/2 flex items-center justify-center rounded-md bg-red-600 text-lg text-white" onClick={(e)=>{this.submitAnswer(e,'optionOne')}}>{question.optionOne.text}</button>
                            <button className="h-1/2 flex items-center justify-center rounded-md border bg-blue-500 text-lg border-gray-300" onClick={(e)=>{this.submitAnswer(e,'optionTwo')}}>{question.optionTwo.text}</button>
                            </>)}</div>)

                        :(
                          <div>
                            <span className="flex-wrap">your answer was</span>
                            <div>{answer[question.id]==="optionOne"?(question.optionOne.text):
                    (question.optionTwo.text)}</div>
                        <div className="pt-10 flex-auto flex space-x-3">
                          <button className={`${answer[question.id]==="optionOne"?'bg-green-300':'bg-red-300'} h-12 w-1/2 flex items-center justify-center rounded-md border border-gray-300`} >{question.optionOne.text}</button>
                          {!display&&(<span>{percent1}%</span>)}
                          {!display&&(<span className='pl-4' >votes: {votesone}</span>)}
                          <button className={` ${answer[question.id]==="optionTwo"?'bg-green-300':'bg-red-300'} h-12 w-1/2 flex items-center justify-center rounded-md border border-gray-300`} >{question.optionTwo.text}</button>  
                          {!display&&(<span>{percent2}%</span>)}
                          {!display&&(<span className='pl-4'>votes: {votestwo}</span>)}
                        </div>
                        </div>)}
                        
                      </div>
                  </div> 
                </div>
            </Link>
        )
    }
}

function mapStateToProps({authedUser,users,questions},{id,answer,display}){
    return{
        question:questions[id],
        users,
        authedUser:users[authedUser],
        answered:questions[id].optionOne.votes.includes(authedUser)?'optionOne':questions[id].optionTwo.votes.includes(authedUser)?'optionTwo':null,
        display,
        votesone:questions[id].optionOne.votes.length,
        votestwo:questions[id].optionTwo.votes.length
    }
  }
  
export default connect(mapStateToProps)(Question)