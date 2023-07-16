import { Row, Col } from "antd";
import DateLastUpdate from '../DateLastUpdate';
import StudentsUpdate from '../StudentsUpdate';
import SearchStudent from '../SearchStudent';
import InactiveStudentBtn from '../InactiveStudentBtn';


const StudentsMenu = () => {
    return <Row>
        <Col span={4}><SearchStudent /></Col>
        <Col offset={1}  span={2}><InactiveStudentBtn days={30} /></Col>
        <Col offset={1}  span={2}><InactiveStudentBtn days={100} /></Col>
        <Col offset={2} span={4}><DateLastUpdate /></Col>
        <Col offset={1} span={5}><StudentsUpdate /></Col>
    </Row>
}

export default StudentsMenu;