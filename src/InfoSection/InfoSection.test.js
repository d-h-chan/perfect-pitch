import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import InfoSection from './InfoSection'

it('renders without errors', () => {
  const wrapper = shallow(<InfoSection />)
  expect(toJson(wrapper)).toMatchSnapshot()
})