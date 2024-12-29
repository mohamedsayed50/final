import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "./productCard"

export default function Search() {


    console.log("lkfdn  ")

    const params = useParams()
    const [products , setProducts]=useState([])
    useEffect(()=>{
        
        fetch(`https://dummyjson.com/products/search?q=${params.Title}`)
        .then(res => res.json())
        .then(data=>{
            setProducts(data)
        });
    },[params])



    return (
        <section className="home">
        <div className="container">
            <div className="row g-3">
                {
                    products.products?.map((element)=>{
                        console.log(element)
                        return(
                            <Card product={element} />
                        )
                    })
                }
               
             
               
            </div>
        </div>
    </section>
    )
}