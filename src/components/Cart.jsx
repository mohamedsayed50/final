import { useRecoilState } from "recoil"
import cartAtom from "./atom"
import"./cart.css"

export default function Cart(props) {

    const [product , setProduct] = useRecoilState(cartAtom)
    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      }

    return (
        <section className="cart">
            <div className="container">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      product.map((Element , index)=>{
                        return (
                            <tr>
                              <td><img src={Element.thumbnail} alt="" /></td>
                              <td>{Element.title}</td>
                              <td>{Element.price}</td>
                              <td><button className="btn btn-primary" onClick={()=>{
                                setProduct(removeItemAtIndex(product , index))
                              }}>Delete</button></td>
                             </tr>
                        )
                      })  
                    }
                </tbody>
            </table>
            </div>
        </section>
    )
}