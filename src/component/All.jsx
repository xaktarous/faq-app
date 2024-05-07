import { contents } from "../content"
import Head from "./Head"
import Question from "./Question"
const All = () => {
  return (
    <div class="faq">
     <Head/>
     {contents.map((cont)=>{
       return  <Question {...cont} key={cont.id}/>
     })}
     
    </div>
  )
}
export default All