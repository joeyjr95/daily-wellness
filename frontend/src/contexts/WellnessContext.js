import React, { Component } from 'react'
import WellnessApiService from '../services/wellness-api-service'



      const WellnessContext = React.createContext({
        error: null,
        user: {},
        averages: [],
        reflections: [],
        reflection: null,
        loading: false,
        loggedIn: false,
        setUser: () => {},
        setError: () => {},
        clearError: () => {},
        setReflections: () => {},
        setAverages: () => {},
        addReflection: () => {},
        overallAverage: () => {},
        handleDeleteReflection: () => {},
        handleLoginClick: () => {},
        handleLogoutClick: () => {},
      })
      
      export default WellnessContext
      
      export class WellnessProvider extends Component {
        state = {
          error: null,
          user: {},
          averages: [],
          reflection: null,
          reflections: [],
          loading: false,
          loggedIn: false,
        };
        handleLoginClick = () =>{
          this.setState({loggedIn: true})
        }
        handleLogoutClick = () =>{
          localStorage.clear("wellness-client-auth-token")
          this.setState({loggedIn: false})
        }
      
        setError = error => {
          console.error(error)
          this.setState({ error })
        }
      
        clearError = () => {
          this.setState({ error: null })
        }
      
        setUser = user => {
          this.setState({ user })
        }
        setAverages = averages => {
          this.setState({ averages })
        }
      
        setReflections = reflections => {
          this.setState({ reflections })
        }
        setReflection = reflection => {
          this.setState({ reflection })
        }
        clearReflection = () => {
          this.setReflection(null)
        }
        addReflection = reflection => {
          this.setReflections([
            ...this.state.reflections,
            reflection
          ])
        }
        overallAverage = average => {
          return (Number(average.average_mental) + Number(average.average_physical))/2
        }
        handleDeleteReflection = reflectionId => {
          WellnessApiService.deleteReflection(reflectionId)
          .then(() => {
            this.setState({
              reflections: this.state.reflections.filter(reflection => reflection.id !== reflectionId)
          })
          })
          .catch(err => {
            this.setError(err)
          })
      };
      
        render() {
          const value = {
            user: this.state.user,
            reflection: this.state.reflection,
            averages: this.state.averages,
            reflections: this.state.reflections,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setUser: this.setUser,
            setAverages: this.setAverages,
            loggedIn: this.state.loggedIn,
            handleLoginClick: this.handleLoginClick,
            handleLogoutClick: this.handleLogoutClick,
            setReflections: this.setReflections,
            setReflection: this.setReflection,
            addReflection: this.addReflection,
            clearReflection: this.clearReflection,
            overallAverage: this.overallAverage,
            handleDeleteReflection: this.handleDeleteReflection,
          }
          return (
            <WellnessContext.Provider value={value}>
              {this.props.children}
            </WellnessContext.Provider>
          )
        }
      }
      