const login = localStorage.getItem("isUserLoggedIn");

const InitialState = login
const checkLogin = (state = InitialState, action) => {
    switch (action.type) {
        case 'TRUE_LOGIN':
            state = true;
            return state
        case 'FALSE_LOGIN':
            state = null;
            return state;
        default:
            return state
    }
}

export default checkLogin;