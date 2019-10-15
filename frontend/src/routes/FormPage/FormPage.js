import React, { Component } from 'react'
import ReflectionForm from '../../components/ReflectionForm/ReflectionForm'
import { Section } from '../../components/Utils/Utils'

export default class FormPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleFormSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/home'
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Welcome Back!</h2>
        <ReflectionForm
          onFormSuccess={this.handleformSuccess}
        />
      </Section>
    )
  }
}