import React from "react";
import { Chart } from "react-google-charts";
import { createTicketsCount } from "../../handlers/ticketHandler";

const Charts = (props) => {
  const userType = localStorage.getItem("userType");
  const statusDetails = createTicketsCount(props.ticketDetails);

  const data = [
    ["Status", "Count"],
    ["OPEN", statusDetails.pending],
    ["PROGRESS", statusDetails.progress],
    ["CLOSED", statusDetails.closed],
    ["BLOCKED", statusDetails.blocked],
  ];
  const options = {
    title: `${userType} TICKETS DATA`,
    is3D: true,
  };

  return (
    <div id="charts">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Charts;
