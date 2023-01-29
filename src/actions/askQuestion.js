import * as api from "../api/index"

export const getAllQuestions = () => async (dispatch) =>{
    try {
        const {data} = await api.getAllQuestions()
        dispatch({type: "GET_ALL_QUESTIONS", payload: data})
    } catch (error) {
        console.log(error, 'getAllQuestion')
    }
}

export const askQuestion = (questionData, navigate) => async (dispatch) =>{
    try {
        const { data } = await api.askQuestion(questionData)
        dispatch({type: 'ASK_QUESTION', payload: data})
        dispatch(getAllQuestions())
        navigate('/')
        
    } catch (error) {
        console.log(error, 'askQuestion')
    }
}

export const voteQuestion = (id, value, userId) => async (dispatch) =>{
    try {
        const {data} = await api.voteQuestion(id, value, userId)
        dispatch(getAllQuestions())
        console.log(data)
    } catch (error) {
        console.log(error, 'voteQuestion')
    }
}

export const deleteQuestion = (id, navigate) => async (dispatch) =>{
    try {
        const {data} = await api.deleteQuestion(id)
        dispatch(getAllQuestions())
        navigate('/')
        console.log(data)
    } catch (error) {
        console.log(error, "deleteQuestion")
    }
}

export const postAnswer = (answerData) => async (dispatch)=>{
    // console.log(id, answerData)
    try {
        const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
        const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered, userId )
        dispatch({type: 'POST_ANSWER', payload: data})
        dispatch(getAllQuestions())
    } catch (error) {
        console.log(error, 'postAnswer')
    }
    
}


export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch)=>{
    try {
        const {data} = await api.deleteAnswer(id, answerId, noOfAnswers)
        dispatch(getAllQuestions())
        console.log(data)
    } catch (error) {
        console.log(error, "deleteAnswer")
    }
}