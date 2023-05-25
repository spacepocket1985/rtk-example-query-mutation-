import React, { useState } from "react";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { searchStudents } from "../../redux/studentsSlice";
import { useSearchStudentsMutation } from "../../services/students";


const SearchStudent = () => {
    const dispatch = useDispatch();
    // const { value } = useSelector((store) => store.searchText);
    const [text, setText] = useState("");
    // const [searchStudents] = useSearchStudentsMutation();

    const onChange = (e) => {
        setText(e.target.value)
        dispatch(searchStudents(e.target.value))
    }

    return <Input
        value={text}
        placeholder="example: Сергей"
        prefix={<SearchOutlined className="site-form-item-icon" />}
        onChange={(e) => onChange(e)}
    />
}

export default SearchStudent;