import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShop, deleteShop } from "../actions/index";

function Landing() {
  const [shopData, setShopData] = useState({
      name:"",
      area:"",
      category:"",
      opendate:"",
      closedate:""
  });

   const {name, area, category, opendate, closedate} = shopData;

  const onChange = (e) => {
    setShopData({ ...shopData, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  const onSubmit = (e) => {
 
    if(!name |!area|!category |!opendate |!closedate){
    alert("please enter full details or change all the values of input");
    
    }else {
        dispatch(addShop(shopData), setShopData(""))
    }
    e.preventDefault();
  
  };

  const dispatch = useDispatch();
  const list = useSelector((state) => state.addShopReducer.list);

  return (
    <div className="d-flex flex-column ms-4 justify-content-center" style={{fontWeight:"bolder", fontFamily:"sans-serif"}}>
      <h1>Add Shop</h1>
      <form onSubmit={onSubmit} style={{width:"320px"}}>
          <label htmlFor="exampleFormControlInput1" className="form-label">Shop Name</label><br/>
        <input
          type="text"
          name="name"
          onChange={onChange}
          placeholder="Shop Name"
          value={name}
          className="form-control" id="exampleFormControlInput1"
          required
        />
      <label htmlFor="exampleFormControlInput1" className="form-label">Select Area</label><br/>
        <select
          type="text"
          onChange={onChange}
          name="area"
          className="form-select"
          aria-label="Default select example"
          value={area}
          style={{width:"100%", height:"40px"}}
          required
        >
          <option selected disabled hidden value="">
            Select an Area
          </option>
          <option name="thane">Thane</option>
          <option name="pune">Pune</option>
          <option name="mumbai_sub">Mumbai Suburban</option>
          <option name="nashik">Nashik</option>
          <option name="nagpur">Nagpur</option>
          <option name="ahemdabad">Ahemdabad</option>
          <option name="solapur">Solapur</option>
          <option name="if_req">add if required</option>
        </select><br/>
        <label htmlFor="exampleFormControlInput1" className="form-label">Select Category</label><br/>
        <select
          onChange={onChange}
          name="category"
          id="category"
          className="form-select"
          aria-label="Default select example"
          value={category}
          style={{width:"100%", height:"40px"}}
          required
        >
          <option selected disabled hidden value="">
            Select a Category
          </option>
          <option name="grocery">Grocery</option>
          <option name="butcher">Butcher</option>
          <option name="baker">Baker</option>
          <option name="chemist">Chemist</option>
          <option name="stationery_shop">Stationery Shop</option>
          <option name="if_req">add if required</option>
        </select><br/>
        <label htmlFor="exampleFormControlInput1" className="form-label">opening date</label><br/>
        <input  className="form-control" id="exampleFormControlInput1" type="date" name="opendate" onChange={onChange} required value={opendate}/><br/>
       
        <label htmlFor="exampleFormControlInput1" className="form-label">closing date</label><br/>
        <input  className="form-control" id="exampleFormControlInput1" type="date" name="closedate" onChange={onChange} required value={closedate}/><br/>
       
        <button
          type="submit"
          value="submit"
          onClick={onSubmit}
          className="btn btn-primary"
        >
          Add Shop
        </button>
      </form>
      <div  className="d-flex flex-column align-items-center justify-content-center" style={{position: "absolute", left:200, top:20, padding:50, width:1000}}>
        {list.map((item) => {
          return (
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ border: "1px solid black", width: "50%", marginTop:"10px",  }}>
              <h5><span style={{fontWeight:"bolder"}}> Shop Name:</span> {item.data.name}</h5>
              <h5><span style={{fontWeight:"bolder"}}>Area: </span>{item.data.area}</h5>
              <h5><span style={{fontWeight:"bolder"}}>Category: </span>{item.data.category}</h5>
              <h5><span style={{fontWeight:"bolder"}}> Opening date: </span>{item.data.opendate}</h5>
              <h5><span style={{fontWeight:"bolder"}}> closing date: </span>{item.data.closedate}</h5>
              <span className="material-icons-outlined" onClick={() => dispatch(deleteShop(item.id))}>delete </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Landing;
