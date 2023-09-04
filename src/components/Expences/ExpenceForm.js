import "./ExpenceForm.css"
import { useState } from "react"
const ExpenceForm=()=>{
   // const data=[];

   
    const [enteredTitle,setTitle]=useState('')
    const [enteredAmount,setAmount]=useState('')
    const [enteredDate,setDate]=useState('')

    const conso=(e)=>{
        e.preventDefault()

        const expenceData={
            title:enteredTitle,
            amount:enteredAmount,
            date:enteredDate
        }
        console.log(expenceData)
        // const date=document.getElementById("date")
        // const title=document.getElementById("title").value;
        // const price=document.getElementById("amount").value;
        // const location=document.getElementById("location").value
        // data.push({title:title,price:price,date:date})
        // console.log(title,price,location)
        // console.log(data)
    }

    const changeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const changeAmount=(e)=>{
        setAmount(e.target.value)
    }

    const changeDate=(e)=>{
        setDate(e.target.value)
    }

return(
    <form className="styled-form">
        <label>Title:</label>
        <input type="text" placeholder="expence title" onChange={changeTitle} id="title"/>
        <label>amount:</label>
        <input type="text" placeholder="amount" onChange={changeAmount} id="amount"/>
        <label>Date:</label>
        <input type="Date" id="date" onChange={changeDate}/>
        <br/>
        <button onClick={conso}>add expence</button>
    </form>
)
}
export default ExpenceForm