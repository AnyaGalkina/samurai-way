import dialogsReducer, {ADD_MESSAGE, DialogPageType, UPDATE_NEW_MESSAGE_TEXT} from "./dialogs-reducer";

test("new massage text should be updated", ()=> {

    let state: DialogPageType  = {
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
        newMessageText: "",
    };

    let newState = dialogsReducer(state, {type: UPDATE_NEW_MESSAGE_TEXT, messageText: "new text"});

    expect(newState.newMessageText).toBe("new text");
    expect(newState.messages.length).toBe(4);
})

test("new massage should be added", () => {

    let state: DialogPageType  = {
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
        newMessageText: "new text",
    };

    let newState = dialogsReducer(state, {type: ADD_MESSAGE});

    expect(newState.newMessageText).toBe("");
    expect(newState.messages[4].messageBody).toBe("new text");
    expect(newState.messages.length).toBe(5);
})