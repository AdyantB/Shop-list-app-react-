const initialData = {
    list: []
}

const addShopReducer = (state=initialData, action) => {
    switch (action.type) {
        case "ADD_SHOP":

        const { id, data } = action.payload;

    return {
        ...state,
        list: [
            ...state.list,
            {
                id:id,
                data:data
            }
        ]
    }

    case "DELETE_SHOP":
        const newList = state.list.filter((elem) => elem.id !== action.id)
    
        return {
            ...state,
            list: newList
        }

    default: return state; 

    }
}  

export default addShopReducer;