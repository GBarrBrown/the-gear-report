
export const islandRanges = [
  {
    value: '1',
    name: 'North Island'
  },
  {
    value: '2',
    name: 'South Island'
  }
];

export const severityRanges = [
  {
    value: '1',
    name: 'Noticable risk'
  },
  {
    value: '2',
    name: 'Potential risk'
  },
  {
    value: '3',
    name: 'Medium risk'
  },
  {
    value: '4',
    name: 'High risk'
  },
  {
    value: '5',
    name: 'Extreme risk'
  },
];



//TODO put this in the api folder when George merges

// export function addTicket(){
//   return (dispatch) => {
//     request.get('/api/v1/tickets', payload)
//     .then(res => {
//       // dispatch((res.body))//should dispatch get all tickets
//     })
//     .catch(err => {
//       // dispatch(showError(err.message))
//     })
//   }
// }