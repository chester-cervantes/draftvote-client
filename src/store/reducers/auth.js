import { SET_CURRENT_USER } from "../actionType";

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                // ! negates it, 2nd ! returns the true value of true, Object
                // check user exists, 0 returns false, 1 returns true
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            };
        default:
            return state;
    }
}