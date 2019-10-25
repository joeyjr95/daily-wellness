import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends Component {
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
    
      handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
      }
      render(){
        return(
            <section className='RegistrationPage'>
        <h2 id="registration">Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
        <div className="login-redirect">
        <p>Already have an account?<a href="login"> Click here!</a></p>
        </div>
      
    
    </section>
        )}
    }