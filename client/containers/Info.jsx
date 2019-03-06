import React from 'react'
import Typography from '@material-ui/core/Typography';

export function Info (props) {
  var item = props.props.loadLocationById[0]
  var parent = props.props.loadParentByCurrent[0]

  var string = item.type
  var capitalised = '' 
  item.type ? capitalised = string.charAt(0).toUpperCase() + string.substr(1) : ''
  
  
  
  return (
    <div className='info-container'>
      {props &&
      <div className='info'>
        <br/>
        <br/>
        <Typography>
        <h1>{item.name}</h1>
        </Typography>
        <br/>
        <br/>
        <Typography>
        <h3>{parent.type}: {parent.name}</h3>
        </Typography>
        <Typography>
        <h3>Type: {capitalised}</h3> 
        </Typography>
        <br/>
        {item.description &&
        <Typography>
        <h3>Description</h3>
        </Typography>}
        <Typography>
        <p className='justify-text'>{item.description}</p>
        </Typography>
        
        {item.approach &&
        <React.Fragment>
        <br />
        <Typography>
        <h3>Approach</h3>
        </Typography>
        </React.Fragment>}
        <p>{item.approach}</p>
        {/* Wall Specific */}


          
        {/* Route Specific   */}
        <br/>
        {item.quality &&
        <Typography>
        <h3>Stars: {item.quality}</h3>
        </Typography>}
        {item.grade &&
        <Typography>
        <h3>Grade: {item.grade}</h3>
        </Typography>}
        {item.height &&
        <Typography>
          <h3>Height: {item.height}</h3>
        </Typography>}
        <br/>
        {item.style &&
        <Typography>
          <h3>Style: {item.style}</h3>
        </Typography>}
        {item.quickdraws &&
        <Typography>
          <h3>Bolts: {item.quickdraws}</h3>
        </Typography>}


      </div>
      }
    </div>

    
  )
    
}

export default Info