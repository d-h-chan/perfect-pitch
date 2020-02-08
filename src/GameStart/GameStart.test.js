import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import GameStart from './GameStart'

it('renders without errors', () => {
  const wrapper = shallow(<GameStart />)
  expect(toJson(wrapper)).toMatchSnapshot()
})