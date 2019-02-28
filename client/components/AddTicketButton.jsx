import React, {Fragment} from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export function AddTicketButton() {
  return (
    <Fragment>
      <Fab color="secondary" aria-label="Add" className=''>
        <AddIcon />
      </Fab>
    </Fragment>
  )
}


export default AddTicketButton