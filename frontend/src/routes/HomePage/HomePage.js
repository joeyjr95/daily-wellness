import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import WellnessContext from '../../contexts/WellnessContext'
import WellnessApiService from '../../services/wellness-api-service'
import TokenService from '../../services/token-service'
import './HomePage.css'

export default class HomePage extends Component {
    static contextType = WellnessContext

    componentDidMount() {
        this.context.clearError()
        WellnessApiService.getAverages()
            .then(this.context.setAverages)
            .catch(this.context.setError)
            
    }

    


    renderHomePage(){  
            let average = {}
            if(this.context.averages.length > 0){
                average = this.context.averages[0]
            }
            
            const overallAvg = this.context.overallAverage(average)

            
    return (
        <>
        <div>
        <h3>How You Doin' {jwtDecode(TokenService.getAuthToken()).full_name}?</h3>
        </div>
        <section className='averages'>
            <h3>Your Averages</h3>
            <p>Overall Health: {Number(overallAvg).toFixed(1)} </p>
            <p>Mental Health: {Number(average.average_mental).toFixed(1)}</p>
            <p>Physical Health:{Number(average.average_physical).toFixed(1)}</p>
        </section>

        <section className="links">
            <h4><a href="form">submit your daily reflection</a></h4>
            <h4><a href="reflections">check past reflections</a></h4>
        </section>
        </>
    )
    }
render(){
    console.log(this.context.loggedIn)
    
    return (
        <div className="HomePage">
            {this.renderHomePage()}

        </div>
    )
}

}