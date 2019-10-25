import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ReflectionForm from './ReflectionForm';

describe(`ReflectionForm component`, () => {
  it('renders a ReflectionForm by default', () => {
    const wrapper = shallow(<ReflectionForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})