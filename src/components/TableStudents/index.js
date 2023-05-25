import { Table } from 'antd';
import Activity from "../Activity";

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
        title: 'Действия',
        key: 'action',
        render: (_, data) => {
            console.log(data);
            return (
                <>
                    <>sd</>
                </>
            )
        },
    },
];


const TableStudents = ({ data }) => {
    return <Table
        size="small"
        pagination={{ position: ['bottomCenter'] }}
        dataSource={data}
        columns={columns}
    />
}

export default TableStudents;