import usersReducer, {
    follow,
    InitialStateType,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount, setUsers,
    unfollow
} from "./users-reducer";

let initialState: InitialStateType;

beforeEach(() => {
    initialState = {
        users: [
            {
                id: 11,
                name: "First User",
                uniqueUrlName: "",
                status: "",
                followed: true,
                photos: {
                    small: null,
                    large: null,
                },
            },
            {
                id: 22,
                name: "Second User",
                uniqueUrlName: "",
                status: "",
                followed: false,
                photos: {
                    small: null,
                    large: null,
                },
            },
            {
                id: 33,
                name: "Third User",
                uniqueUrlName: "",
                status: "",
                followed: false,
                photos: {
                    small: null,
                    large: null,
                },
            },
        ],
        pageSize: 10,
        totalUsersCount: 100,
        currentPage: 1,
        isFetching: false
    }
});

test("exact user should be folloed", () => {

    let newState = usersReducer(initialState, follow(22));

    expect(newState.users[1].followed).toBeTruthy();
    expect(newState.users[2].followed).toBeFalsy();
});

test("exact user should be unfolloed", () => {

    let newState = usersReducer(initialState, unfollow(11));

    expect(newState.users[0].followed).toBeFalsy();
});

test("users should be updated ", () => {

    let newUsers = [
        {
            id: 1,
            name: "New User",
            uniqueUrlName: null,
            status: "111",
            followed: false,
            photos: {
                small: "",
                large: "",
            },
        },]

    let newState = usersReducer(initialState, setUsers(newUsers));

    expect(newState.users.length).toBe(1);
    expect(newState.users[0].id).toBe(1);
    expect(newState.users[0].name).toBe("New User");
    expect(newState.users[0].followed).toBeFalsy();
})

test("total users count should be updated", () => {

    let newState = usersReducer(initialState, setTotalUsersCount(2200));

    expect(newState.totalUsersCount).toBe(2200);
});

test("current page should be updated", () => {

    let newState = usersReducer(initialState, setCurrentPage(2));

    expect(newState.currentPage).toBe(2);
})
test("toggleIsFetching should be true", () => {

    let newState = usersReducer(initialState,  setToggleIsFetching(true));

    expect(newState.isFetching).toBeTruthy();
})

