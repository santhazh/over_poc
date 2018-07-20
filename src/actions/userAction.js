
export const addUser = values => ({
    type:'ADD_USER_TYPE',
    payload: values,
});
export const addUserError = values => ({
    type:'ADD_USER_TYPE_ERROR',
    payload: values,
})
export const loginUser = value => ({
    type: 'LOGIN_USER_TYPE',
    payload: value,
});

export const loginError = value => ({
    type: 'LOGIN_ERROR_TYPE',
    payload: value,
});

export default {
    addUser,
    addUserError,
    loginUser,
    loginError,
};

