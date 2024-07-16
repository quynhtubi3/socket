import { DataService } from "../dataServices/DataServices";

export const AuthApi = {
    signIn: (parameter) => {
        const url = `Users/SignIn?parameter=${parameter}`;
        return DataService.post(url);
    },
    signUp: (parameter) => {
        const url = `Users/SignUp?parameter=${parameter}`;
        return DataService.post(url);
    },
    getToken: (parameter) => {
        const url = `Users?parameter=${parameter}`;
        return DataService.post(url);
    },
}