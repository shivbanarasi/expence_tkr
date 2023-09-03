import "./ExpenceForm.css"
const ExpenceForm=()=>{

    const conso=()=>{
        const title=document.getElementById("title").value;
        const price=document.getElementById("amount").value;
        const location=document.getElementById("location").value
        console.log(title,price,location)
    }
return(
    <form className="styled-form">
        <label>Title:</label>
        <input type="text" placeholder="expence title" name="title" id="title"/>
        <label>amount:</label>
        <input type="text" placeholder="amount" id="amount"/>
        <label>location:</label>
        <input type="text" placeholder="location" id="location"/>
        <button onClick={conso}>add expence</button>
    </form>
)
}
export default ExpenceForm