// Action
const addItemsBag = (idItems) => {
    return {
      type: 'ADDITEMS',
      idItems: idItems
        }
  }
export const deleteItemsBag = (idItems) => {
    return {
      type: 'DELETEITEMS',
      idItems: idItems
        }
  }

  export default addItemsBag;