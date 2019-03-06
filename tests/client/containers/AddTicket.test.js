import React from 'react'
import {shallow, mount} from 'enzyme'

import {AddTicket} from '../../../client/containers/AddTicket'

describe('<AddTicket />', () => {

  it('renders with initial state of form object', () => {
    const wrapper = shallow(<AddTicket />)

    let actual = wrapper.state()
    let expected =  {
      title: '',
      description: '',
      severity: '',
      nz: 104,
      island: '',
      firstDropdown: '',
      secondDropdown: '',
      thirdDropdown: '',
      fourthDropdown: '',
      fifthDropdown: '',
      user: 10 
    };

    expect(actual).toEqual(expected)
  })

})