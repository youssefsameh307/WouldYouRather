import React,{Component} from 'react'
import { connect } from 'react-redux'

class Profile extends Component{
    render(){
        const {users,user,authedUser} = this.props
        const userx = users[user]
        return(

            <div className=" items-center flex flex-col tweet">

                    {<div>  
                            <img src={userx.avatarURL} alt={`avatar of: ${userx.name}`} className="avatar2 row-start-1 row-span-2 rounded-full inset-0 object-cover border border-black shadow-offset-lime" />
                            <span className='place-content-center font-bold pl-5'>{userx.id===authedUser?'You':userx.name}</span>
                    
                        </div>}


                <div className=" items-center justify-start place-content-start flex-row container">
                    <div className='mb-2 rounded-2xl place-content-center flex bg-green-200 '>
                            questions posted: {userx.questions.length}
                    </div>
                    <div className='mb-2 rounded-2xl place-content-center flex bg-blue-200 '>
                            questions answered: {Object.keys(userx.answers).length?Object.keys(userx.answers).length:0}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users,authedUser},{user}){
    return{
        users,
        user,
        authedUser
    }
  }
  
export default connect(mapStateToProps)(Profile)