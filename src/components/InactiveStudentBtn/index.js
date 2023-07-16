import React from "react";
import { Button } from 'antd';

import { useDispatch } from "react-redux";
import { inactiveStudents } from "../../redux/studentsSlice";


const InactiveStudentBtn = ({ days }) => {
    const dispatch = useDispatch();

    const onChange = () => {
        dispatch(inactiveStudents(days))
    }

    return <Button type="primary" onClick={onChange}>Не активные({days})</Button>
}

export default InactiveStudentBtn;