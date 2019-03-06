import React from 'react'
import {shallow, mount} from 'enzyme'

import {Footer} from '../../../client/components/Footer'

describe('<Footer />', () => {

  it('renders a p tag with The Gear Report', () => {
    const wrapper = shallow(<Footer />)

    let expected = 'The Gear Report'
    let actual = wrapper.find('p').text();
   

    expect(actual).toEqual(expected)
  })
  
  it('has two links', () => {
    const wrapper = shallow(<Footer />)

    let expected = 2
    let actual = wrapper.find('.footer-links').length;
   
    expect(actual).toEqual(expected)
  })
 
  it('has three divs', () => {
    const wrapper = shallow(<Footer />)

    let expected = 3
    let actual = wrapper.find('.footer').children().length;
   
    expect(actual).toEqual(expected)
  })

})