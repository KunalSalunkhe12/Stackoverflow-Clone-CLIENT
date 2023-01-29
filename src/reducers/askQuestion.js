const askQuestionReducer = (state = {data: null}, action) =>{
    switch (action.type) {
        case "ASK_QUESTION":
            return {...state}
        case "GET_ALL_QUESTIONS":
            return {...state, data: action.payload}
        case "POST_ANSWER":
            return {...state}
        default:
            return state
    }
}

export default askQuestionReducer