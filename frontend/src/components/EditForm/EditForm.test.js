import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EditForm from './EditForm'

describe.skip(`EditForm component`, () => {

  it('renders a EditForm by default', () => {
    const wrapper = shallow(<EditForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})