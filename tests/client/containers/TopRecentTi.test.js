import React from 'react'
import { shallow, mount } from 'enzyme';

import {TopRecentTi} from '../../../client/containers/dispTop/TopRecentTi'

describe('<TopRecentTi />', () => {
  it('renders 5 <Card /> components', () => {
    // arrange
    const wrapper = shallow(<TopRecentTi ticketsByLocation={['hi', 'hey', 'hi', 'hey', 'hey']}/>)
    // console.log(wrapper.debug());

    //act
    let actual = (wrapper.find('.flex-cards').children().length)
    let expected = 5

    //assert
    expect(actual).toBe(expected)
  })

  it("doesn't return anymore than 5 results when given larger array", () => {
    //arrange
    const wrapper = shallow(<TopRecentTi ticketsByLocation={['hi', 'hey', 'hi', 'hey', 'hi', 'hey', 'hello']}/>)

    //act
    let actual = (wrapper.find('.flex-cards').children().length)
    let expected = 5

    //assert 
    expect(actual).toBe(expected)
  })

  it("returns less than 5 when given a shorter array", () => {
    //arrange
    const wrapper = shallow(<TopRecentTi ticketsByLocation={['hi', 'hey']}/>)

    //act
    let actual = (wrapper.find('.flex-cards').children().length)
    let expected = 2

    //assert 
    expect(actual).toBe(expected)
  })
})
