import React from 'react';
import { Line } from 'react-chartjs-2';





const Chart = () => {
    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    return (
        <div>
            <div>
                <Line
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Chart',
                            fontSize: 20
                        },
                        legend: {
                            display: false,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </div>
    )
}



export default Chart;







