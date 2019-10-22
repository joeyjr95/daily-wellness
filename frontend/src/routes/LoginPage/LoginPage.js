import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import WellnessContext from '../../contexts/WellnessContext'
import './LoginPage.css'

export default class LoginPage extends Component {
  static contextType = WellnessContext

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/home'
    this.context.handleLoginClick()
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Welcome Back!</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}