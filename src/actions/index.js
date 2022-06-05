export const addShop = (data) => {
    return {
        type:"ADD_SHOP",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteShop = (id) => {
    return {
        type:"DELETE_SHOP",
        id
    }
}