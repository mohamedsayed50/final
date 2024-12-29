import { atom } from "recoil";

 let value = []

//  if(localStorage.getItem) {
//     value = JSON.parse(localStorage.getItem("product"))
//  }


const cartAtom = atom({
    key: 'cartAtom', // unique ID (with respect to other atoms/selectors)
    default: value, // default value (aka initial value)
  });
  export default cartAtom