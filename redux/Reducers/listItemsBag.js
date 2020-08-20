// State
import dataRaw from '.../Datas/goodsItemData'
let appState = {
    data : []
  }
  
  const taskListItemsBag = (state = appState, action ) => {
    
    let newTaskList = state.data;
  
    switch(action.type) {
      case 'ADDITEMS':
        const newTask  = dataRaw.filter(function(item){
          return item.id == action.idItems;
       }).map(function({id, name, img, price}){
           return {id, name, img, price};
       });
        return { ...state, data: [...newTaskList, newTask]}
  
      case 'DELETEITEMS':
       const newTaskDE = newTaskList.filter(function(item){
        return item != action.idItems;
       });
        return { ...state, data: newTaskDE };
    }
    return state;
  }
  
  export default taskListItemsBag;