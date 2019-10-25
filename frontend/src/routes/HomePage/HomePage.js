import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import WellnessContext from '../../contexts/WellnessContext'
import WellnessApiService from '../../services/wellness-api-service'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'
import {XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    RadialChart,
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

    
        let reflections = this.context.reflections
        
        console.log(reflections)
        const mentalReflections = reflections.map( reflection => {
            return { x: moment(reflection.date_created).format('ddd'), y: reflection.mental_rating }}) 
        
        console.log(mentalReflections)
        const physicalReflections = reflections.map( reflection => {
            return { x: moment(reflection.date_created).format('ddd') , y: reflection.physical_rating}})
        
    
        return (
                <div className ="dailyChart">
                <XYPlot  width={250} xType="ordinal" height={250} >
                     {/* window.innerWidth/6 window.innerHeight/3.5 */}
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis tickLabelAngle={0} />
                  <YAxis/>
                  <VerticalBarSeries data={mentalReflections} />
                  <VerticalBarSeries data={physicalReflections} />
                </XYPlot>
                <p>Light green is Physical Rating</p>
                <p>Dark green is Mental Rating</p>
                </div>
              
                
            
        )

    }

    renderPieChart(){
        let average = {}
            if(this.context.averages.length > 0){
                average = this.context.averages[0]
            }
    
    return (
    <div className="pieChart">
      <RadialChart
      colorType={'literal'}
      colorDomain={[0, 100]}
      colorRange={[0, 10]}
      getLabel={d => d.name}
      data={[
        {angle: Number(average.average_mental), color: '#1c939a', name: 'mental'},
        {angle: Number(average.average_physical), color: '#72bce0', name: 'physical'},
        
      ]}
      labelsRadiusMultiplier={1}
      labelsStyle={{fontSize: 16}}
      showLabels
      style={{stroke: '#fff', strokeWidth: 2}}
      width={250}
      height={250}
        
      >
      </RadialChart>
      <p> Averages Visualization</p>
      </div>
    );
            
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
    
    let dataSection
    if ( this.context.reflections.length !== 0){
       dataSection = <div className="data">
            {this.renderPieChart()}
            {this.renderHomePage()}
            {this.renderChart()}
        </div>
    } else {
        dataSection = <div className="data"><Link
        to='/form'>
        Click here to Submit your first reflection!
      </Link></div>
    }
    return (
        <div className="HomePage">
        <h2 id="userGreeting">How You Doin' {jwtDecode(TokenService.getAuthToken()).full_name}?</h2>
        
            {dataSection}
            <section className="links">
            <h4><Link to="/form">submit your daily reflection</Link></h4>
            <h4><Link to="/reflections">check past reflections</Link></h4>
        </section>
        </div>
    )
}

}