// import Axios from "axios";
import showAlert from "../reducers/showAlert";
import callApi from "../utils/apiCaller";

export const actEditUserRequest = (user) => {
    return dispatch => {
        return callApi(`user/${user.id}`, 'PUT', user).then(res => {
            // dispatch(actEditUser(user));
        }).catch(error => {
            showAlert(error, 'danger');
        });
    };
}

export const actGetUserRequest = (id) => {
    return dispatch => {
        return callApi(`user/${id}`, 'GET', null).then(res => {
            dispatch(actGetUser(res.data));
        }).catch(error => {
            console.log(error)
        });
    };
}

export const actGetUser = (user) => {
    return {
        type: 'GET_USER_CURRENT',
        user
    }
}


