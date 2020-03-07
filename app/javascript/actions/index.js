function fetchUserPending() {
    return {
        type: 'FETCH_USER_PENDING'
    }
}

function fetchUserSuccess(user) {
    return {
        type: 'FETCH_USER_SUCCESS'
        user: user
    }
}

function fetchUserError(error) {
    return {
        type: 'FETCH_USER_ERROR'
        error: error
    }
}