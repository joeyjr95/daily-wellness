import React, { Component } from 'react'



      const WellnessContext = React.createContext({
        error: null,
        user: {},
        averages: [],
        reflections: [],
        reflection: null,
        loading: false,
        setUser: () => {},
        setError: () => {},
        clearError: () => { },
        setReflections: () => {},
        addReflection: () => {},
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
        };
      
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
            setReflections: this.setReflections,
            setReflection: this.setReflection,
            addReflection: this.addReflection,
            clearReflection: this.clearReflection
          }
          return (
            <WellnessContext.Provider value={value}>
              {this.props.children}
            </WellnessContext.Provider>
          )
        }
      }
      