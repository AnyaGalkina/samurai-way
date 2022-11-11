import React from 'react';
import {useFormik} from 'formik';
import {Input, Select} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import styles from './Search.module.css';
import {FiltersType} from '../users-reducer';

type PropsType = {
    onFiltersChanged: (filters: FiltersType) => void;
}

export const Search = ({onFiltersChanged}: PropsType) => {
    const formik = useFormik({
        initialValues: {
            term: '',
            friend: "null" as any
        },
        // validate:,
        onSubmit: values => {
            const newValues = {...values};

            newValues.friend === 'null' ? newValues.friend = null
                : newValues.friend === 'true' ? newValues.friend = true
                : newValues.friend = false;
            onFiltersChanged(newValues);
        }
    });
    return (
        <div className={styles.search}>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    style={{width: '260px'}}
                    onChange={formik.handleChange}
                    value={formik.values.term}
                    name={'term'} placeholder={'Find user'}
                />
                <Select
                    // placeholder={"All"}
                    onChange={(value) => formik.setFieldValue('friend', value)}
                    value={formik.values.friend}
                    defaultValue="All"
                    style={{width: 120}}

                    options={[
                        {value: 'null', label: 'All'},
                        {value: 'true', label: 'Only followed'},
                        {value: 'false', label: 'Only unfollowed',}]}
                />
                <button type={'submit'}><SearchOutlined/></button>
            </form>
        </div>
    );
};
