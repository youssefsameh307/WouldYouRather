  
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Sign from './Sign'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'
import DashBoard from './DashBoard'
import QuestionView from './QuestionView'
import Nav from './Nav'
import{ BrowserRouter as Router, Route} from 'react-router-dom'
import NewUser from './NewUser'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData(null))
  }
  render() {
    return (
      <Router>
        <div className='container'>
        {this.props.loggedin &&(<Nav />)}
        
          {!this.props.loggedin &&(<Sign/>)}
          {this.props.loggedin &&(<Route path='/' exact component={QuestionList} />)}
          {this.props.loggedin &&(<Route path='/WouldYouRather/add'  component={NewQuestion} />)}
          {this.props.loggedin &&(<Route path='/WouldYouRather/leaderboard'  component={DashBoard} />)}
          {this.props.loggedin &&(<Route path='/WouldYouRather/questions/:Qid'  component={QuestionView} />)}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({authedUser,users}){
  return{
      loggedin:authedUser!==null,
      ready:authedUser===''
  }
}

export default connect(mapStateToProps)(App)