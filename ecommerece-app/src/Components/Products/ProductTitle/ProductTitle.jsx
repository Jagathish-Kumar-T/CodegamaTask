import React,{useState,useEffect} from "react";
import "./ProductTitle.css";
import Select from 'react-select'

export default function ProductTitle({ getFiltered }) {
  const Options = [
    { value: 'All', label: 'All' },
    { value: "men's clothing", label: 'Men' },
    { value: "women's clothing", label: 'Women' },
    { value: 'electronics', label: 'Electronics' },
    { value: "jewelery",label:"Jewellery" }

  ]
  const [selectval, setSelectval] = useState("");

  useEffect(() => {
    setSelectval("")
  }, [])
  
  const ClearAll = ()=>{
    setSelectval("");
    getFiltered("All");
  }
 const ChangeVal = (value)=>{
   getFiltered(value.value) 
   setSelectval(value.value)

 }
  return (
    <div className="product-header">
      <div className="product-heading">
        <h1>Products</h1>
      </div>
      <div className="product-filter">
        {/* <button className="filter-btn" onClick={() => getFiltered("All")}>
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => getFiltered("men's clothing")}
        >
          men's clothing
        </button>
        <button
          className="filter-btn"
          onClick={() => getFiltered("electronics")}
        >
          electronics
        </button>
        <button
          className="filter-btn"
          onClick={() => getFiltered("women's clothing")}
        >
          women's clothing
        </button> */}
      <Select className="wid" options={Options?.map((data, index) => {
         return {
          label: data?.label,
          value: data?.value,
          key: index
         }
      })} 
      placeholder="Category Filter"
      onChange={(value)=>ChangeVal(value)} value={Options.find(obj => obj.value === selectval) ? Options.find(obj => obj.value === selectval) : ""}/>
        <button className="filter-btn centre" onClick={()=>ClearAll()}>
          Clear x
        </button>
      </div>
    </div>
  );
}
