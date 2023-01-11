import decode from 'jwt-decode';

class AuthService {

    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {}
}