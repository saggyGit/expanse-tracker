import react, { useState ,useEffect} from "react";
import reactDOM from "react-dom";
import "./App.css";
import "./Expences.jsx";
import Expences from "./Expences.jsx";
import Expencesform from "./Expencesform";
import axios from "axios";

const App = () => {



  const [myData , setMydata] = useState([]);
useEffect(()=>{
  axios.get("http://localhost:5000/myitems")
  .then((res)=>{
    const allData = res.data;
    console.log(allData);
    setMydata(allData);
  })
},[])
  

  // const [Expencevalue, setexpencevalue] = useState(dummyData);
  // const expencedata = (dataobj) => {
  //   setexpencevalue([...Expencevalue,dataobj ]);
  // };

  return (
    <>
      <Expencesform></Expencesform>
      <Expences dummyData={myData}></Expences>
    </>
  );
};

export default App;
