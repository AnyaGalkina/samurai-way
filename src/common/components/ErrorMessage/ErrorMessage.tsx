import React from 'react';
import {clearGlobalError} from '../../../app/app-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../app/redux-store';
import styles from './ErrorMessage.module.css';
import {Button} from 'antd';

export const ErrorMessage = () => {
    const dispatch = useDispatch();
    const globalError = useSelector<AppStateType, string>(state => state.app.globalError);

    return (
        <div className={styles.errorBlock}>
            <div>
                <span>{globalError}</span>
            </div>
            <Button danger
                    className={styles.button}
                    onClick={() => {
                        dispatch(clearGlobalError());
                    }}>X
            </Button>
        </div>
    );
};
