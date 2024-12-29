import { useState } from "react";
import { useParams } from "react-router-dom"
import"./DetailsProduct.css"

export default function ProductDetails() {

    const [data , setdata] = useState({})
    const params = useParams()
    console.log(params)

    fetch(`https://dummyjson.com/products/${params.productID}`)
    .then(res => res.json())
    .then(json=>setdata(json));
    
    
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={data?.thumbnail} alt="" />
                    </div>
                    <div className="col-md-6">
                        <p><span>Title:</span> {data?.title}</p>
                        <p><span>Description:</span> {data?.description}</p>
                        <p><span>Price:</span> {data?.price}</p>
                        <p><span>Rate:</span> {data?.rating}</p>
                        <p><span>Stock:</span> {data?.stock}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}