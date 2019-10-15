import React, { Component } from 'react'
import WellnessContext from '../../contexts/WellnessContext'
import WellnessApiService from '../../services/wellness-api-service'
import { Button } from '../Utils/Utils'

export default class ReflectionForm extends Component {
    static defaultProps = {
        onFormSuccess: () => {}
      }

    static contextType = WellnessContext

    handleSubmit = e => {
        e.preventDefault()
        const reflection = {
            user_id: this.context.user,
            physical_rating: Number(e.target['physical_rating'].value),
            physical_content: e.target['physical_content'].value,
            mental_rating: Number(e.target['mental_rating'].value),
            mental_content: e.target['mental_content'].value,
        }
        WellnessApiService.postReflection(reflection)
            .then(this.context.addReflection,
                  this.props.onFormSuccess())
            .catch(this.context.setError)
    }

    render() {

        return(
        <>
          <form onSubmit ={this.handleSubmit}>
                <div>
                     <label htmlFor="mental_rating">Rate your mental health today</label>
                    <select name='mental_rating' id='mental_rating'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            <div>
            <textarea name="mental_content" id="mental_content"rows="10" cols="30">explain your mental rating</textarea>
           </div>
           <div>
                <label htmlFor="physical_rating">Rate your physical health today</label>
                <select name='physical_rating' id='physical_rating'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
           <div> 
           <textarea name="physical_content" id="physical_content" rows="10" cols="30">explain your physical rating</textarea> 
           </div>
           <Button type='submit'>
          Submit Reflection
        </Button>
         </form>

        </>
        )
    }

}