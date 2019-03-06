import React from 'react'
import {shallow, mount} from 'enzyme'

import {Ticket} from '../../../client/containers/Ticket'
import { Typography } from '@material-ui/core';

describe('<Ticket />', () => {
  it('renders "noMatchingTicket" Typography component when given non-existent id value - 0', () => {
    const match = {params: {ticketId: 0}}
    const wrapper = shallow(<Ticket match={match} getCurrentTicketById={id => null}/>)
    // const wrapper = mount(<Ticket match={match} getCurrentTicketById={id => null}/>)
    // console.log(wrapper.debug())

    let actual = wrapper.find('#noMatchingTicket').length
    let expected = 1

    expect(actual).toEqual(expected)
  })

  it('renders "noMatchingTicket" Typography component when given non-existent id value - asdf', () => {
    const match = {params: {ticketId: 'asdf'}}
    const wrapper = shallow(<Ticket match={match} getCurrentTicketById={id => null}/>)
    // const wrapper = mount(<Ticket match={match} getCurrentTicketById={id => null}/>)
    
    // console.log(wrapper.debug())

    // if the Typography component with id 'noMatchingTicket' is on screen it means that
    // the turnery successfully rendered the correct option. use .length because it tells you 
    // how many of those it found matching the id and returns result in array form. 
    // .length of 1 tells us we found it vs 0 being we found nothing.
    // in this case ive used an id over a classname so it can only be length of 0 or 1
    // if using classname you might want to check for a different expected number.
    let actual = wrapper.find('#noMatchingTicket').length
    let expected = 1

    expect(actual).toEqual(expected)
  })

  it('renders div with classname "ticketFlexContainer" when currentTicket is an object', () => {
    const match = {params: {ticketId: 1}}
    const wrapper = shallow(<Ticket match={match} getCurrentTicketById={id => null} currentTicket={{}}/>)
    // const wrapper = mount(<Ticket match={match} getCurrentTicketById={id => null}/>)
    
    // use console.log(wrapper.debug()) to see the html output wrapper is producing in the test environment
    // console.log(wrapper.debug())
    
    // there should only be one tag with className "ticketFlexContainer" if currentTicket is an obj
    // console.log(wrapper.find('.ticketFlexContainer'))

    let actual = wrapper.find('.ticketFlexContainer').length
    let expected = 1

    expect(actual).toEqual(expected)
  })

  it('renders the correct text for the tickets title', () => {
    const match = {params: {ticketId: 1}}
    const wrapper = shallow(<Ticket match={match} getCurrentTicketById={id => {{}}} currentTicket={{title:'Worn cable at the Arete Route'}}/>)
    
    const target = <Typography>Worn cable at the Arete Route</Typography>

    const expected = true
    const actual = wrapper.containsMatchingElement(target)

    expect(actual).toBe(expected)
  })


})