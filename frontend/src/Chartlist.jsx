import React from 'react';
import "./Chartlist.css";

const Chartlist = (props) => {

    let BarHeight="0%";

    if(props.maxprice > 0)
          
    {
        BarHeight=Math.round((props.value / props.maxprice)*100);
    }
    console.log(BarHeight);
    return (
        <div className='main_chartbar'>
        <div className='chartbar'>

            <div className='inner_chartbar'>
                <div className='chartbar_fill' style={{height:BarHeight}}></div>
            </div>

            <label className='chartbar_label'>{props.label}</label>
            
        </div>
        </div>
    );
};

export default Chartlist;