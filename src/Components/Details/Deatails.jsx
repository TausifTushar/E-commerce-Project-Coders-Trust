/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Deatails = () => {
  const { id } = useParams();

  const [prod, setProd] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProd(json));
  }, []);
  return (
    
    <div>
       <Helmet>Detaile</Helmet>
    </div>
  )
  }
export default Deatails; 
