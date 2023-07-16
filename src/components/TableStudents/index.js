import React, { useState } from 'react';
import { Button, Table, Popconfirm, message } from 'antd';
import Activity from "../Activity";
import CheckListsBage from "../CheckListsBage";
import DrawerCustom from "../DrawerCustom";
import { addActivBoard } from "../../redux/draverInfoSlice"
import { useDeleteStudentMutation } from "../../services/students";

import { useDispatch } from "react-redux";



const TableStudents = ({ data }) => {
    const dispatch = useDispatch();
    const [deleteStudent] = useDeleteStudentMutation();
    const [open, setOpen] = useState(false);


    const confirm = async (id) => {
        console.log(id);
        await deleteStudent(id)
        message.success('Удалилась');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };


    const showDrawer = (board) => {
        setOpen(true);
        dispatch(addActivBoard(board))

    };
    const onClose = () => {
        setOpen(false);
    };
    const columns = [
        {
            title: `Имя Фамилия`,
            dataIndex: 'name',
            key: 'name',
            render: (text, data) => <h4><a href={data.url} alt={text} target="_blank" rel="noopener noreferrer">{text.split(' ').slice(0, 2).join(' ')}</a></h4>,
        },
        {
            title: 'Последняя активность',
            dataIndex: 'dateLastActivity',
            key: 'dateLastActivity',
            render: (dateLastActivity) => <Activity dateLastActivity={dateLastActivity} />,
        },
        {
            title: 'Чек-листы',
            dataIndex: 'checklist',
            key: 'checklist',
            render: (_, board) => <CheckListsBage {...board} />,
        },
        {
            title: 'Действия',
            key: 'action',
            render: (_, board) => {
                return <>
                    <Button onClick={() => showDrawer(board)}>Show</Button>
                    <Popconfirm
                        title="Удаление доски"
                        description="Ты точно хочешь удалить доску?"
                        onConfirm={() => confirm(board.id)}
                        onCancel={cancel}
                        okText="Да"
                        cancelText="Нет"
                    >
                        <Button danger>Удалить</Button>
                    </Popconfirm>
                </>
            },
        },
    ];
    return <>
        <Table
            size="middle"
            pagination={{ position: ['bottomCenter'] }}
            dataSource={data}
            columns={columns}
        />
        <DrawerCustom width={640} placement="right" closable={false} onClose={onClose} open={open} />
    </>
}

export default TableStudents;