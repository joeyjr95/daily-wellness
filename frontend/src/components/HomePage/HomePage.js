import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import WellnessContext from '../../contexts/WellnessContext'
import WellnessApiService from '../../services/wellness-api-service'
import TokenService from '../../services/token-service'

export default class HomePage extends Component {
    static contextType = WellnessContext

    componentDidMount() {
        this.context.clearError()
        WellnessApiService.getAverages()
            .then(this.context.setAverages)
            .catch(this.context.setError)
            
    }
renderHomePage(){
return (
    <>
      <nav>
            <ul>
                    <li>Profile</li>
                    <li>Daily Form</li>
                    <li>Archive</li>
                    <li>Contact</li>        
                </ul>
    </nav>
    <div>
    <h3>How You Doin' {jwtDecode(TokenService.getAuthToken()).full_name}?</h3>
    </div>
    <section>
        <h3>Your Averages</h3>
        <p>Overall Health: 4</p>
        <p>Mental Health: 3</p>
        <p>Physical Health: 5</p>
    </section>

    <section>
        <h4><a href="form">submit your daily reflection</a></h4>
        <h4><a href="reflections">check past reflections</a></h4>
    </section>
    </>
)
}
render(){
    console.log(jwtDecode(TokenService.getAuthToken()))
    console.log(this.context.Averages)
    return (
        <div className="HomePage">
            {this.renderHomePage()}

        </div>
    )
}

}