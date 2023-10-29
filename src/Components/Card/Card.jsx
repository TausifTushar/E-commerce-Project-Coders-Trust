import React, { useEffect, useState } from "react";
import AllCard from "../AllCard/AllCard";

const Card = () => {
    const [product, setProduct] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=>setProduct(json))
  },[])

console.log(product)

  return (
    <div>
        <div className="flex justify-center items-center my-10">
          <h1 className="text-3xl font-bold">
            Card Section
          </h1>
        </div>
     <div className="flex flex-wrap gap-5 justify-center">
     {
      product.map((pd)=><AllCard key={pd.id} pd={pd}></AllCard>)
     }
    </div>
    </div>
  );
};

export default Card;
