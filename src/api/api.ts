import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0",
        headers: {"API-KEY": "8cb31c3e-5e62-4d4f-945f-025b0014bebf"}
    }
)

export const authAPI = {
    getMe() {
        return instance.get("/auth/me").then(response => {
            return response.data
        })
    }
};

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`).then(response => {
            return response.data
        })
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`).then(response => {
            return response.data
        })
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`).then(response => {
            return response.data
        })
    },

    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`).then(response => {
            return response.data
        })
    },

    updateStatus(status: string) {
        return instance.put("/profile/status", {status}).then(response => {
            return response.data
        })
    }
}


