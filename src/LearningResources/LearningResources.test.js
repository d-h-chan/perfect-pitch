import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LearningResources from './LearningResources'

it('renders without errors', () => {
  const wrapper = shallow(<LearningResources />)
  expect(toJson(wrapper)).toMatchSnapshot()
})