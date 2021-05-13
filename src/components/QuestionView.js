import React,{Component} from 'react'
import { connect } from 'react-redux'
import Question from './question'
class QuestionView extends Component{

    render(){
        const {Qid,questions} = this.props
        return(
            <div>
            {Object.keys(questions).includes(Qid)?(<Question id={Qid} display={false}/>):(<h1>ERROR 404</h1>)}
            </div>
        )
    }
}

function mapStateToProps({questions},props){
    const {Qid} = props.match.params
    return{
        Qid,
        questions

    }
  }
  
export default connect(mapStateToProps)(QuestionView)