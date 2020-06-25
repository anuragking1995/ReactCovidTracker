import React, {useState,useEffect} from 'react'
import {fetchDailyData} from '../../api';

import {Line,Bar} from 'react-chartjs-2';

import styles from './Chart.module.css'

const Chart = (props)=>{
    const [dailyData, setDailyData] = useState({});
    console.log(props)
    useEffect(()=>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }
    );


    const lineChart = (
        <Line>
            data = {{
                labels: '',
                datasets:[{},{}]
            }}
        </Line>
    );

    return (
        <h1>Charts</h1>
    )
}

export default Chart;