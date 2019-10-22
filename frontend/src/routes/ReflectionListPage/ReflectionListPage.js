import React, { Component } from 'react'
import WellnessContext from '../../contexts/WellnessContext'
import WellnessApiService from '../../services/wellness-api-service'
import { Section } from '../../components/Utils/Utils'
import ReflectionListItem from '../../components/ReflectionListItem/ReflectionListItem'

export default class ReflectionListPage extends Component {
    static contextType = WellnessContext

    componentDidMount() {
        this.context.clearError()
        WellnessApiService.getReflections()
            .then(this.context.setReflections)
            .catch(this.context.setError)
    }

    renderReflections() {
        const { reflections = []} = this.context
        return reflections.map( reflection =>
            <ReflectionListItem
                key={reflection.id}
                id={reflection.id}
                date_created={reflection.date_created}
                mental_rating={reflection.mental_rating}
                mental_content={reflection.mental_content}
                physical_rating={reflection.physical_rating}
                physical_content={reflection.physical_content}
            />
        )
    }
    render(){
        const {error} = this.context
        return(
            <Section list className="ReflectionsListPage">
                {error
                ? <p className='error'> There was an error loading the Reflections, try again</p>
                : this.renderReflections()}
            </Section>
        )
    }
}