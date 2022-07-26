import profileReducer, {ADD_POST, InitialStateType, setUserProfile, UPDATE_NEW_POST_TEXT} from "./profile-reducer";
import {ProfileType} from "./types";

let state: InitialStateType;

test("new post text should be updated", () => {

    state = {
        profile: null,
        posts: [
            {id: 1, likesCounter: 120, postText: "Hello! Happy to see you!"},
            {id: 2, likesCounter: 70, postText: "Good luck!"},
        ],
        newPostText: "",
    }

    let newState = profileReducer(state, {type: UPDATE_NEW_POST_TEXT, postText: "new text"});

    expect(newState.newPostText).toBe("new text");
    expect(newState.posts.length).toBe(2);
})

test("post should be added", () => {

    state = {
        profile: null,
        posts: [
            {id: 1, likesCounter: 120, postText: "Hello! Happy to see you!"},
            {id: 2, likesCounter: 70, postText: "Good luck!"},
        ],
        newPostText: "new text",
    }

    let newState = profileReducer(state, {type: ADD_POST});

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].postText).toBe("new text");
    expect(newState.newPostText).toBe("");
})

test("profile should be set", () => {

    state = {
        profile: null,
        posts: [
            {id: 1, likesCounter: 120, postText: "Hello! Happy to see you!"},
            {id: 2, likesCounter: 70, postText: "Good luck!"},
        ],
        newPostText: "",
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

    expect(newState.profile?.aboutMe).toBe( "I'm a cool guy");
    expect(newState.profile?.contacts.vk).toBe("https://vk.com");
    expect(newState.profile?.contacts.twitter).toBe(null);
    expect(newState.profile?.userId).toBe(25);
    expect(newState.profile?.fullName).toBe("holenvik");
    expect(newState.profile?.lookingForAJob).toBeTruthy();
    expect(newState.profile?.lookingForAJobDescription).toBe("I'm looking for a job. I can write code very good.");
    expect(newState.profile?.photos.large).toBe(null);
    expect(newState.profile?.photos.small).toBe("https://social-network.samuraijs.com/");
})
