import { green, red, yellow } from '@ant-design/colors';
import { Progress } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useGetCheckListsQuery } from "../../services/checkLists";
import { checkListsRate } from "../../helpers/checkListRate";


const CheckListsBage = ({ id }) => {
    const { data, error, isLoading } = useGetCheckListsQuery(id);
    console.log("---------------–--");
    // const isLoading = true;
    const strokeColor = [];
    let countItemsALL = 0;
    let countComlpetedALL = 0;

    const itemsCompleted = data?.filter(item => {
        const { isComlpeted, countItems, countComlpeted } = checkListsRate(item);
        countItemsALL += countItems;
        countComlpetedALL += countComlpeted;
        isComlpeted && strokeColor.push(green[5]);
        !isComlpeted && countComlpeted > 1 && strokeColor.push(yellow[5]);
        return isComlpeted
    }) || []


    const percent = ((countComlpetedALL / countItemsALL) * 100).toFixed(0);


    return isLoading ? <p>...Loading</p> : <div>
        <Progress percent={percent} steps={data?.length} strokeColor={strokeColor} />
    </div>

}

export default CheckListsBage;