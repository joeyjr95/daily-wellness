import React, { Component } from 'react'
import moment from 'moment'
import WellnessContext from '../../contexts/WellnessContext'


export default class ReflectionListItem extends Component{
    static contextType = WellnessContext
    static defaultProps ={
        handleClickEdit: () => {}
    }

    handleDelete = e =>{
                this.context.handleDeleteReflection(this.props.id)
           
    }
    handleEdit = e =>{
        this.context.setReflection(this.props)
        this.props.handleClickEdit()
        
    }
  
    render(){
        
        return(
            <div className='ReflectionListItem'>
                <header className='ReflectionListItem_header'>
                  <h2> {moment(this.props.date_created).format('MM/DD/YYYY')} </h2>
                </header>
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
            
            <button onClick={this.handleDelete}>
                Delete
            </button>
            <button onClick={this.handleEdit}>
                Edit
            </button>


            </div>

        )

    }

}

