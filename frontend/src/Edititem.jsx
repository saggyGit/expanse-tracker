  import { useParams ,useNavigate} from 'react-router-dom';
  import axios from "axios";

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Edititem = () => {
     const {itemID}= useParams();
     const navigate= useNavigate();

     const [item ,setItem] = useState("");
     const [price ,setprice] = useState();
     const [date ,setdate] = useState(new Date());


     console.log(item);
     console.log(price);
     console.log(date);





    useEffect(()=>{
        axios.get(`http://localhost:5000/myitems/${itemID}`)
        .then(async (res)=>{
           const toUpdateData = await res.data[0];
           setItem(toUpdateData.itemName);
           setprice(toUpdateData.price);
           setdate(toUpdateData.date);
        })
        .catch((err)=>{
           console.log(err);
        })

    },[])
   



     //editHandler
     const editHandler = (e)=>{
        e.preventDefault();
        
        const newdtaobj={
                itemName : item,
                price:price,
                date : date
        }

        axios.put(`http://localhost:5000/myitems/${itemID}`,newdtaobj)
        .then((res)=>{
            alert("Item Updated.....");
            navigate("/");
            
        })
        .catch((err)=>{
            alert("fail to update items");
        })

     }






    return (
        <>
    <form onSubmit={editHandler}>
                <div className="d-flex justify-content-center">
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">item</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPassword" onChange={(e)=>setItem(e.target.value)} value={item}/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">price</label>
            <div class="col-sm-10">
            <input type="number" class="form-control" id="inputPassword" onChange={(e)=>setprice(e.target.value)} value={price}/>
            </div>
        </div>


        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">date</label>
            <div class="col-sm-10">
            <input type="date" class="form-control" id="inputPassword" onChange={(e)=>setdate(e.target.value)} value={date}/>
            </div>
        </div>
        <div>
        <button type="submit" class="btn btn-outline-success">Edit</button>
        </div>
    </div>
  </form>


        
        </>
    );
};

export default Edititem;