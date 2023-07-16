import { Tag, Badge } from 'antd';
import moment from 'moment'

const Activity = ({ dateLastActivity }) => {

    const countInactiveDays = moment().diff(moment(dateLastActivity), 'days')
    const oneDays = 0;
    const weekDays = 30;
    const stoDays = 100;

    return <Badge count={countInactiveDays || 1} >
        <Tag
            color={countInactiveDays >= oneDays && countInactiveDays <= weekDays ? "cyan" :
                countInactiveDays > weekDays && countInactiveDays <= stoDays ? "yellow" :
                    "red"}

        >
            {moment(dateLastActivity).format('DD MMMM YYYY')}
        </ Tag >
    </Badge>

}

export default Activity