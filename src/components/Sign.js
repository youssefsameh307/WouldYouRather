import React,{Component} from 'react'
import { connect } from 'react-redux'
import { handleSetUser } from '../actions/shared'
class Sign extends Component{
      login=(e) =>{
            e.preventDefault()
            this.props.dispatch(handleSetUser(this.value.value))
      }
      handleChange=()=>{
        const {usersx} = this.props  
        this.img.src=usersx[this.value.value].avatarURL
        this.img.alt="Avatar of "+usersx[this.value.value].name
        // usersx[this.value.value].avatarURL
      }
    render(){
        const {users} = this.props
        return(
            <div className=" items-center flex flex-col tweet">

                    {users[0]&&(<div>
                            <img ref={(img) => this.img = img} src={users[0].avatarURL} alt={`Avatar of ${users[0].name}`} className=" avatar2 row-start-1 row-span-2 rounded-full inset-0 object-cover border border-black shadow-offset-lime" />
                        </div>)}

 
                <div className="items-center flex w-full ">
                <form className=" center w-full">
                    <div>
                        <select ref={(value) => this.value = value} onChange={this.handleChange}>
                            {users.map((user)=>(
                                <option key={user.id} value={user.id}>
                                        {user.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button 
                        className='btn'
                        type='submit'
                        onClick={this.login}>
                        Login
                    </button>
                </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        users:Object.values(users),
        usersx:users
    }
  }
  
export default connect(mapStateToProps)(Sign)