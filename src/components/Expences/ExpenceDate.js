import "./ExpenceDate.css"
function ExpenceDate(props){
    const day=props.date.toLocaleString("en-US",{month:'long'});
    const month=props.date.toLocaleString("en-US",{day:'2-digit'});
    const year=props.date.getFullYear()
    return(
        <div className='exp_date'>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
            </div> 
    )
}

export default ExpenceDate;