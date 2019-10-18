import React, { Component } from 'react'
import WellnessContext from '../../contexts/WellnessContext'
import WellnessApiService from '../../services/wellness-api-service'
import { NiceDate, Section } from '../../components/Utils/Utils'

export default class ReflectionPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = WellnessContext

    componentDidMount() {
        console.log(this.props.match.params)
        const {reflectionId} = this.props.match.params
        this.context.clearError()
        WellnessApiService.getReflection(reflectionId)
            .then(this.context.setReflection)
            .catch(this.context.setError)
    }
    componentWillUnmount(){
        this.context.clearReflection()
    }

    renderReflection(){
        const {reflection} = this.context
        return <>
            <h2>Reflection from:<NiceDate date={reflection.date_created}/></h2>
            <ul>
                <li>{reflection.physical_rating}</li>
                <li>{reflection.physical_content}</li>
                <li>{reflection.mental_rating}</li>
                <li>{reflection.mental_content}</li>
                
            </ul>
        </>
    }

    render(){
        const {error, reflection} = this.context
        let content
        if (error) {
            content = (error.error === `Reflection doesn't exist`)
        ? <p className='error'>Reflection not found</p>
        : <p className='error'>There was an error</p>
        } else if (!reflection.id) {
            content = <div className='loading' />
        } else {
            content = this.renderReflection()
        }
        return(
            <Section className='ReflectionPage'>
                {content}
            </Section>
        )
    }

}