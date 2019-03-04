//actions - index.js

export function addTicket(currentTicket) {
  return {
    type: 'LOAD_CURRENT_TICKET',
    currentTicket
  };
}

export const showError = (errorMessage) => {
  return {
    type: 'SHOW_ERROR',
    errorMessage: errorMessage
  }
}