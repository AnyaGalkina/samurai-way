import {InitialStateType} from "../auth-reducer";

let initialState: InitialStateType;
beforeEach(() => {
    initialState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
        isFetching: false,
        captchaUrl: null
    }
})

test("",() => {

})