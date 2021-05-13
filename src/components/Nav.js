import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import{handleSetUser} from '../actions/shared'

class Nav extends Component{
    render(){

  return (
    <nav className='mb-10 pb-10 nav'>
      <ul>
        <li>
          <NavLink to='/WouldYouRather/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/WouldYouRather/add' activeClassName='active'>
            New question
          </NavLink>
        </li>
        <li>
          <NavLink to='/WouldYouRather/leaderboard' activeClassName='active'>
            DashBoard
          </NavLink>
        </li>
      </ul>
      <div>
          welcome!  {this.props.authedUser.name}
        <button className=' bg-blue-300 ml-10' onClick={()=>this.props.dispatch(handleSetUser(null))}> Log out</button>
      </div>
    </nav>
  )
    }
} 

function mapStateToProps({authedUser,users}){
    return{
        authedUser:users[authedUser],
    }
  }
  
export default connect(mapStateToProps)(Nav)