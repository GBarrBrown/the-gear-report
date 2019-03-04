import React from 'react'

function Globe (props) {



  console.log('props', props)
  var item = props.props.loadLocationById[0]
  var parent = props.props.loadParentByCurrent[0]
  return (
    <React.Fragment>
      {props && 
      <React.Fragment>
        <br/>
        <h1>{item.name}</h1>
        <br/>
        <h3>{parent.type}: {parent.name}</h3>
        <h3>Type: {item.type}</h3> 
        <br/>
        {item.description &&
        <h3>Description</h3>}
        <p>{item.description}</p>
        
        {item.approach &&
        <React.Fragment>
        <br />
        <h3>Approach</h3>
        </React.Fragment>}
        <p>{item.approach}</p>
        {/* Wall Specific */}
          
        {/* Route Specific   */}
        <br/>
        {item.quality &&
        <h3>Stars: {item.quality}</h3>}
        {item.grade &&
        <h3>Grade: {item.grade}</h3>}

      </React.Fragment>
      }
    </React.Fragment>

    
  )
    
}

export default Globe