import { useEffect, useState } from "react";
import Card from "../productCard";

export default function Home(props) {


    const [Data , setData] = useState({})

    async function FetchData() {
        let res = await fetch("https://dummyjson.com/products")
          
        setData(await res.json())
    }
    useEffect(()=>{
        FetchData()
    },[])

    return (
        <section className="home">
            <div className="container">
                <div className="row g-3">
                    {
                        Data.products?.map((element)=>{
                            console.log(Data)
                            return(
                                <Card product={element} setcart={props.setcart}/>
                            )
                        })
                    }
                   
                 
                   
                </div>
            </div>
        </section>
    )
}