import React from "react";
import { Chart } from "react-google-charts";
import { createUserCount } from "../../handlers/userHandler";

const Chartsusers = (props) => {
  
  const statusDetails = createUserCount(props.userDetails);

  const data = [
    ["Status", "Count"],
    ["APPROVED", statusDetails.approved],
    ["PENDING", statusDetails.pending],
    ["REJECTED", statusDetails.rejected],
  ];
  const options = {
    title: "USERS STATUS CHART",
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

export default Chartsusers;
