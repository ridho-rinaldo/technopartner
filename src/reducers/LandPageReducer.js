export default LandPageReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                setData : action.setData
            }
        default:
            return state
    }
}