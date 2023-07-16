import { Tag, Badge } from 'antd';
import moment from 'moment'
import ReactEcharts from "echarts-for-react";

const FunnelChart = () => {

    const option = {
        title: {
            text: 'Чек-листы'
        },
        series: [
            {
                name: 'Чек-листы',
                type: 'funnel',
                left: '0%',
                right: '20%',
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                data: [
                    { value: 50, name: '3-й чек-лист' },
                    { value: 40, name: '4-й чек-лист' },
                    { value: 20, name: '5-й чек-лист' },
                    { value: 10, name: '6-й чек-лист' },
                    { value: 60, name: '2-й чек-лист' },
                    { value: 70, name: '1-й чек-лист' }
                ]
            }
        ]
    };

    return <ReactEcharts option={option} />


}

export default FunnelChart