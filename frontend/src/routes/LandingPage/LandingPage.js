import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'


export default class LandingPage extends Component {
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
    
      handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
      }



   renderLandingPage(){
    return ( 
    <>
    <div className="first-page">
        <h2>How You Doin?</h2>
        <h3>The App That Helps You Help You</h3>
        <a href="sign-up-page">
            Sign Up
        </a>
        <h4>(Arrow Down Icon)</h4>
    </div>
    <div className="about-page">
        <h2>About</h2>
        <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src="pictureofappform.jpg" alt="app form" /> 
        <p> 
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src="pictureofappprofile.jpg" alt="app profile"/> 

    </div>
    <Section className='RegistrationPage'>
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
        <div className="login-redirect">
        <p>Already have an account?<a href="login.html"> Click here!</a></p>
        </div>
      </Section>
    <footer className="contact-info">
        <p>Questions? Need Help? Ask away on one of these links.</p>
        <ul className="contact-list">
            <li>Email: <a href="email">email</a></li>
            <li>Phone: <a href="phone">phone</a></li>
        </ul>

    </footer>
    </>
    )}
  render(){
      return(
        <Section className='LandingPage'>
      {this.renderLandingPage()}
      </Section>
      )
  }
}