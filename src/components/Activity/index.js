import { Tag, Badge } from 'antd';
import moment from 'moment'

const Activity = ({ dateLastActivity }) => {

    const countInactiveDays = moment().diff(moment(dateLastActivity), 'days')
    const weekDays = 7;

    return <Badge count={countInactiveDays <= weekDays ? 0 : countInactiveDays} >
        <Tag
            color={countInactiveDays >= weekDays ? "red" : "cyan"} >
            {moment(dateLastActivity).format('DD MMMM YYYY')}
        </ Tag >
    </Badge>

}

export default Activity