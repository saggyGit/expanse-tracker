import React from 'react';
import Chartlist from './Chartlist';
import './Chart.css';

const Chart = (props) => {

    let chartData=[
        
        {label:"Jan",price:0},
        {label:"feb",price:0},
        {label:"march",price:0},
        {label:"apr",price:0},
        {label:"may",price:0},
        {label:"Jun",price:0},
        {label:"July",price:0},
        {label:"Aug",price:0},
        {label:"sep",price:0},
        {label:"oct",price:0},
        {label:"nov",price:0},
        {label:"dec",price:0},



    ];

    console.log(props.FilteredRecord);
    for(let record of props.FilteredRecord)
    {
        let month = new Date(record.date).getMonth();
        chartData[month].price = record.price;
    }

    let priceArray=props.FilteredRecord.map(row=>row.price);

    let maxprice=Math.max(...priceArray);

    console.log(maxprice);
    return (
        <div className='dflex'>

            {chartData.map(row=>{
                return(

                    <Chartlist label={row.label} maxprice={maxprice} value={row.price}></Chartlist>            

                )
            })}
        </div>
    );
};

export default Chart;