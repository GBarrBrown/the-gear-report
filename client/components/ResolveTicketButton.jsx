import React from 'react'
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  }
})

export function ResolveTicketButton() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Fab color='primary' aria-label="Resolve" >
          <img classname='layer-top' src="/images/icons8-checkmark-filled-24.png" alt=""/>
        </Fab>
      </MuiThemeProvider>
    </div>
  )
}


export default ResolveTicketButton