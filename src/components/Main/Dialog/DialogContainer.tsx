import {connect} from "react-redux";
import Dialog from "./Dialog";
import {AppStateType} from "../../../redux/redux-store";
import {addMessage, InitialStateType, updateNewMessageText} from "../../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: InitialStateType;
    // isAuth: boolean
}

type MapDispatchToPropsType = {
    updateNewMessageText: (newMessage: string) => void;
    addMessage: () => void;
}

export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage,
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialog);

export const DialogContainer = connect(mapStateToProps,
    {addMessage, updateNewMessageText})(AuthRedirectComponent);
