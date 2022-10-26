import {instance} from "./auth-api";

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<CaptchaUrlType>("/security/get-captcha-url")
            .then(response => {
                return response.data
            })
    },
}

type CaptchaUrlType = { url: string }