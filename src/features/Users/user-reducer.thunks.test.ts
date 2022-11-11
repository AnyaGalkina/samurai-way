import {follow, followSuccess, toggleFollowingProgress} from "./users-reducer";
import {usersAPI} from "./user-api";
import {CommonResType, profileAPI} from "../Profile/profile-api";
import {RESULT_CODE} from "../../common/enums/resultCode";

jest.mock("../../api/user-api");
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;
const response: CommonResType = {
    resultCode: RESULT_CODE.SUCCESS,
    messages: [],
    fieldsErrors: [],
    data: {}
}
userAPIMock.follow.mockReturnValue(Promise.resolve(response))


beforeEach(() => {
    // dispatchMock.mockClear();
    //@ts-ignore
usersAPI.follow.mockClear();
})

test("user should be followed", async () => {
    const thunk = follow(1);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(3);
    // expect(dispatchMock).toHaveBeenNthCalledWith(1,toggleFollowingProgress(true, 1));
    // expect(dispatchMock).toHaveBeenNthCalledWith(2, followSuccess(1));
    // expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgress(false, 1));
})