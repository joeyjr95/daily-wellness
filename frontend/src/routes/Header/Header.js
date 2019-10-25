import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import WellnessContext from '../../contexts/WellnessContext'
import './Header.css'


export default class Header extends Component {
  static contextType = WellnessContext

    renderLoginLink() {
        return (
          <div className='Header__Landing'>
           <Link
              to='/register'>
              Sign up
            </Link>
            <Link
              to='/login'>
              Log in
            </Link>
          </div>
        )
      }
    logout = () => {
      this.context.handleLogoutClick()
    }
    renderLogoutLink() {
    return (<div className='Header__Landing'>
      <Link to='/'>
                    Home
                  </Link>
    
    <Link to="/" onClick={this.logout}>Log Out</Link>
    </div>
    )
  }
      render() {
        const loggedIn = this.context.loggedIn
        let button
        if (!loggedIn) {
          button = <div>{this.renderLoginLink()}</div>
        } else {
          button = <div>{this.renderLogoutLink()}</div>
        }

        return (
          <nav className='Header'>
            <div className="flexBody">
                <h1 className="logo">
                  <Link to='/'>
                    How You Doin?
                  </Link>
                </h1>
                
              {button}
           </div>
          </nav>
        )
      }
    

    
}