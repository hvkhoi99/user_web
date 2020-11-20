var userData = localStorage.getItem("userLogin");
var user = JSON.parse(userData);
var InitialState = user;

const userCurrent = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_USER_CURRENT':
            state = action.user
            return state
        default:
            return state
    }
}

export default userCurrent;