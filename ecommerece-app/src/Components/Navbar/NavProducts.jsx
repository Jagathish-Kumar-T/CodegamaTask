import React ,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import ProductCard from "../Products/ProductCard/ProductCard";
import Select from 'react-select'
import { filteredProductData, getProducts } from "../Redux/Actions";
import "./Navbar.css";

export default function NavProducts() {
  const products = useSelector((state) => state.reducer.products);
  const [selectval, setSelectval] = useState("");
  const ProductsData = useSelector((state) => state.reducer.products);

  const filteredData = useSelector((state) => state.reducer.filter);

  const dispatch = useDispatch();

  const Options = [
    { value: 'All', label: 'All' },
    { value: "men's clothing", label: 'Men' },
    { value: "women's clothing", label: 'Women' },
    { value: 'electronics', label: 'Electronics' },
    { value: "jewelery",label:"Jewellery" }

  ];

  const getFiltered = (cat) => {
    console.log("DP",cat);
    if (cat === "All") {
      dispatch(getProducts(ProductsData));
    } else {
      const filterData = ProductsData.filter((el) => el.category === cat);
      dispatch(filteredProductData(filterData));
    }
  };
  const ClearAll = ()=>{
    setSelectval("");
    getFiltered("All");
  }
 const ChangeVal = (value)=>{
   setSelectval(value.value);
   getFiltered(value.value);

 }
 useEffect(() => {
  setSelectval("")
}, []);
  return (
    <div className="products-container">
      {/* <div style={{display:"flex"}}> */}

       <Select className="select" options={Options?.map((data, index) => {
         return {
           label: data?.label,
           value: data?.value,
          key: index
        }
      })} 
      placeholder="Category Filter"
      onChange={(value)=>ChangeVal(value)} value={Options.find(obj => obj.value === selectval) ? Options.find(obj => obj.value === selectval) : ""}/>
        <button className="filter-btn btn-space" onClick={()=>ClearAll()}>
          Clear x
        </button>
      {/* </div> */}

      <div className="products">
        {products?.length > 0 ? (
          filteredData.map((product) => (
            <ProductCard
              title={product.title}
              price={product.price}
              rating={product.rating}
              key={product.id}
              id={product.id}
              description={product.description}
              image={product.image}
            />
          ))
        ) : (
          <p>Could not fetch the products !</p>
        )}
      </div>
    </div>
  );
}
