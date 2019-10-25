import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ReflectionListPage from './ReflectionListPage'

describe(`ReflectionListPage component`, () => {
  it('renders a .ReflectionListPage by default', () => {
    const wrapper = shallow(<ReflectionListPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a Reflection for each notes in array', () => {
    
    const context = {
      reflections: [
        {
            "id": "28",
            "user_id": "1",
            "date_created": "2018-08-15T23:00:00.000Z",
            "mental_rating": "3",
            "mental_content": "stuff",
            "physical_rating": "1",
            "physical_content": "stuffffffff"
        },
        {
            "id": "29",
            "user_id": "1",
            "date_created": "2019-08-15T23:00:00.000Z",
            "mental_rating": "2",
            "mental_content": "stuff",
            "physical_rating": "4",
            "physical_content": "stuffffffff"
        },
      ]
    }
    const div = shallow(<ReflectionListPage />, context)
      .find('div')
    expect(toJson(div)).toMatchSnapshot()
  })
})