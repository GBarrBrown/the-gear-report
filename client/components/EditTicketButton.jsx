import React from 'react'
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

export function EditTicketButton() {
  return (
    <div>
      <Fab color="primary" aria-label="Edit" >
        <Icon>edit_icon</Icon>
      </Fab>
    </div>
  )
}


export default EditTicketButton