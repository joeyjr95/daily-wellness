import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    renderLoginLink() {
        return (
          <div className='Header__Landing'>
            <Link
              to='/'>
              Register
            </Link>
            <Link
              to='/login'>
              Log in
            </Link>
          </div>
        )
      }
      render() {
        return (
          <nav className='Header'>
            <h1>
              <Link to='/'>
                How You Doin?
              </Link>
            </h1>
           {this.renderLoginLink()}
          </nav>
        )
      }
    

    
}