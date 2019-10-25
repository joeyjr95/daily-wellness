import React, { Component } from 'react'
import ReflectionForm from '../../components/ReflectionForm/ReflectionForm'
import { Section } from '../../components/Utils/Utils'
import './FormPage.css'

export default class FormPage extends Component {
  handleClick = () => {
    this.props.history.push(`/home`)
  }
  
  render() {
    return (
      <Section className='FormPage'>
        <h2>Welcome Back!</h2>
        <ReflectionForm
            handleClick ={this.handleClick}
        />
      </Section>
    )
  }
}