import React from "react";

const Dateexpences = (props) => {
  //   const month = [
  //     "",
  //     "Jan",
  //     "feb",
  //     "march",
  //     "April",
  //     "May",
  //     "Jun",
  //     "July",
  //     "Aug",
  //     "sep",
  //     "oct",
  //     "nov",
  //     "Dec",
  //   ];
  const monthvalue = new Date(props.row.date).toLocaleString("en-us", { month: "long" });

  const date = new Date(props.row.date).getFullYear();
  const day = new Date(props.row.date).getDay();

  return (
    <>
      <div>
        <h1>{monthvalue}</h1>
        <h1>{date}</h1>
        <h1>{day}</h1>
      </div>
    </>
  );
};
export default Dateexpences;
