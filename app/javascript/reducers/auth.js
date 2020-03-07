const authReducer = (state = {}, {type, payload}) =>{
  switch(type) {
        case 'FETCH_TOKEN_PENDING':
            return {
                ...state,
                pending: true
            }
        case 'FETCH_TOKEN_SUCCESS':
            return {
                ...state,
                pending: false,
                token: payload
            }
        case 'FETCH_TOKEN_ERROR':
            return {
                ...state,
                pending: false,
                error: error
            }
        default:
            return state;
    }
}
export default authReducer;