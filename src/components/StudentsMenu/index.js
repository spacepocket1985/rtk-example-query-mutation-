import { Row, Col } from "antd";
import DateLastUpdate from '../DateLastUpdate';
import StudentsUpdate from '../StudentsUpdate';
import SearchStudent from '../SearchStudent';


const StudentsMenu = () => {
    return <Row>
        <Col span={6}><SearchStudent /></Col>
        <Col offset={2} span={6}><DateLastUpdate /></Col>
        <Col span={8}><StudentsUpdate /></Col>
    </Row>
}

export default StudentsMenu;