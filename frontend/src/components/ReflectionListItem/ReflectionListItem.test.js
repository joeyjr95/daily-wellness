import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ReflectionListItem from './ReflectionListItem'

describe(`ReflectionListItem component`, () => {
  const props = {
    id: 12,
    date_created: "2018-08-15T23:00:00.000Z",
    mental_rating: 5,
    mental_content: "stuff",
    physical_rating: 2,
    physical_content: "stuff",
    handleClickEdit: () => {
        this.props.history.push(`/edit`)
        }
  }

  it('renders a ReflectionListItem by default', () => {
    const wrapper = shallow(<ReflectionListItem />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the ReflectionListItem given props', () => {
    const wrapper = shallow(<ReflectionListItem {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})