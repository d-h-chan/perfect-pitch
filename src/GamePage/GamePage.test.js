import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import GamePage from './GamePage'

it('renders without errors', () => {
  const wrapper = shallow(<GamePage />)
  expect(toJson(wrapper)).toMatchSnapshot()
})