import request from 'superagent'



export function addTicket(){
  return (dispatch) => {
    request.get('/api/v1/tickets', payload)
    .then(res => {
      // dispatch((res.body))//should dispatch get all tickets
    })
    .catch(err => {
      // dispatch(showError(err.message))
    })
  }
}