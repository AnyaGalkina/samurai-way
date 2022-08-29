import {connect} from "react-redux";
import Dialog from "./Dialog";
import {AppStateType} from "../../../redux/redux-store";
import {addMessage, InitialStateType} from "../../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";

type MapStateToPropsType = {
    dialogsPage: InitialStateType;
}

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string ) => void;
}

export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage,
    }
}

export const DialogContainer = compose<ComponentType>(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialog);