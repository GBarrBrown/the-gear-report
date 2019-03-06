import React from 'react'
import {shallow, mount} from 'enzyme'
import Typography from '@material-ui/core/Typography';

import {Info} from '../../../client/containers/Info'

describe('<Info />', () => {
  it('displays type', () => {
    // arrange

    var props = {loadLocationById: [{name: 'Michael'}], loadParentByCurrent: [{type: 'annoyed', name: 'Sigh'}]}

    const wrapper = shallow(<Info props={props}/>)
    const target = <Typography><h3>Type: </h3></Typography>
    //act
    let actual = (wrapper.containsMatchingElement(target))
    let expected = true

    //assert
    expect(actual).toBe(expected)
  })

  it('always displays type even if not passed any props', () => {
    // arrange

    var props = {loadLocationById: [{name: 'Michael'}], loadParentByCurrent: [{name: 'Sigh'}]}

    const wrapper = shallow(<Info props={props}/>)
    const target = <Typography><h3>Type: </h3></Typography>
    //act
    let actual = (wrapper.containsMatchingElement(target))
    let expected = true

    //assert
    expect(actual).toBe(expected)
  })

  it('displays description if passed value', () => {
    // arrange

    var props = {loadLocationById: [{name: 'Michael', description: 'displayed!'}], loadParentByCurrent: [{type: 'annoyed', name: 'Sigh'}]}

    const wrapper = shallow(<Info props={props}/>)
    const target = <Typography><h3>Description</h3></Typography>
    //act
    let actual = (wrapper.containsMatchingElement(target))
    let expected = true

    //assert
    expect(actual).toBe(expected)
  })

  it('removes description header if not passed value', () => {
    // arrange

    var props = {loadLocationById: [{name: 'Michael'}], loadParentByCurrent: [{type: 'annoyed', name: 'Sigh'}]}

    const wrapper = shallow(<Info props={props}/>)
    const target = <Typography><h3>Description</h3></Typography>
    //act
    let actual = (wrapper.containsMatchingElement(target))
    let expected = false

    //assert
    expect(actual).toBe(expected)
  })

it('displays parent type and name if passed value', () => {
  // arrange

  var props = {loadLocationById: [{name: 'Michael', description: 'displayed!'}], loadParentByCurrent: [{type: 'annoyed', name: 'Sigh'}]}

  const wrapper = shallow(<Info props={props}/>)
  const target = <Typography><h3>annoyed: Sigh</h3></Typography>
  //act
  let actual = (wrapper.containsMatchingElement(target))
  let expected = true

  //assert
  expect(actual).toBe(expected)
  })

  it('removes parent type and name if not passed value', () => {
    // arrange
  
    var props = {loadLocationById: [{name: 'Michael', description: 'displayed!'}], loadParentByCurrent: [{name: 'Sigh'}]}
  
    const wrapper = shallow(<Info props={props}/>)
    const target = <Typography><h3>annoyed: Sigh</h3></Typography>
    //act
    let actual = (wrapper.containsMatchingElement(target))
    let expected = false
  
    //assert
    expect(actual).toBe(expected)
    })

  it('displays parent type and name if passed value', () => {
    // arrange
  
    var props = {loadLocationById: [{name: 'Michael', description: 'displayed!', approach: 'walk'}], loadParentByCurrent: [{type: 'annoyed', name: 'Sigh'}]}
  
    const wrapper = shallow(<Info props={props}/>)
    const target = <p>walk</p>
    //act
    let actual = (wrapper.containsMatchingElement(target))
    let expected = true
  
    //assert
    expect(actual).toBe(expected)
    })

    it('does display style info when type is true', () => {
      // arrange
    
      var props = {loadLocationById: [{type: 'route', style: 'sport', name: 'Michael', description: 'displayed!', approach: 'walk'}], loadParentByCurrent: [{type: 'annoyed', name: 'Sigh'}]}
    
      const wrapper = shallow(<Info props={props}/>)
      const target = <Typography><h3>Style: sport</h3></Typography>
      //act
      let actual = (wrapper.containsMatchingElement(target))
      let expected = true
    
      //assert
      expect(actual).toBe(expected)
      })

      it('does not display style info when type is false', () => {
        // arrange
      
        var props = {loadLocationById: [{name: 'Michael', description: 'displayed!', approach: 'walk'}], loadParentByCurrent: [{type: 'annoyed', name: 'Sigh'}]}
      
        const wrapper = shallow(<Info props={props}/>)
        const target = <Typography><h3>Style: sport</h3></Typography>
        //act
        let actual = (wrapper.containsMatchingElement(target))
        let expected = false
      
        //assert
        expect(actual).toBe(expected)
        })

      it('does not display route info when type is false', () => {
        // arrange
      
        var props = {loadLocationById: [{name: 'Michael', description: 'displayed!', approach: 'walk'}], loadParentByCurrent: [{type: 'annoyed', name: 'Sigh'}]}
      
        const wrapper = shallow(<Info props={props}/>)
        const target = <Typography><h3>Style: sport</h3></Typography>
        //act
        let actual = (wrapper.containsMatchingElement(target))
        let expected = false
      
        //assert
        expect(actual).toBe(expected)
        })

          

})