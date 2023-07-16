import { Drawer, Row, Col } from 'antd';
import moment from 'moment'
import { useSelector } from "react-redux";
import CheckLists from "../CheckLists";

const DrawerCustom = ({ width, placement, closable, onClose, open }) => {

    const { activeBoard } = useSelector((store) => store.draverInfoSlice);
    console.log(activeBoard);
    return <Drawer width={640} placement="right" closable={false} onClose={onClose} open={open}>
        <h4 style={{
            marginBottom: 24,
        }}><a href={activeBoard.url} alt={activeBoard.name} target="_blank" rel="noopener noreferrer">{activeBoard?.name?.split(' ').slice(0, 2).join(' ')}</a></h4>


        <Row>
            <Col>
                <CheckLists id={activeBoard.id} />
            </Col>
        </Row>
    </Drawer>

}

export default DrawerCustom