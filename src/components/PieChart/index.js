import ReactEcharts from "echarts-for-react";
import { useGetStatisticsQuery } from "../../services/pieChart";


const PieChart = ({ dateLastActivity }) => {
    const { data = {}, error, isLoading } = useGetStatisticsQuery();
    const { countActive, countStop, countInactive } = data;
    const colorPalette = ['#00b04f', '#ffbf00', '#fc0313']
    const a = [
        { value: countActive, name: 'Активные' },
        { value: countStop, name: 'На стопе' },
        { value: countInactive, name: 'Закинувшие' },
    ]

    const option = {
        title: {
            text: 'Общая статистика',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                type: 'pie',
                data: a,
            }
        ], emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
        },
        color: colorPalette
    };
    return isLoading ? <p>...loading</p> : <ReactEcharts option={option} />

}

export default PieChart