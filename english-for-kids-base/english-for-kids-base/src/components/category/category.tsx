import "./category.scss";
import React from "react";

const Category = ({category}: {category: string}) => {

  return (
    <div className="card border-primary mb-3 category">
      <div className="card-body d-flex flex-column align-items-center">
        <div className="category-image" style={{backgroundImage: "url(/assets/img/sheep.jpg)"}}>
        </div>
        <h4 className="card-title mt-2">{category}</h4>
      </div>
    </div>
  )
}

export default Category;