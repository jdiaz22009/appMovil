import { SET_AUTH_USER, LOGOUT_USER } from '../actionTypes'

export const setAuthUser = (user) => async dispatch => {
  dispatch({
    type: SET_AUTH_USER,
    payload: user
  })
}

export const clearAuthUser = () => async dispatch => {
  dispatch({
    type: LOGOUT_USER    
  })
}


