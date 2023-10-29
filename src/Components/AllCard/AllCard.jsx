/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";


const AllCard = ({ pd }) => {

    const {description, price, id, title,image} = pd
  return (
   <div className="flex">
     <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[200px] h-[200px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title.substring(0,20)}</h2>
          <p>{description.substring(0,50)}</p>
          <div className="card-actions justify-end">
            <p>Price:{price}$</p>
           <Link to={`/product/${id}`}>
           <button className="btn btn-primary ">Details</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default AllCard;
