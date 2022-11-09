import {getUserProfile, getUserStatus, setUserProfile, setUserStatus, updateUserStatus} from "../profile-reducer";
import {CommonResType, profileAPI, ResGetProfileType} from "../../api/profile-api";
import {setAppStatus} from "../app-reducer";
import {RESULT_CODE} from "../../enums/resultCode";

jest.mock("../../api/profile-api");
const profileAPIMock = profileAPI as jest.Mocked<typeof profileAPI>

const dispatchMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    //@ts-ignore
    profileAPI.getProfile.mockClear();
    //@ts-ignore
    profileAPI.getStatus.mockClear();
    //@ts-ignore
    profileAPI.updateStatus.mockClear();
})

const resultGetUsers: ResGetProfileType = {
    aboutMe: "the best of the best",
    contacts: {
        github: null,
        vk: null,
        facebook: null,
        instagram: null,
        twitter: null,
        website: null,
        youtube: null,
        mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: "react native dev with 5 years experience",
    fullName: "Joe Doe",
    userId: 1,
    photos: {
        small: null,
        large: null,
    }
}

const response: CommonResType = {
    resultCode: RESULT_CODE.SUCCESS,
    messages: [],
    fieldsErrors: [],
    data: {}
}

const status = "status";

profileAPIMock.getProfile.mockReturnValue(Promise.resolve(resultGetUsers));
profileAPIMock.getStatus.mockReturnValue(Promise.resolve(status));
profileAPIMock.updateStatus.mockReturnValue(Promise.resolve(response));

test("profile should be gotten", async () => {

    const thunk = getUserProfile(1);

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setAppStatus("loading"));
    // expect(dispatchMock).toHaveBeenNthCalledWith(2, setUserProfile(resultGetUsers));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, setAppStatus("idle"));
})

test("status should be gotten", async () => {
    const thunk = getUserStatus(1);
    await thunk(dispatchMock);


    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setAppStatus("loading"));
    // expect(dispatchMock).toHaveBeenNthCalledWith(2, setUserStatus('status'));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, setAppStatus("idle"));
})

test("status should be updated", async () => {
    const thunk = updateUserStatus("abc");
    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setAppStatus("loading"));
    // expect(dispatchMock).toHaveBeenNthCalledWith(2, setUserStatus("abc"));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, setAppStatus("idle"));
})