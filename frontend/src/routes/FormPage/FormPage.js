import React, { Component } from 'react'
import ReflectionForm from '../../components/ReflectionForm/ReflectionForm'
import { Section } from '../../components/Utils/Utils'

export default class FormPage extends Component {
  handleClick = () => {
    this.props.history.push(`/reflections`)
  }
  render() {
    return (
      <Section className='LoginPage'>
        <h2>Welcome Back!</h2>
        <ReflectionForm
            handleClick ={this.handleClick}
        />
      </Section>
    )
  }
}