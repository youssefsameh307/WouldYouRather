import React,{Component} from 'react'
import { connect } from 'react-redux'
import { handleSetUser } from '../actions/shared'
class NewUser extends Component{
     state={
         inValid:false,
         text:''
     }
     handleChange=(e)=>{
        e.preventDefault()
        const input = e.target.value
        const {text,inValid} = this.state
        const {users} = this.state
        this.setState({
            text:input
        })
        console.log(this.state)
        if(users.includes(text)){
            this.setState({
                inValid:true
            })
        }
        else{
            this.setState({
                inValid:false
            })
        }
     }
    render(){

        const {users} = this.props
        console.log(users);
        return(
            <div className='grid-container' >
                <form>
                    <div className='grid-container'>
                        <h3>{this.state.text}</h3>
                        <input type='text' placeholder='name/tag' onChange={this.handleChange}></input>
                        <input type='text' placeholder='picture link'></input>
                    </div>
                    <div>
                            {this.state.inValid&&(<span> name already exists </span>)}
                            <button type='submit' disabled={this.state.inValid}>submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        users:Object.values(users).map((x)=>x.name)
    }
  }
  
export default connect(mapStateToProps)(NewUser)