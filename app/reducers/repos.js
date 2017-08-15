var initialState = []

var  repos =  (state=initialState, action) => {
    switch(action.type) {
        case 'FETCHED_REPOS':
            state = action.payload.repos;
            return state;
        default:
            return state;
    }
}

export default repos;