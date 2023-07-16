import moment from 'moment';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useGetCheckListsQuery } from "../../services/checkLists";
import { checkListsRate } from "../../helpers/checkListRate";


const CheckLists = ({ id }) => {
    const { data, error, isLoading } = useGetCheckListsQuery(id);
    console.log(data);

    const items = data?.map(item => {
        const { isComlpeted, countComlpeted, countItems } = checkListsRate(item);
        console.log(isComlpeted);
        return {
            dot: countComlpeted !== 0 && !isComlpeted ? <ClockCircleOutlined style={{ fontSize: '16px' }} /> : null,
            color: isComlpeted ? 'green' : 'red',
            children: <>
                <p>{item.name}</p>
                <p>{countComlpeted}/{countItems}</p>
            </>
        }
    })


    return <>
        <p>CheckLists</p>
        <Timeline
            items={items} />

    </>
}

export default CheckLists;