import React, { Component } from 'react'

export default class HomePage extends Component {
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
    <h3>How You Doin' (firstname)?</h3>
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

    return (
        <div className="HomePage">
            {this.renderHomePage()}

        </div>
    )
}

}