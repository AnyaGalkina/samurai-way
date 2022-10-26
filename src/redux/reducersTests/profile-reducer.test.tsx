import profileReducer, {
    ADD_POST,
    changeLikesCounter,
    InitialStateType,
    setUserProfile,
    setUserStatus
} from "../profile-reducer";
import {ProfileType} from "../types";

let state: InitialStateType;

test("status should be updated", () => {
    state = {
        profile: null,
        posts: [
            {id: "1", likesCounter: 120, postText: "Hello! Happy to see you!", isLikeAdded: false},
            {id: "2", likesCounter: 70, postText: "Good luck!", isLikeAdded: false},
        ],
        userStatus: "123"
    }

    const newState = profileReducer(state, setUserStatus("new status"))

    expect(newState.userStatus).toBe("new status")
})

test("post should be added", () => {

    state = {
        profile: null,
        posts: [
            {id: "1", likesCounter: 120, postText: "Hello! Happy to see you!", isLikeAdded: false},
            {id: "2", likesCounter: 70, postText: "Good luck!", isLikeAdded: false},
        ],
        userStatus: ""
    }

    let newState = profileReducer(state, {type: ADD_POST, payload: {postText: "new text"}});

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].postText).toBe("new text");
})

test("profile should be set", () => {

    state = {
        profile: null,
        posts: [
            {id: "1", likesCounter: 120, postText: "Hello! Happy to see you!", isLikeAdded: false},
            {id: "2", likesCounter: 70, postText: "Good luck!", isLikeAdded: false},
        ],
        userStatus: ""
    }

    let newUserProfile: ProfileType = {
        aboutMe: "I'm a cool guy",
        contacts: {
            facebook: null,
            website: null,
            vk: "https://vk.com",
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: "I'm looking for a job. I can write code very good.",
        fullName: "holenvik",
        userId: 25,
        photos: {
            small: "https://social-network.samuraijs.com/",
            large: null,
        },

    };

    let newState = profileReducer(state, setUserProfile(newUserProfile));

    expect(newState.profile?.aboutMe).toBe("I'm a cool guy");
    expect(newState.profile?.contacts.vk).toBe("https://vk.com");
    expect(newState.profile?.contacts.twitter).toBe(null);
    expect(newState.profile?.userId).toBe(25);
    expect(newState.profile?.fullName).toBe("holenvik");
    expect(newState.profile?.lookingForAJob).toBeTruthy();
    expect(newState.profile?.lookingForAJobDescription).toBe("I'm looking for a job. I can write code very good.");
    expect(newState.profile?.photos.large).toBe(null);
    expect(newState.profile?.photos.small).toBe("https://social-network.samuraijs.com/");
})

test("is likesCounter increased", () => {

    state = {
        profile: null,
        posts: [
            {id: "1", likesCounter: 120, postText: "Hello! Happy to see you!", isLikeAdded: false},
        ],
        userStatus: ""
    }

    let newState = profileReducer(state, changeLikesCounter("1", true));

    expect(newState.posts[0].likesCounter).toBe(121);
    expect(newState.posts[0].isLikeAdded).toBe(true);
})
