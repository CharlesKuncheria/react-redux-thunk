var initialState = 'Good'

var  api =  (state=initialState, action) => {
    switch(action.type) {
        case 'API_FAILURE':
            console.log(action.payload.error);
            return 'Bad';
        case 'API_SUCCESS':
            return 'Good';
        default:
            return state;
    }
}

export default api;