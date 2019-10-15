import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NiceDate } from '../Utils/Utils'

export default class ReflectionListItem extends Component{
    render(){
        const {reflection} = this.props
        return(
            <Link to={`/reflection/${reflection.id}`} className='ReflectionListItem'>
                <header className='ReflectionListItem_header'>
                    <ReflectionDate reflection={reflection}/>
                </header>
                <footer>
                    <ReflectionMentalRating reflection={reflection}/>
                    <ReflectionPhysicalRating reflection={reflection}/>
                </footer>


            </Link>

        )

    }

}

function ReflectionDate({ reflection }) {
    return (
      <span className='ReflectionListItem__date'>
        <NiceDate
          date={reflection.date_created}
        />
      </span>
    )
  }
function ReflectionMentalRating({reflection}){
    return (
        <span className='ReflectionListItem_mentalrating'>
            {reflection.mental_rating}
        </span>
    )
}
function ReflectionPhysicalRating({reflection}){
    return (
        <span className='ReflectionListItem_physicalrating'>
            {reflection.physical_rating}
        </span>
    )
}