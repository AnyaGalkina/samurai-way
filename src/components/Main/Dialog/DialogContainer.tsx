import {connect} from "react-redux";
import Dialog from "./Dialog";
import {AppStateType} from "../../../redux/redux-store";
import {addMessageAC, InitialStateType, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    updateNewMessageText: (newMessage: string) => void;
    addMessage: () => void;
}

export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageText: (newMessage: string) => {
            dispatch(updateNewMessageTextAC(newMessage));
        },
        addMessage: () => {
            dispatch(addMessageAC());
        }
    }
}

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);
