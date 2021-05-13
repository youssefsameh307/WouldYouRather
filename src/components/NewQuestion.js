import React,{Component} from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'
class NewQuestion extends Component{
    state={
        opt1:'',
        opt2:'',
        toHome:false
    }
    handleChange1=(e)=>{
        const text1 = e.target.value

        this.setState(()=>({
            opt1:text1

        }))
    }
    handleChange2 =(e)=>{
        const text2 = e.target.value

        this.setState(()=>({
            opt2:text2
        }))
    }
    handelSubmit=(e)=>{
        e.preventDefault()

        const {opt1,opt2} = this.state
        const {dispatch}=this.props
        dispatch(handleAddQuestion(opt1,opt2))
        this.setState(()=>({
            opt1:'',
            opt2:''
        }))
        this.setState(()=>({
            toHome:true
        }))
        
    }
    render(){
        if (this.state.toHome===true){
            return <Redirect to='/WouldYouRather' />
        }
        const {authedUser} = this.props
        const {opt1,opt2} = this.state
        const opt1left = 35-opt1.length
        const opt2left = 35-opt2.length
        console.log(authedUser)
        return(
            <div>
            <div className="tweet">
              <div className="flex-none w-40 relative grid grid-flow-col grid-rows-3 grid-cols-1 gap-4">
                <img src={authedUser.avatarURL} alt={`Avatar of ${authedUser.name}`} className="row-start-1 row-span-2 rounded-full inset-0 object-cover border border-black shadow-offset-lime" />
                <div className="row-start-3">posted by you</div>
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
                      <form className='flex-col new-tweet' onSubmit={(e)=>this.handelSubmit(e)}>

                            <div className="flex-row space-x-6">   
                                <div className='flex'> 
                                <textarea 
                                    placeholder="option one"
                                    value={opt1}
                                    onChange={this.handleChange1}
                                    maxLength={35}
                                    />
                                    
                                    {opt1left<=10&&(
                                    <div className ='text-xl text-red-500 w-20 self-center pl-20 flex'>
                                        {opt1left}
                                    </div>
                                )}
                                </div>
                            </div>

                            <div className="flex-row ">
                                <div className='flex'> 
                                <textarea 
                                    placeholder="option two"
                                    value={opt2}
                                    onChange={this.handleChange2}
                                    className="flex"
                                    maxLength={35}
                                    />
                                    
                                {opt2left<=10&&(
                                    <div className =' text-xl text-red-500 w-20 self-center pl-20 flex'>
                                        {opt2left}
                                    </div>
                                )}
                                </div>
                            </div>
                            <button
                                className='btn'
                                type='submit'
                                disabled={opt1 ==='' || opt2 ===''}
                                >submit</button>
                        </form>
                  </div> 
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser,users}){
    return{
        authedUser:users[authedUser],
    }
  }
  
export default connect(mapStateToProps)(NewQuestion)