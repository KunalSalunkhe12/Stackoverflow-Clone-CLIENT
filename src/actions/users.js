import * as api from '../api'

export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getAllUsers()
        dispatch({ type: 'GET_USERS', payload: data})
        console.log(data)
    } catch (error) {
        console.log(error, "getAllUsers")
    }
}

export const updateProfile = (id, updateData) => async (dispatch) => {
    try{
        const { data } = await api.updateProfile(id, updateData)
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: data })
        console.log(data)
    }catch(error){
        console.log(error, "updateProfile")
    }
}