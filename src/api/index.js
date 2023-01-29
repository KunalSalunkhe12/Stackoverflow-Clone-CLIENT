import axios from 'axios'

const API = axios.create({baseURL: "https://stackoverflow-clone-server.onrender.com"})
API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post("user/login" , authData)
export const signUp = (authData) => API.post("user/signup" , authData)

export const askQuestion  = (questionData) => API.post("question/ask", questionData)
export const getAllQuestions = () => API.get("/question/get")
export const deleteQuestion = (id) => API.delete(`/question/delete/${id}`)
export const voteQuestion = (id, value, userId) => API.patch(`/question/vote/${id}`, {value, userId})

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId })
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, {answerId, noOfAnswers})

export const getAllUsers = () => API.get('/user/get-all-users')
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)

