const messages = (state = [], action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return [
          ...state,
          {
            name: action.payload.name,
            message: action.payload.message,
          }
        ]
    
      default:
        return state
    }
  }
  
  export default messages