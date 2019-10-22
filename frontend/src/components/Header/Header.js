import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import WellnessContext from '../../contexts/WellnessContext'
import './Header.css'


export default class Header extends Component {
  static contextType = WellnessContext

    renderLoginLink() {
        return (
          <div className='Header__Landing'>
            <a href="#registration">
            Sign Up
        </a>
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
    return <Link to="/" onClick={this.logout}>Log Out</Link>
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
            <h1>
              <Link to='/'>
                How You Doin?
              </Link>
            </h1>
        
           {button}

          </nav>
        )
      }
    

    
}