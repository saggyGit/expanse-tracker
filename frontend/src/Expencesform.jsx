import axios from "axios";
import react, { useState } from "react";
import './Expencesform.css';

const Expencesform = (props) => {
  const [title, settitle] = useState("");
  const [amount, setamount] = useState();
  const [date, setdate] = useState();
  const[formview,setformview]=useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const dataobj = {
      itemName: title,
      price: amount,
      date:new Date(date),
    };

    axios.post("http://localhost:5000/myitems",dataobj)
    .then((res)=>{
      alert("data Added successfully...!");
      window.location.reload();
    })
    .catch((err)=>{
      alert("data could not send");
    })








    console.log(dataobj);
    props.expencedata(dataobj);

    alert("data add successfully");

    settitle("");
    setamount(0);
    setdate(new Date());
    setformview(false);
  };
  return (
    <>
    <div className="form">
      <form onSubmit={submitHandler} className={formview ? 'dblock':'dnone'}>
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />

        <label>Amount</label>
        <input
          type="number"
          onChange={(e) => setamount(e.target.value)}
          value={amount}
        />
        <br />
        <br />

        <label>Date</label>

        <input
          type="date"
          onChange={(e) => setdate(e.target.value)}
          value={date}
        />
        <br />
        <br />
        <input type="submit" value="Add Expences" />
      </form>

      <button onClick={()=>setformview(true)} className={formview ? 'dnone':'dblock'} style={{backgroundColor:"purple",padding:"15px",borderRadius:"5px",margin:"50px auto",width:"20%",color:"white"}}>Add new Expences</button>
      </div>
    </>
    
  );
};

export default Expencesform;
