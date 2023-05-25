import { Button } from 'antd';
import { useUpdateStudentsMutation } from "../../services/students";

const StudentsUpdate = () => {
    const [updateStudents] = useUpdateStudentsMutation();
    return <>
        <Button type="primary" onClick={() => updateStudents()}>Обновить студентов в базе</Button>
    </>
}

export default StudentsUpdate;