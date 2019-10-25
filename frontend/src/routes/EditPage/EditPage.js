import React, { Component } from 'react'
import EditForm from '../../components/EditForm/EditForm'
import { Section } from '../../components/Utils/Utils'
import '../../routes/FormPage/FormPage.css'

export default class FormPage extends Component {
  handleClick = () => {
    this.props.history.push(`/home`)
  }
  render() {
    return (
      <Section className='FormPage'>
        <h2>Welcome Back!</h2>
        <EditForm
            handleClick ={this.handleClick}
        />
      </Section>
    )
  }
}