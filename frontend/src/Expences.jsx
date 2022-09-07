import react,{useState} from "react";
import Dateexpences from "./Dateexpences";
import Filter from "./Filter";
import Chart from "./Chart";
import { NavLink } from "react-router-dom";

const Expences = (props) => {
  
  console.log(props.dummyData);

  const[updatedYear,setupdatedYear]=useState();



  const Filteredvalue=(FilteredYear)=>{

    console.log(FilteredYear);
    setupdatedYear(FilteredYear);
  }


  let FilteredRecord=props.dummyData.filter(row=>{

    if(updatedYear=="All")
    {
      return(row);
    }
    else{

      return(new Date(row.date).getFullYear()==updatedYear);

    }



  });


  return (
    <>
      <Filter Filteredvalue={Filteredvalue}></Filter>
      <Chart FilteredRecord={FilteredRecord}></Chart>
      {FilteredRecord.reverse().map((row) => {
        return (
          <div className="expencebody">
            <div className="main" >
              <div className="date">
                <Dateexpences row={row}></Dateexpences>
              </div>
              <div>
                <h1>{row.itemName}</h1>
              </div>
              <div className="price">
                <h1>${row.price}</h1>
              </div>
              <div className="editbt">
             <NavLink exact to ={`/edititem/${row._id}`}><button type="button" class="btn btn-outline-success">Edit</button></NavLink>
              </div>
              <div className="deletbt">
             <NavLink exact to = {`/deleteitem/${row._id}`}><button type="button" class="btn btn-outline-danger">Delete</button></NavLink>
              </div>
            
          </div>
          </div>
        
        );
      })}
    </>
  );
};
export default Expences;
