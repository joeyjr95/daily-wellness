import React, { Component } from 'react'
import WellnessApiService from '../services/wellness-api-service'
import TokenService from '../services/token-service'



      const WellnessContext = React.createContext({
        error: null,
        user: {},
        averages: [],
        reflections: [],
        reflection: {},
        loading: false,
        loggedIn: false,
        setUser: () => {},
        setError: () => {},
        clearError: () => {},
        clearReflections: () => {},
        setReflections: () => {},
        setReflection: () => {},
        setAverages: () => {},
        addReflection: () => {},
        overallAverage: () => {},
        handleDeleteReflection: () => {},
        handleLoginClick: () => {},
        handleLogoutClick: () => {},
      })
      
      export default WellnessContext
      
      export class WellnessProvider extends Component {
        componentDidMount (){
          if(TokenService.hasAuthToken){
            this.setState({loggedIn: true})
          }
        }
        state = {
          error: null,
          user: {},
          averages: [],
          reflection: {},
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
        clearReflections = () => {
          this.setReflections([])
        }
      
        setUser = user => {
          this.setState({ user })
        }
        setAverages = averages => {
          this.setState({ averages })
        }
      
        setReflections = reflections => {
          localStorage.setItem('reflections', JSON.stringify(reflections) )
          this.setState({ reflections })
        }
        setReflection = reflection => {
          localStorage.setItem('reflection', JSON.stringify(reflection) )
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
            clearReflections: this.clearReflections,
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
      