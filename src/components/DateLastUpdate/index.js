import moment from 'moment';
import { useGetDatesQuery } from "../../services/dates";


const DateLastUpdate = () => {
    const { data, error, isLoading } = useGetDatesQuery();
    return <>
        <p>{moment(data?.updateDate).format('DD-MM-YYYY hh:mm:ss')}</p>
    </>
}

export default DateLastUpdate;