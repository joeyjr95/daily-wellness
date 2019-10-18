import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default class ReflectionListItem extends Component{
  
    render(){
        
        return(
            <Link to={`/reflection/${this.props.id}`} className='ReflectionListItem'>
                <header className='ReflectionListItem_header'>
                  <h2> {moment(this.props.date_created).format('DD/MM/YYYY')} </h2>
                </header>
                <footer>
                <span className='ReflectionListItem_mentalrating'>
           <div> mental rating:  {this.props.mental_rating}  </div>
        </span>
        <span className='ReflectionListItem_mentalcontent'>
           <div> mental content:  {this.props.mental_content}  </div>
        </span>
        <span className='ReflectionListItem_physicalrating'>
            <div> physical rating:  {this.props.physical_rating} </div>
        </span>
        <span className='ReflectionListItem_physicalcontent'>
           <div> physical content:  {this.props.physical_content}  </div>
        </span>
                </footer>


            </Link>

        )

    }

}

