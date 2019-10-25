import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import WellnessContext from '../../contexts/WellnessContext'


export default class LoginForm extends Component {
  static contextType = WellnessContext
  
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  refreshPage = () => {
    window.location.reload(false)
  }
  

  handleSubmitJwtAuth = ev => {
       ev.preventDefault()
       this.setState({ error: null })
       const { user_name, password } = ev.target
       
       AuthApiService.postLogin({
         user_name: user_name.value,
         password: password.value,
       })
         .then(res => {
         user_name.value = ''
           password.value = ''
           TokenService.saveAuthToken(res.authToken)
           this.refreshPage()
           this.props.onLoginSuccess()
         })
         .catch(res => {
           this.context.setError({ error: res.error })
         })
       
     }

  render() {
    
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </input>
        </div>
        <button type='submit'>
          Login
        </button>
      </form>
    )
  }
}
