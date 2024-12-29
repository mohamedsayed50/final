import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import cartAtom from "./atom";




export default function Navbar(props) {


  const product  = useRecoilValue(cartAtom)

  const [searchInp , setsearchInp] = useState("")

  const [category , setCategory] =useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data=>{
      setCategory(data)
    });
  },[])


  
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Products</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Cart">Cart {product?.length}</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">

            {
              category.map((categories)=>{
                return (
                  <li><Link class="dropdown-item" to={`/category/${categories.slug}`}>{categories.name}</Link></li>
                )
              })
            }
           
            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div class="d-flex">
        <input onChange={(e)=>{
          setsearchInp(e.target.value)
        }} class="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
        <Link class="btn btn-outline-success" to={`/search/${searchInp}`}>Search</Link>
      </div>
    </div>
  </div>
</nav>
    )
}