import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton, Tabs } from 'antd';
import TableStudents from '../TableStudents';
// import { useGetStudentsQuery } from "../../services/students";
import { filterStudents } from "../../helpers/filterStudents";
import { fetchUserById } from '../../redux/studentsSlice'

const items = (data) => {
    const { javaScript, backEnd, checkListJavaScript, frontEnd, fullStack } = filterStudents(data);
    return [
        {
            key: '1',
            label: `JavaScript (${javaScript.length})`,
            children: <TableStudents data={javaScript} />
        },
        {
            key: '2',
            label: `Front-end (${frontEnd.length})`,
            children: <TableStudents data={frontEnd} />
        },
        {
            key: '3',
            label: `Back-end (${backEnd.length})`,
            children: <TableStudents data={backEnd} />,
        },
        {
            key: '4',
            label: `Чек-лист (${checkListJavaScript.length})`,
            children: <TableStudents data={checkListJavaScript} />,
        },
        {
            key: '5',
            label: `Full stack (${fullStack.length})`,
            children: <TableStudents data={fullStack} />,
        },
    ];
}




const Students = () => {
    const dispatch = useDispatch()
    const { loadingStatus, error, searcherData } = useSelector((store) => store.studentsSlice);

    useEffect(() => {
        dispatch(fetchUserById(""))
    }, []);

    return loadingStatus === "loading" ? <Skeleton /> : <Tabs defaultActiveKey="1" items={items(searcherData)} />

    // return "pasha"
}

export default Students;