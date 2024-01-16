
var initialState={
    mycart:{}
};

export default function RootReducer(State=initialState,action)
{ console.log('rootreducer check',State=initialState,action);
      switch(action.type)
      {
        case "ADD_PRODUCT":
        State.mycart[action.payload[0]]=action.payload[1]
        console.log("STATE:",State.mycart);
        return{mycart:State.mycart}
        
        case "EDIT_PRODUCT":
        State.mycart[action.payload[0]]=action.payload[1]
        console.log("STATE:",State.mycart);
        return{mycart:State.mycart}

        case "REMOVE_PRODUCT":
        delete State.mycart[action.payload[0]]
        console.log("STATE:",State.mycart);
        return{mycart:State.mycart}
        
        default:
        return{mycart:State.mycart}
      }
}
