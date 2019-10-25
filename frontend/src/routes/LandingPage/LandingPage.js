import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import './LandingPage.css'


export default class LandingPage extends Component {


   renderLandingPage(){
    return ( 
    <>
    <div className="first-page">
        <h2>How You Doin?</h2>
        <h3>The App That Helps You Help You</h3>
        <Link
              to='/register'>
              Sign up
            </Link>
        <a href="#about"><FontAwesomeIcon icon={faAngleDoubleDown} /></a>
    </div>
    <div className="about-page" id="about">
        <h2> About</h2>
    <div className="aboutPageInfo">
        <div id="profile">
        <p> 
            "How You Doin?" is an app that helps you help you. "How You Doin?" lets you keep tract of how you're doing mentally and physically daily and keeps charts on the desktop app and averages to show you how you're progressing through the week and overall time of using the app. On the homepage, you have access to their data as well as two different charts helping you visualize your day to day progress as well as your overall progress.
        </p>
        <img src="https://i.imgur.com/LGqQAWj.png" alt="app profile" /> 
        </div>
        <div id="form">
        <img src="https://i.imgur.com/I8EaGm4.png" alt="app form"/> 
        <p> 
            Users fill out a form daily to update their ratings and add descriptions to those rating which are accessible at anypoint on the homepage. Users can update and delete their scores if needed.
        </p>
        
        </div>
    </div>
        <footer className="contact-info">
        <p>Questions? Need Help? Ask away on one of these links.</p>
        <ul className="contact-list">
            <li>Email: <a href="email">joeyjr95@gmail.com</a></li>
            <li>Phone: <a href="phone">703-608-0673</a></li>
        </ul>

    </footer>

    </div>
    
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