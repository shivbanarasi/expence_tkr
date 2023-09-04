import "./ExpenceForm.css"
import { useState } from "react"
const ExpenceForm=()=>{

    const conso=(e)=>{
        e.preventDefault()
        const title=document.getElementById("title").value;
        const price=document.getElementById("amount").value;
        const location=document.getElementById("location").value
        console.log(title,price,location)
    }
    const [enteredTitle,setTitle]=useState('')
    const [enteredAmount,setAmount]=useState('')
    const [enteredDate,setDate]=useState('')

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
        <label>location:</label>
        <input type="text" placeholder="location" onChange={changeDate} id="location"/>
        <label>Date:</label>
        <input type="Date"/>
        <br/>
        <button onClick={conso}>add expence</button>
    </form>
)
}
export default ExpenceForm