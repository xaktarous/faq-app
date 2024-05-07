import { useState } from "react"
import { Minus, Plus } from "../assets/assets"


const Question = ({id,quest,desc}) => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className="qst1">
 <div id="qst"> <p>{quest}</p>
  <button id="btn" onClick={()=>setIsOpen(!isOpen)} > {isOpen?<Minus/>:<Plus/>}</button> 
</div>
{ isOpen &&  <div id="hide-show">
  <p>
    {desc}
  </p> </div> }


  {id!==4 &&<hr/>}
 </div>
  )
}
export default Question