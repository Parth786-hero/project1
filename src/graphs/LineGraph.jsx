import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
  colors : ["red" , "purple" , "black"]
};

function LineGraph() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}

export default LineGraph;