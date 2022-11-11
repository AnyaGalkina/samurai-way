import {connect} from "react-redux";
import Dialog from "./Dialog";
import {AppStateType} from "../../app/redux-store";
import {addMessage, InitialStateType} from "./dialogs-reducer";
import {withAuthRedirect} from "../../components/hoc/withAuthRedirect";
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

const DialogContainer = compose<ComponentType>(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialog);

export default DialogContainer;