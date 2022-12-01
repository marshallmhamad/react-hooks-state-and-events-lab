import React, {useState} from "react";

function Item({ name, category }) {
const[isAdd,setAdd] = useState(false)

function handleclick(){
  setAdd(!isAdd)
}

  const appClass = isAdd ? "in-cart" : ""
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleclick}>{isAdd ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;