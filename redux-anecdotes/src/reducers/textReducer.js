const textReducer = ( state='', action) => {
  switch(action.type) {
    case 'SET_NOTE':
      return action.data
    case 'SHUT_NOTE':
      return ''
    default: 
      return ''
    }
  }

export const setNote = (note) => {
  return {
    type: 'SET_NOTE',
    data: note    
  }
}

export const shutNote = () => {
  return {
    type: 'SHUT_NOTE',
  }
}

export default textReducer