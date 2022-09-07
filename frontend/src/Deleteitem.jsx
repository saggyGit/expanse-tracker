import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";





const Deleteitem = ()=>{

     const navigate = useNavigate();

     const {itemID} = useParams();


     const deleteHandler = ()=>{
        axios.delete(`http://localhost:5000/myitems/${itemID}`)
        .then((res)=>{
            alert("data deleted successfully.....!");
            navigate("/");
        })
        .catch((err)=>{
            alert("data could not delete....!");
        })
     }



    const cancelHandler = ()=>{
        navigate("/");
    }


    return(


        <>
        <button type="button" class="btn btn-danger" onClick={deleteHandler}>delete</button>
        <button type="button" class="btn btn-success" onClick = {cancelHandler}>cancel</button>
        </>
    );
}
export default Deleteitem;