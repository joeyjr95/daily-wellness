import React, { Component } from 'react'
import WellnessContext from '../../contexts/WellnessContext'
import TokenService from '../../services/token-service'
import WellnessApiService from '../../services/wellness-api-service'
import jwtDecode from 'jwt-decode'

export default class EditForm extends Component {


    static contextType = WellnessContext

    handleSubmit = e => {
        let updatedReflection = JSON.parse(localStorage.reflection)
        e.preventDefault()
        const reflection = {
            id: updatedReflection.id,
            user_id: jwtDecode(TokenService.getAuthToken()).user_id,
            physical_rating: Number(e.target['physical_rating'].value),
            physical_content: e.target['physical_content'].value,
            mental_rating: Number(e.target['mental_rating'].value),
            mental_content: e.target['mental_content'].value,
        }
        console.log(reflection)
        WellnessApiService.patchReflection(reflection)
            .then(this.context.clearReflections)
            .then(this.props.handleClick())
            .catch(this.context.setError)
    }
    

    render() {
        let reflection = JSON.parse(localStorage.reflection)

        return(
        <>
          <form onSubmit ={this.handleSubmit}>
                <div>
                     <label htmlFor="mental_rating" >Rate your mental health today</label>
                    <select name='mental_rating' id='mental_rating' defaultValue={reflection.mental_rating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            <div>
            <textarea name="mental_content" id="mental_content"rows="10" cols="30" defaultValue={reflection.mental_content}></textarea>
           </div>
           <div>
                <label htmlFor="physical_rating" >Rate your physical health today</label>
                <select name='physical_rating' id='physical_rating' defaultValue={reflection.physical_rating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
           <div> 
           <textarea name="physical_content" id="physical_content" rows="10" cols="30" defaultValue={reflection.physical_content}></textarea> 
           </div>
           <button type='submit'>
          Edit Reflection
        </button>
         </form>

        </>
        )
    }
}