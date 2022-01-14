const filterReducer = ( state='', action) => {
    console.log(action.type, action.data)
    switch(action.type) {
      case 'SET_FILTER':
        return action.data
      case 'CLEAN_FILTER':
        return ''
      default: 
        return ''
      }
    }
  
  export const setFilter = (f) => {
    return {
      type: 'SET_FILTER',
      data: f
    }
  }
  
  export const cleanFilter = () => {
    return {
      type: 'CLEAN_FILTER',
    }
  }
  
  export default filterReducer