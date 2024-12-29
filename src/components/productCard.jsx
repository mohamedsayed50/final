 
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import"./productCard.css"
import { useSetRecoilState } from "recoil";
import cartAtom from "./atom";

export default function Card(props) {

//  document.querySelector(".control span").onClick = function() {
//    document.querySelector(".control").remove()
//  }
  

  const setProduct = useSetRecoilState(cartAtom)
    return (
      
      
        <div className="col-sm-12 col-md-6 col-lg-4" data-aos="flip-right">
            <div class="card">
            <i  class="fa-regular fa-heart i"></i>
            <div className="discount">-25%</div>  
            <img src={props.product.thumbnail} class="card-img-top" alt="..."/>
            <div class="card-body">
               <div className="flex">
               <h5 class="card-title">{props.product.title}</h5>
               <p class="card-text">${props.product.price}</p>
               </div>
              
              <h5><span>Rate:</span>{props.product.rating}</h5>
              <div className="icon">
                
                <div>
                <Link to={`/details/${props.product.id}`} class="btn btn-primary">Product Details</Link>
                 <button onClick={()=>{
                toast.success("success")
                setProduct((oldData)=>{
                 let  newcart= [...oldData , props.product]
                  // localStorage.setItem("product" , JSON.stringfy(newcart))
                  return newcart
                })
                }} className="btn btn-info ms-3">Add To Cart</button>
                </div>
                <div className="icons">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
              </div>
              
             
              
              </div>
             
            
          </div>
        </div>

    )
}