import profileReducer, {ADD_POST, InitialStateType, UPDATE_NEW_POST_TEXT} from "./profile-reducer";

let state: InitialStateType;

test("new post text should be updated", () => {

    state = {
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
