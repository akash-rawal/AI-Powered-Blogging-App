import React from 'react'
import {PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend} from "recharts";
import CustomLegend from './CustomLegend';
import CustomTooltip from './CustomTooltip';
const CustomPieChart = ({data,colors}) => {
  return(
 <ResponsiveContainer width="100%" height={325}>
  <PieChart>
    <Pie
      data={data}
      dataKey="count"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={120}
      innerRadius={80}
      labelLine={false}
       paddingAngle={0}
      //  cornerRadius={0}   // removes spacing
  stroke="none"
    >
      {data.map((entry, index) => (
        <Cell
          key={`cell-${index}`}
          fill={colors[index % colors.length]}
        />
      ))}
    </Pie>
    <Tooltip content={<CustomTooltip/>}/>
    <Legend content={<CustomLegend/>}/>
  </PieChart>
</ResponsiveContainer>
);
}

export default CustomPieChart
