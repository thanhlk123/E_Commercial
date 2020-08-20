// Actions

const addSL = (addVal) => {
    return {
      type: 'ADD_SL',
      value: addVal
    }
  }
  
  export const subSL = (subVal) => {
    return {
      type: 'SUB_SL',
      value: subVal
    }
  }

  
  export default addSL;