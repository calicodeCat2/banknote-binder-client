export function authHeader() {
    // return aiuth header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if ( user && user.token) {
        return { 'Authorization': 'Bearer' + user.token}
    } else {
        return {}
    }
}

let users = JSON.parse(localStorage.getItem('users')) || [];