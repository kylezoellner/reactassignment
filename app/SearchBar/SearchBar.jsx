import { useState, useEffect } from "react"
import "./SearchBar.css"

export default function SearchBar() {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString]) //On page load, call fetch
    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes(searchString.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
            return (<div className="prodStyle" key={index}>
                    <p style={{fontSize:".75rem"}}>{product.title}</p>
                    <p>${product.price}</p>
                    <img style={{width:"100px", display:"block", margin:"auto"}} src={product.image} alt={product.title} />
                </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }
    
    function handleChange(event){
        setSearchString(event.target.value)
    }

    return <div>
        <p>SearchBar</p>
        <input type="text" value={searchString} onChange={handleChange}/>
       <div style={{display:"flex", flexFlow:"row wrap"}}>{filteredProducts}</div>
    </div>
  }
