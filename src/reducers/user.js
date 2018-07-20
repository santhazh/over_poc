export default function(state={}, action){
    let stateObj ={};
    //console.log('staeee??????????', state);
    //console.log('action??????????', action);
    switch(action.type){
        case 'ADD_USER_TYPE':
        stateObj = Object.assign({}, state);
        stateObj.data = action.payload;
        stateObj.registerSuccess = true;
        return {
            ...stateObj,
        };
        case 'ADD_USER_TYPE_ERROR':
        stateObj = Object.assign({}, state);
        stateObj.data = action.payload;
        stateObj.registerSuccess = false;
        return {
            ...stateObj,
        };
        break;
        case 'LOGIN_USER_TYPE':
        stateObj = Object.assign({}, state);
        stateObj.loginUser = action.payload;
        //console.log('LOGIN_USER_TYPE', stateObj);
        return {
          ...stateObj  
        };
        break;
        case 'LOGIN_ERROR_TYPE':
        stateObj = Object.assign({}, state);
        stateObj.loginError = action.payload;
        //console.log('LOGIN_ERROR_TYPE', stateObj);
        return {
          ...stateObj  
        };
        break;
        default: return state;
    }
}