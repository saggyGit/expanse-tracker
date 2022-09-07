import react,{useState} from "react";
import "./Filter.css";

const Filter=(props)=>{

    const[FilteredYear,selectFilteredYear]=useState("All");


    const selectedYear=(e)=>{

        selectFilteredYear(e.target.value);


    }
    console.log(FilteredYear);

    props.Filteredvalue(FilteredYear);
    
    return(

        <div className="FilterYear">

            <div className="tag"><h1>Filter by year</h1></div>
        

            <select className="year" onChange={selectedYear}>
                <option value="All">All</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>


            </select>
            </div>
    



    );

};

export default Filter;