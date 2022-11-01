import React, { useState, useRef } from "react";
import "./Style.css";
import Details from "./Details";
import Card from "./Card";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const uniqueList = [...new Set(Details.map((curElem) => {
    return curElem.category;
})
),
];
console.log(uniqueList);


const Home = () => {
 
  const inputRef = useRef(null);

  function handleClick() {
    console.log('value is:',inputRef.current.value);
  }
 
 
 
  const [menuData, SetMenuData] = useState(Details);
    
  const filterItem = (category) => {
    const updatedList = Details.filter((curElem) => {
        return curElem.category === category;
    });
    SetMenuData(updatedList);
  };


  const filterName = (name) => {
    const updatedList = Details.filter((curElem) => {
        return curElem.name === name;
    });
    SetMenuData(updatedList);
  };


  return (
    <>
    <div className="search">
    <input placeholder="Search" className="searchbar" ref={inputRef} type="text" id="message" name="message"/>
    <button className="button" onClick={handleClick}><SearchOutlinedIcon/> Search</button>
  </div>
  <div className="fam">
  <button className="fam-item" onClick={() => filterName("Akshay Kumar")}>Akshay Kumar</button>
  <button className="fam-item" onClick={() => filterName("Kiara Advani")}>Kiara Advani</button>
  <button className="fam-item" onClick={() => filterName("Shahid Kapoor")}>Shahid Kapoor</button>
  <button className="fam-item" onClick={() => filterName("Disha Patani")}>Disha Patani</button></div>
<nav className="navbar">
    <div className="btn-group">
        <button className="btn-group__item" onClick={() => filterItem("male")}>Male</button>
        <button className="btn-group__item" onClick={() => filterItem("female")}>Female</button>
        <button className="btn-group__item" onClick={() => SetMenuData(Details)}>All</button>
    </div>
</nav>

    <Card menuData={menuData} />
    </>
  )
}

export default Home;