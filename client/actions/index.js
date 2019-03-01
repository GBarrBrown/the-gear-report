//actions - index.js

export function addTicket(currentTicket) {
  return {
    type: 'LOAD_CURRENT_TICKET',
    currentTicket
  };
}

export function loadFormDropdownArr(formDropdownArr) {
  console.log('updateformChildArr:', formDropdownArr);
  return {
    type: 'UPDATE_FORM_DROPDOWN',
    formDropdownArr
  }
}