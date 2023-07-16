import { Col, Row } from 'antd';
import PieChart from '../../components/PieChart'
import FunnelChart from '../../components/FunnelChart'

const Statistics = () => {
    return <Row>
        <Col span={10}>
            <PieChart />
        </Col>
        <Col offset={3} span={10}>
            <FunnelChart />
        </Col>
    </Row>
}

export default Statistics;