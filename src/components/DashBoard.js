import React,{Component} from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'

class DashBoard extends Component{

    render(){
        const {users} = this.props

        const arr=[]
        for(let x in users ){
            console.log(users[x].questions.length+Object.keys(users[x].answers).length)
            let value2 = users[x].questions.length+Object.keys(users[x].answers).length
            arr.push({
                'userid':users[x].id,
                'value':value2
            })
        }
        const newarr =  arr.sort((a,b)=>b.value-a.value)

        return(
            <div>
                <div>
                    <div className="center text-xl font-semibold ">Leader board</div>
                            <ul>
                                {newarr.map((element)=><Profile key={element.userid} user={element.userid}/>)}

                            </ul>
                    </div>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        users:Object.values(users)
    }
  }
  
export default connect(mapStateToProps)(DashBoard)