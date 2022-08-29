import dialogsReducer, {ADD_MESSAGE, InitialStateType, UPDATE_NEW_MESSAGE_TEXT} from "../dialogs-reducer";

let state: InitialStateType;


test("new massage should be added", () => {

    state = {
        messages: [
            {id: 1, messageBody: "Hi! Have a good day!"},
            {id: 2, messageBody: "Good luck!"},
            {id: 3, messageBody: "Good luck!"},
            {id: 4, messageBody: "Be happy!"}
        ],
        dialogItems: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Lena"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Olga"},
        ],
    };

    let newState = dialogsReducer(state, {type: ADD_MESSAGE, payload: { messageBody :"new text"}});

    expect(newState.messages[4].messageBody).toBe("new text");
    expect(newState.messages.length).toBe(5);
})