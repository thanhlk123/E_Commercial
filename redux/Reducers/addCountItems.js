const addCountItems = (state = { number: 1 }, action) => {

    switch(action.type) {
      case 'ADD_SL':
        return { number : state.number + 1 }
  
      case 'SUB_SL':
        return { number : state.number - 1 }
    }
    return state;
  }

  

  export default addCountItems;