import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import WellnessContext from '../../contexts/WellnessContext'
import WellnessApiService from '../../services/wellness-api-service'
import TokenService from '../../services/token-service'
import {XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
  } from 'react-vis'
import moment from 'moment'
import './HomePage.css'

export default class HomePage extends Component {
    static contextType = WellnessContext

    componentDidMount() {
        this.context.clearError()
        WellnessApiService.getAverages()
            .then(this.context.setAverages)
            .catch(this.context.setError)
         WellnessApiService.getReflections()
            .then(this.context.setReflections)
            .catch(this.context.setError)
    }
    renderChart(){

    
        let reflections = localStorage.reflections
        console.log(reflections)
        
        const mentalReflections = reflections.map( reflection => [{ x: moment(reflection.date_created).format('MM/DD/YYYY') , y: reflection.mental_rating }])
        const physicalReflections = reflections.map( reflection => [{ x: moment(reflection.date_created).format('MM/DD/YYYY') , y: reflection.physical_rating }])
        
    
        return (
                
                <XYPlot width={300} height={300} stackBy="y">
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis tickLabelAngle={-45}/>
                  <YAxis />
                  <VerticalBarSeries data={mentalReflections} />
                  <VerticalBarSeries data={physicalReflections} />
                </XYPlot>
              
                
            
        )

    }


    renderHomePage(){  
            let average = {}
            if(this.context.averages.length > 0){
                average = this.context.averages[0]
            }
            
            const overallAvg = this.context.overallAverage(average)

            
    return (
        <>
        <section className='averages'>
            <h3>Your Averages</h3>
            <p>Overall Health: {Number(overallAvg).toFixed(1)} </p>
            <p>Mental Health: {Number(average.average_mental).toFixed(1)}</p>
            <p>Physical Health:{Number(average.average_physical).toFixed(1)}</p>
        </section>
        </>
    )
    }
render(){
    console.log(this.context.loggedIn)
    
    return (
        <div className="HomePage">
             <div>
        <h3>How You Doin' {jwtDecode(TokenService.getAuthToken()).full_name}?</h3>
        </div>
            {this.renderHomePage()}
            {this.renderChart()}
            <section className="links">
            <h4><a href="form">submit your daily reflection</a></h4>
            <h4><a href="reflections">check past reflections</a></h4>
        </section>
        </div>
    )
}

}