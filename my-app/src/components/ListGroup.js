// import {MouseEvent} from "react";
// interface props {
//   items: String[];
//   heading: String
// }

import { useState } from "react"

function ListGroup(props) {
  const {items, heading, onSelectItem} = props
  // let selectedItem = 2
  const message = items.length === 0 ? <p>No item found</p> : null
  // Hook: it's function in react that allows us to tap-in to built in features of react. 
  //  useState(parameter) parameter: initialization value
  const [selectedIndex, setSelectedIndex] = useState(-1)
  // const [name, setName] = useState('')

  // Event handler.
  const handleClick = (event) => console.log(event)

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null
  } 
  return (
    <>
    <h1>{heading}</h1>
    {getMessage()}
    <ul className="list-group">
      {/* <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li> */}
      {items.map((item, index)=> (
        // <li className={selectedItem === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={handleClick}>{item}</li>))}
        <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => {setSelectedIndex(index); onSelectItem(index)}} >{item}</li>))}
    </ul>
    </>
  );
}

export default ListGroup;
