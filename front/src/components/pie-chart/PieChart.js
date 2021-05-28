import React from 'react';
import { Pie } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';
import "./pieChart.css";

const randomColor = () =>{
  return Math.floor(Math.random()*255)
}
const backgroundColor = (size)=>{
  let bgColorArray = [];
  for(let i=0; i < size; i++){
    bgColorArray.push(`rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.2)`);
  }
  return bgColorArray;
}

const PieChart = (props) => {
    const {rooms}=props;
    const color = backgroundColor(rooms.length);
    const pieData_value = [];
    const pieData_label = [];
    rooms.forEach(room => {
      pieData_label.push(room.name);
      pieData_value.push(room.powerUsage.value);
    });
    const data={
      datasets:[
        {
          data:[...pieData_value],
          backgroundColor:color,
          borderColor:color,
          borderWidth:1,
        },
      ],
      labels:[...pieData_label]
    }
  return (
  <>
    <div className='header'>
    <h1 className='title'>
        <FormattedMessage id="stats" />
    </h1>
    </div>
    <div className="pieChart">
      <Pie data={data} />
    </div>
  </>)
};

export default PieChart;