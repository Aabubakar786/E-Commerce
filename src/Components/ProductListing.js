import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProductListing = ()=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProduct();
    },[])
    const getProduct=async()=>{
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }
    console.log('products',products)
     return(
        <>
        <table className="row">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
          </tr>
          {products.map((res, index) => (
            <tr key={index}>
              <td>{res?.name || ''}</td>
              <td>{res?.price || ''}</td>
              <td>{res?.category || ''}</td>
              <td>{res?.company || ''}</td>
            </tr>
          ))}
        </table>
      </>
     )
}

export default ProductListing;