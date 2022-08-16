import {connect} from "react-redux";
import Dialog from "./Dialog";
import {AppStateType} from "../../../redux/redux-store";
import {addMessage, InitialStateType, updateNewMessageText} from "../../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";

type MapStateToPropsType = {
    dialogsPage: InitialStateType;
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

export const DialogContainer = compose<ComponentType>(
    connect(mapStateToProps, {addMessage, updateNewMessageText}),
    withAuthRedirect
)(Dialog);